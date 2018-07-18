<template>
  <div class="container">
    <header>
      <h1 class="organization">{{name}}</h1>
      <!--<div class="right">
        <el-select v-model="type" placeholder="请选择" size="small">
          <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="organ" placeholder="请选择" size="small">
          <el-option v-for="item in organOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <div class="searchW">
          <input type="text" name="" id="" class="search" placeholder="请输入公号名">
          <button class="searchBtn">搜索</button>
        </div>
      </div>-->
    </header>
    <div class="selectBtn" v-if="mname!='weibo'">
      <el-radio-group v-model="radio" @change="radioChange">
        <el-radio-button label="阅读量"></el-radio-button>
        <el-radio-button label="点赞量"></el-radio-button>
        <!--<el-radio-button label="评论量"></el-radio-button>-->
        <el-radio-button label="发稿量"></el-radio-button>
        <!--<el-radio-button label="媒体评价"></el-radio-button>-->
      </el-radio-group>
    </div>
    <div class="cardWarp1" v-if="Object.keys(tableData).length && Object.keys(tableData.rank).length">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          整体概况
        </div>
        <div class="cardBox">
          <ul>
            <li v-for="item in listData" v-if="tableData.rank[item[0]]">
              <p class="type">{{item[1]}}</p>
              <p class="rank">第{{tableData.rank[item[0]]}}名</p>
            </li>

          </ul>
        </div>
      </el-card>
    </div>
    <div class="cardWarp1">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          趋势图
        </div>
        <div>
          <ve-line :data="chartData" :settings="chartSettings" :extend="chartExtend" :after-config="afterConfig"></ve-line>
        </div>
      </el-card>
    </div>
    <div class="cardWarp1">
      <el-card class="box-card">
        <div class="table-wrapper">
          <table class="table" border="0">
            <thead>
              <th>季度</th>
              <th v-if="tableHeader" v-for="(item,index) in tableHeader">{{item}}</th>
            </thead>
            <tbody>
              <tr v-for="item in rowsData">
                <td>{{item.date}}</td>
                <td v-for="item1 in listData1" v-if="item[item1]">
                  {{item[item1]}}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      this.chartSettings = {
          labelMap: {
            total_read: '总阅读数',
            avg_read: '平均阅读量',
            head_read: '头条阅读量',
            pushnum: '推送数',
            like: '点赞数',
            avg_like: '平均点赞',
            head_like: '首页点赞',
            single_read: '单篇最高阅读',
            information: '信息公开',
            sending_num: '发文数',
            consensus: '舆情应对',
            affinity: '文风亲和力',
            media: '媒体评价',
            weibo: '发博数',
            follow: '关注数',
            influence: '影响力',
            vitality: '活跃力',
            send: '发文数',
            reacommend: "推荐数",
            collect: "收藏数",
            share: "分享数",
            comment: "评论数",
            fans: "粉丝数",
            fans_add: "粉丝增量",
            avg_recommend: "平均推荐数",
            avg_collect: "平均收藏",
            avg_share: "平均分享",
            avg_comment: "平均评论"
          }
        },
        this.chartExtend = {
          xAxis: {
            boundaryGap: false,
            axisLabel: {
              rotate:45,
              margin: 20,
              fontSize: 14
            }
          }
        }
      return {
        listData: [
          ['total_read', '总阅读数'],
          ['avg_read', '平均阅读量'],
          ['head_read', '头条阅读量'],
          ['pushnum', '推送数'],
          ['like', '点赞数'],
          ['avg_like', '平均点赞'],
          ['head_like', '首页点赞'],
          ['single_read', '单篇最高阅读'],
          ['information', '信息公开'],
          ['sending_num', '发文数'],
          ['consensus', '舆情应对'],
          ['affinity', '文风亲和力'],
          ['media', '媒体评价'],
          ['weibo', '发博数'],
          ['follow', '关注数'],
          ['influence', '影响力'],
          ['vitality', '活跃力'],
          ['send', '发文数'],
          ['reacommend', "推荐数"],
          ['collect', "收藏数"],
          ['share', "分享数"],
          ['comment', "评论数"],
          ['fans', "粉丝数"],
          ['fans_add', "粉丝增量"],
          ['avg_recommend', "平均推荐数"],
          ['avg_collect', "平均收藏"],
          ['avg_share', "平均分享"],
          ['avg_comment', "平均评论"]
        ],
        listData1: [],
        chartData: {
          columns: [],
          rows: []
        },
        organ: "机构名",
        organOptions: [],
        // dataEmpty: true,
        activeName2: 'first',
        tableData: {},
        tabPosition: 'left',
        date: '',
        radio: "阅读量",
        type: 0,
        typeOptions: [{
            label: "广东省级部门",
            value: 0
          },
          {
            label: "广东省21个地市",
            value: 1
          },
          {
            label: "广州市直部门",
            value: 2
          }
        ],
        name: "",
        year: '',
        season: '',
        field: 'read',
        Otype: "",
        tableHeader: [],
        mname: 'wechat'
      };
    },
    computed:{
      rowsData(){
        return Array.reverse(this.chartData.rows)
      }
    },
    created() {
      this.name = unescape(this.$route.params.name);
      // console.log(this.name)
      // this.year = this.$route.params.year;
      // this.season = this.$route.params.season;
      this.Otype = this.$route.params.Otype;
      if (this.Otype == 'wechatRank') {
        this.mname = "wechat"
      } else if (this.Otype == "weiboRank") {
        this.mname = "weibo"
      } else if (this.Otype == 'headlineRank') {
        this.mname = 'headline'
      }
      var options = {
        name: this.name
      }
      if (this.Otype != "weiboRank") {
        Object.assign(options, {
          field: this.field
        })
        this.getDetail(this.Otype, options)
      } else(
        this.getDetail(this.Otype, options)
      )
    },
    watch: {
      $route(to, from) {
        // console.log(to.path)
      },
      field() {
        var options = {
          name: this.name
        }
        if (this.Otype != "weiboRank") {
          Object.assign(options, {
            field: this.field
          })
          this.getDetail(this.Otype, options)
        } else(
          this.getDetail(this.Otype, options)
        )
      },
      type: {
        handler(val) {
          if (this.type == 0 || this.type == 1 || this.type == 2) {
            this.getOrgan(this.type).then(res => {
              this.organOptions = [];
              res.data.map(item => {
                this.organOptions.push({
                  label: item.nature,
                  value: item.nature
                });
              });
            });
          }
        },
        immediate: true
      }
    },
    methods: {
      firstUpperCase(str) {
        return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
      },
      getDetail(Otype, options) {
        this.$http.post(
          `http://research.nandu.com/mediarank/htdoc/api.php?s=/NdzwInterfaces/get${this.firstUpperCase(this.mname)}Company`,
          options).then((res) => {
          this.tableData = res.data;
        }).then(() => {
          this.chartData = this.dealChartData(this.tableData.data);

          this.dealtableHeader(this.chartData.columns);
        })

      },
      getOrgan(type) {
        return this.$http.post(
          "http://research.nandu.com/mediarank/htdoc/api.php?s=/NdzwInterfaces/getOrgan", {
            mname: this.mname,
            type: type
          }
        )
      },
      dealtableHeader(data) {
        var set1 = new Set(this.chartData.columns);
        var a = [];
        this.listData.map((item) => {
          a.push(item[0])
        })
        this.listData1 = a;
        // this.listData1.unshift()
        var set2 = new Set(a);
        var head = [];
        var b = [...set2].filter((x, index) => {
          if (set1.has(x)) {
            this.listData.forEach((item, index1) => {
              if (index == index1) {
                head.push(item[1])
              }
            })
          }
        })
        this.tableHeader = head;
      },
      handleClick(tab, event) {
        // console.log(tab, event);
      },
      onSubmit() {
        // console.log('submit!');
      },
      radioChange() {
        switch (this.radio) {
          case '阅读量':
            this.field = "read";
            this.tableHeader = ["头条阅读量", "平均阅读量", "单篇最高阅读", "总阅读数"]
            break;
          case '点赞量':
            this.field = "like";
            this.tableHeader = ["平均点赞", "首页点赞", "首页点赞"]
            break;
          case '发稿量':
            this.field = "send";
            this.tableHeader = ["推送数", "发文数"]
            break;
        }
      },
      afterConfig(options) {
        options.legend.y = 'bottom'
        return options
      },
      obj2key(obj, keys) {
        var n = keys.length,
          key = [];
        while (n--) {
          key.push(obj[keys[n]]);
        }
        return key.join('|');
      },
      uniqeByKeys(array, keys) {
        var arr = [];
        var hash = {};
        for (var i = 0, j = array.length; i < j; i++) {
          var k = this.obj2key(array[i], keys);
          if (!(k in hash)) {
            hash[k] = true;
            arr.push(array[i]);
          }
        }
        return arr;
      },
      dealSeanson(data){
        var dataArr=data.split("-");
        var year=dataArr[0],month=Number(dataArr[1]),season;
        if(month<=3){
          season="一"
        }else if(month>3&&month<=6){
          season="二"
        }else if(month>6&&month<=9){
          season="三"
        }else if(month>9&&month<=12){
          season="四"
        }
        return `${year}年第${season}季度`;
      },
      dealChartData(data) {
        var dealData = [],
          columns = [],
          dataArr = [];
        //columns
        columns.push("date");
        var arr = Object.entries(data);
        for (var i in arr[0][1]) {
          columns.push(i)
        }
        var rows = [];
        for (var i = 0; i < arr.length; i++) {
          rows[i] = {};
          rows[i]["date"] = this.dealSeanson(arr[i][0]);
          for (var j = 1; j < columns.length; j++) {
            rows[i][columns[j]] = arr[i][1][columns[j]]
          }
        }
        return {
          columns: columns,
          rows: Array.reverse(rows)
        }
      }
    }
  };

