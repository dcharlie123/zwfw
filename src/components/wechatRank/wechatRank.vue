<template>
  <div class="container">
    <div class="selectBtn">
      <el-radio-group v-model="radio" @change="radioChange">
        <el-radio-button label="阅读量"></el-radio-button>
        <el-radio-button label="点赞量"></el-radio-button>
        <el-radio-button label="发稿量"></el-radio-button>
        <el-radio-button label="记者评价榜"></el-radio-button>
        <!--<el-radio-button label="发稿量"></el-radio-button>
        <el-radio-button label="媒体评价"></el-radio-button>-->
      </el-radio-group>
    </div>
    <div class="cardWarp1">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          整体概况
        </div>
        <div class="cardBox">
          <ul v-if="Object.keys(summary).length">
            <li v-if="summary.avg_read">
              <p class="type">平均阅读量</p>
              <p class="organization">{{summary.avg_read.name}}</p>
              <p class="num">
                <span>{{summary.avg_read.avg_read}}</span>次</p>
            </li>
            <li v-if="summary.head_like">
              <p class="type">首页点赞</p>
              <p class="organization">{{summary.head_like.name}}</p>
              <p class="num">
                <span>{{summary.head_like.head_like}}</span>次</p>
            </li>
            <li v-if="summary.head_read">
              <p class="type">头条阅读总量</p>
              <p class="organization">{{summary.head_read.name}}</p>
              <p class="num">
                <span>{{summary.head_read.head_read}}</span>次</p>
            </li>
            <li v-if="summary.pushnum">
              <p class="type">推送次数</p>
              <p class="organization">{{summary.pushnum.name}}</p>
              <p class="num">
                <span>{{summary.pushnum.pushnum}}</span>次</p>
            </li>
            <li v-if="summary.sending_num">
              <p class="type">发文数</p>
              <p class="organization">{{summary.sending_num.name}}</p>
              <p class="num">
                <span>{{summary.sending_num.sending_num}}</span>次</p>
            </li>
            <li v-if="summary.single_read">
              <p class="type">单篇最高阅读</p>
              <p class="organization">{{summary.single_read.name}}</p>
              <p class="num">
                <span>{{summary.single_read.single_read}}</span>次</p>
            </li>
            <li v-if="summary.total_read">
              <p class="type">总阅读数</p>
              <p class="organization">{{summary.total_read.name}}</p>
              <p class="num">
                <span>{{summary.total_read.total_read}}</span>次</p>
            </li>
            <li v-if="summary.affinity">
              <p class="type">文风亲和力</p>
              <p class="organization">{{summary.affinity.name}}</p>
              <p class="num">
                <span>{{summary.affinity.affinity}}</span>分</p>
            </li>
            <li v-if="summary.consensus">
              <p class="type">舆情应对</p>
              <p class="organization">{{summary.consensus.name}}</p>
              <p class="num">
                <span>{{summary.consensus.consensus}}</span>分</p>
            </li>
            <li v-if="summary.information">
              <p class="type">信息公开</p>
              <p class="organization">{{summary.information.name}}</p>
              <p class="num">
                <span>{{summary.information.information}}</span>分</p>
            </li>
            <li v-if="summary.media">
              <p class="type">媒体评价</p>
              <p class="organization">{{summary.media.name}}</p>
              <p class="num">
                <span>{{summary.media.media}}</span>分</p>
            </li>
          </ul>
          <div v-else>暂无数据</div>
        </div>
      </el-card>
    </div>
    <div class="cardWarp2">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <div class="cardHeader">
            <div class="left">
              <el-select v-model="value" placeholder="请选择" size="small">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="right">
              <el-select v-model="type" placeholder="请选择" size="small">
                <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <el-select v-model="organ" placeholder="请选择" size="small">
                <el-option v-for="item in organOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <div class="searchW">
                <input type="text" name="" id="" class="search" placeholder="请输入公号名" v-model.trim="searchData">
                <button class="searchBtn" @click="goSeach">搜索</button>
              </div>
            </div>
          </div>
        </div>
        <div class="table-wrapper">
          <table class="table" border="0">
            <thead>
              <th v-for="item in tableHeader">{{item}}</th>
              <th>详情</th>
            </thead>
            <tbody>
              <tr v-for="(item,index) in tableData" v-if='field == "read"'>
                <td>
                  <span class="rank" :class="index+1<=3 ?'top3':''">{{index+1}}</span>
                </td>
                <td>{{item.nature}}</td>
                <td>{{item.name}}</td>
                <td>{{item.avg_read?item.avg_read:'-'}}</td>
                <td>{{item.head_read?item.head_read:'-'}}</td>
                <td>{{item.single_read?item.single_read:'-'}}</td>
                <td>{{item.total_read?item.total_read:'-'}}</td>
                <td>
                  <span class="detail" :data-name="item.name" @click="goDetail">详情</span>
                </td>
                
              </tr>
              <tr v-for="(item,index) in tableData" v-if='field == "like"'>
                <td>
                  <span class="rank" :class="index+1<=3 ?'top3':''">{{index+1}}</span>
                </td>
                <td>{{item.nature}}</td>
                <td>{{item.name}}</td>
                <td>{{item.likes?item.likes:'-'}}</td>
                <td>{{item.avg_like?item.avg_like:'-'}}</td>
                <td>{{item.head_like?item.head_like:'-'}}</td>
                <td>
                  <span class="detail" :data-name="item.name" @click="goDetail">详情</span>
                </td>
                
              </tr>
              <tr v-for="(item,index) in tableData" v-if='field == "send"'>
                <td>
                  <span class="rank" :class="index+1<=3 ?'top3':''">{{index+1}}</span>
                </td>
                <td>{{item.nature}}</td>
                <td>{{item.name}}</td>
                <td>{{item.pushnum?item.pushnum:'-'}}</td>
                <td>{{item.sending_num?item.sending_num:'-'}}</td>
                <td>
                  <span class="detail" :data-name="item.name" @click="goDetail">详情</span>
                </td>
                
              </tr>
              <tr v-for="(item,index) in tableData" v-if='field == "score"'>
                <td>
                  <span class="rank" :class="index+1<=3 ?'top3':''">{{index+1}}</span>
                </td>
                <td>{{item.nature}}</td>
                <td>{{item.name}}</td>
                <td>{{item.affinity?item.affinity:"-"}}</td>
                <td>{{item.consensus?item.consensus:'-'}}</td>
                <td>{{item.information?item.information:'-'}}</td>
                <td>{{item.media?item.media:'-'}}</td>
                <td>
                  <span class="detail" :data-name="item.name" @click="goDetail">详情</span>
                </td>
                
              </tr>
              <tr>
                <td :colspan="tableHeader.length+1" v-if="!tableData.length">暂无数据</td>
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
    return {
      searchData: "",
      tableHeader: [
        "排名",
        "机构",
        "微信号",
        "头条阅读量",
        "平均阅读量",
        "单篇最高阅读",
        "总阅读数"
      ],
      activeName2: "first",
      year: null,
      season: null,
      tableData: [],
      tabPosition: "left",
      formInline: {
        user: "",
        region: ""
      },
      date: "",
      radio: "阅读量",
      field: "read",
      options: [],
      value: "",
      organ: "机构名",
      organOptions: [],
      type: 0,
      typeOptions: [
        {
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
      summary: {}
    };
  },
  created() {
    this.$http
      .post(
        "http://research.nandu.com/mediarank/htdoc/api.php?s=/NdzwInterfaces/getSeason",
        {
          mname: "wechat"
        }
      )
      .then(res => {
        var res = res.data;
        var dataTo = ["一", "二", "三", "四"];
        res.map(item => {
          this.options.push({
            value: `${item.year}-${item.season}`,
            label: `${item.year}年第${dataTo[item.season - 1]}季度`
          });
        });
        this.value = this.options[0].value;
        this.year = res[0].year;
        this.season = res[0].season;
      });
  },
  watch: {
    value: {
      handler: function(val, oldVal) {
        if (this.season && this.year) {
          var yearNseason = this.value.split("-");
          this.year = yearNseason[0];
          this.season = yearNseason[1];

          this.getwechatSummary(this.season, this.year, this.type,this.field).then(
            res => {
              this.summary = {};
              this.summary = res.data;
            }
          );
          if (!this.tableData.length) {
            this.getwechatData(this.season, this.year,this.type, this.field).then(res => {
              if (res.data != "false") {
                this.tableData = res.data;
              } else {
                this.tableData = [];
              }
            });
          }
        }
      },
      immediate: true
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
          setTimeout(() => {
          this.getwechatSummary(this.season, this.year, this.type,this.field).then(
            res => {
              this.summary = {};
              this.summary = res.data;
            }
          );
          this.getwechatData(this.season, this.year,this.type, this.field).then(res => {
            if (res.data != "false") {
              this.tableData = res.data;
            } else {
              this.tableData = [];
            }
          });
        });
        }
      },
      immediate: true
    },
    field: {
      handler(val) {
        setTimeout(() => {
          this.getwechatSummary(this.season, this.year, this.type,this.field).then(
            res => {
              this.summary = {};
              this.summary = res.data;
            }
          );
          this.getwechatData(this.season, this.year,this.type, this.field).then(res => {
            if (res.data != "false") {
              this.tableData = res.data;
            } else {
              this.tableData = [];
            }
          });
        });
      },
      immediate: true
    },
    organ(val) {
      this.getwechatData(this.season, this.year, this.type,this.field, {
        organ: String(this.organ)
      }).then(res => {
        if (res.data != "false") {
          this.tableData = res.data;
        } else {
          this.tableData = [];
        }
      });
    }
  },
  methods: {
    goSeach() {
      if (this.searchData) {
        if (this.organ!="机构名"&&this.organ) {
          this.getwechatData(this.season, this.year,this.type,this.field, {
            "name": this.searchData,
            "organ":this.organ
          }).then(res => {
            if (res.data != "false") {
              this.tableData = res.data;
            } else {
              this.tableData = [];
            }
          });
        } else {
          this.getwechatData(this.season, this.year, this.type,this.field, {
            name: this.searchData
          }).then(res => {
            if (res.data != "false") {
              this.tableData = res.data;
            } else {
              this.tableData = [];
            }
          });
        }
      }
    },
    goDetail(ev) {
      var dataset = ev.target.dataset;
      this.$router.push({
        name: "detail",
        params: { Otype: "wechatRank", name: escape(dataset.name) }
      });
    },
    getOrgan(type) {
      return this.$http.post(
        "http://research.nandu.com/mediarank/htdoc/api.php?s=/NdzwInterfaces/getOrgan",
        {
          mname: "wechat",
          type: type
        }
      );
    },
    getwechatSummary(season, year,type,field) {
      return this.$http.post(
        "http://research.nandu.com/mediarank/htdoc/api.php?s=/NdzwInterfaces/summary",
        {
          season: season,
          year: year,
          type:type,
          field: field
        }
      );
    },
    getwechatData(season, year,type, field, otherOptions) {
      var options = {
        season: season,
        year: year,
        type:type,
        field: field
      };
      Object.assign(options, otherOptions);
      return this.$http.post(
        "http://research.nandu.com/mediarank/htdoc/api.php?s=/NdzwInterfaces/getWechatData",
        options
      );
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    onSubmit() {
      console.log("submit!");
    },
    radioChange() {
      switch (this.radio) {
        case "阅读量":
          this.field = "read";
          this.tableHeader = [
            "排名",
            "机构",
            "微信号",
            "头条阅读量",
            "平均阅读量",
            "单篇最高阅读",
            "总阅读数"
          ];
          this.organ="机构名"
          break;
        case "点赞量":
          this.field = "like";
          this.tableHeader = [
            "排名",
            "机构",
            "微信号",
            "总点赞量",
            "平均点赞量",
            "头条总点赞量",
          ];
          this.organ="机构名"
          break;
        case "发稿量":
          this.field = "send";
          this.tableHeader = ["排名", "机构", "微信号", "推送数", "发文数"];
           this.organ="机构名"
          break;
        case "记者评价榜":
          this.field = "score";
          this.tableHeader = [
            "排名",
            "机构",
            "微信号",
            "文风亲和力",
            "舆情应对",
            "信息公开",
            "媒体评价"
          ];
          this.organ="机构名"
          break;
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/css/style.scss";
.container {
  .allRank-header {
    display: flex;
    justify-content: space-between;
  }
  .selectBtn {
    padding-top: 30px;
    text-align: center;
  }
  .el-container {
  }
  .cardWarp1 {
    padding: 22px 30px;
    .cardBox {
      ul {
        padding: 0;
        margin: 0;
        font-size: 0;
        list-style: none;
        display: flex;
        justify-content: space-around;
        li {
          font-size: 16px;
          .type {
            font-size: 14px;
            color: #666666;
          }
          .organization {
            font-size: 18px;
            color: #333;
            font-weight: 600;
          }
          .num {
            span {
              color: #c91b1b;
            }
          }
        }
      }
    }
  }
  .cardWarp2 {
    padding: 50px 30px;
    .cardHeader {
      display: flex;
      justify-content: space-between;
      .right {
        display: flex;
        .el-select {
          margin-right: 10px;
        }
        .searchW {
          margin-left: 70px;

          .search {
            height: 30px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 4px 0 0 4px;
            margin: 0;
            padding: 0 10px;
            vertical-align: middle;
          }
          .searchBtn {
            vertical-align: middle;
            height: 30px;
            line-height: 30px;
            padding: 0;
            margin-left: -4px;
            box-sizing: border-box;
            padding: 0 14px;
            color: #fff;
            background-color: #c91b1b;
            border: 0;
            border-radius: 0 4px 4px 0;
          }
        }
      }
    }
    .table-wrapper {
      @include Mytable;
    }
  }
}
</style>
