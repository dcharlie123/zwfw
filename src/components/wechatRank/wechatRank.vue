<template>
  <div class="container">
    <div class="selectBtn">
      <el-radio-group v-model="radio" @change="radioChange">
        <el-radio-button label="阅读量"></el-radio-button>
        <el-radio-button label="点赞量"></el-radio-button>
        <el-radio-button label="评论量"></el-radio-button>
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
          <ul>
            <li>
              <p class="type">总阅读量最多</p>
              <p class="organization">广东省环保局</p>
              <p class="num">
                <span>314</span>次</p>
            </li>
            <li>
              <p class="type">总阅读量最多</p>
              <p class="organization">广东省环保局</p>
              <p class="num">
                <span>314</span>次</p>
            </li>
            <li>
              <p class="type">总阅读量最多</p>
              <p class="organization">广东省环保局</p>
              <p class="num">
                <span>314</span>次</p>
            </li>
            <li>
              <p class="type">总阅读量最多</p>
              <p class="organization">广东省环保局</p>
              <p class="num">
                <span>314</span>次</p>
            </li>
            <li>
              <p class="type">总阅读量最多</p>
              <p class="organization">广东省环保局</p>
              <p class="num">
                <span>314</span>次</p>
            </li>
          </ul>
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
                <input type="text" name="" id="" class="search" placeholder="请输入公号名">
                <button class="searchBtn">搜索</button>
              </div>
            </div>
          </div>
        </div>
        <div class="table-wrapper">
          <table class="table" border="0">
            <thead>
              <th>排名</th>
              <th>机构号</th>
              <th>总阅读量</th>
              <th>平均阅读量</th>
              <th>头条阅读量</th>
              <th>头条阅读平均量</th>
              <th>单篇最高阅读量</th>
              <th>详情</th>
            </thead>
            <tbody>
              <tr v-for="o in 4">
                <td>
                  <span class="rank" :class="o<=3 ?'top3':''">{{o}}</span>
                </td>
                <td>广东环保</td>
                <td>23534534</td>
                <td>312312</td>
                <td>131231</td>
                <td>23123</td>
                <td>1321</td>
                <td>
                  <span class="detail">详情</span>
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
    return {
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
      ]
    };
  },
  created() {
    this.$http
      .post(
        "http://120.79.224.76:82/mediarank/htdoc/api.php?s=/NdzwInterfaces/getSeason",
        { mname: "wechat" }
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
    //  this.$http.post(
    //       "http://120.79.224.76:82/mediarank/htdoc/api.php?s=/NdzwInterfaces/getWechatOrgan",
    //       { type: 0 }
    //     )
    //     .then(res => {
    //       console.log(res);
    //     });
  },
  watch: {
    value: {
      handler: function(val, oldVal) {
        var yearNseason = this.value.split("-");
        this.year = yearNseason[0];
        this.season = yearNseason[1];
        this.getwechatSummary(this.season,this.year)
      },
      immediate: true
    }
    // type: {
    //   handler(val) {
    //     this.$http
    //       .post(
    //         "http://120.79.224.76:82/mediarank/htdoc/api.php?s=/NdzwInterfaces/getWechatOrgan",
    //         { type: this.type }
    //       )
    //       .then(res => {
    //         console.log(res);
    //       });
    //   },
    //   immediate: true
    // }
  },
  methods: {
    getwechatSummary(season,year){
      this.$http.post("http://120.79.224.76:82/mediarank/htdoc/api.php?s=/NdzwInterfaces/summary",{"season":season,"year":year}).then((res)=>{
        console.log(res)
      })
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    onSubmit() {
      console.log("submit!");
    },
    radioChange() {
      console.log(this.radio);
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
    padding: 22px 30px;
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