</script>

<style scoped lang="scss">
  @mixin lvhfa {
    &:link,
    &:visited,
    &:hover,
    &:focus,
    &:active {
      outline: none;
    }
  }

  .container {
    header {
      margin: 56px 30px 0 30px;
      display: flex;
      justify-content: space-between;
      .organization {

        border-left: 5px solid #C91B1B;
        padding-left: 23px;
      }
      .right {
        display: flex;
        padding-top: 20px;
        .el-select {
          margin-right: 10px;
        }
        .searchW {
          margin-left: 70px;
          .search {
            @include lvhfa;
            height: 32px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 4px 0 0 4px;
            margin: 0;
            padding: 0 10px;
            vertical-align: middle;
          }
          .searchBtn {
            @include lvhfa;
            vertical-align: middle;
            height: 32px;
            padding: 0;
            margin-left: -4px;
            box-sizing: border-box;
            padding: 0 14px;
            color: #fff;
            background-color: #C91B1B;
            border: 0;
            border-radius: 0 4px 4px 0;
            &:hover {
              background: #ff0000;
            }
          }
        }
      }
    }
    .selectBtn {
      padding-top: 30px;
      text-align: center;
    }
    .cardWarp1 {
      padding: 22px 30px;
      .cardBox {
        ul {
          margin: 0;
          font-size: 0;
          list-style: none;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          text-align: center;
          li {
            display: inline-block;
            width: 20%;
            text-align: center;
            font-size: 16px;
            .type {
              font-size: 14px;
              color: #666666;
            }
            .rank {
              color: #333;
              font-size: 24px;
            }
          }
        }
      }
      .table-wrapper {
        .table {
          border-collapse: collapse;
          width: 100%;
          text-align: center;
          thead {
            th {
              height: 60px;
              line-height: 60px;
              font-size: 14px;
              color: #999;
            }
          }
          tbody {
            font-size: 14px;
            padding: 0;
            td {
              height: 60px;
              line-height: 60px;
              border: 0;
              padding: 0;
            }
            tr {
              &:nth-child(odd) {
                background: #F2F5F6;
              }
            }
          }
        }
      }
    }
  }

</style>
