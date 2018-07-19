<template>
  <div class="container">
    <!--<div class="cardWarp1">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          整体概况
        </div>
        <div class="cardBox">
          <ul v-if="summary">
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
    </div>-->
    
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
              <el-select v-model="organ" placeholder="请选择" size="small" v-show="organOptions.length">
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
              <th>排名</th>
              <th>机构号</th>
              <th>粉丝</th>
              <th>粉丝增量</th>
              <th>详情</th>
            </thead>
            <tbody>
              <tr v-for="(item,index) in tableData">
                <td>
                  <span class="rank" :class="index+1<=3 ?'top3':''">{{index+1}}</span>
                </td>
                <td>{{item.name}}</td>
                <td>{{item.fans}}</td>
                <td>{{item.fans_add}}</td>
                <td>
                  <span class="detail" :data-name="item.name" @click="goDetail">详情</span>
                </td>
              </tr>
              <tr v-if="!tableData.length">
                <td colspan="5">暂无数据</td>
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
        tableData: [],
        tabPosition: "left",
        date: "",
        options: [],
        value: "",
        organ: "机构名",
        organOptions: [],
        type: 0,
        typeOptions: [{
            label: "广东省级部门",
            value: 0
          },
          {
            label: "广东省21个地市",
            value: 2
          },
          {
            label: "广州市直部门",
            value: 1
          }
        ],
        year: "",
        season: "",
        summary: {}
      };
    },
    watch: {
      value: {
        handler: function (val, oldVal) {
          if (this.season && this.year) {
            var yearNseason = this.value.split("-");
            this.year = yearNseason[0];
            this.season = yearNseason[1];

            this.getHeadlineData(this.season, this.year, this.type).then(res => {
              if (res.data.data!= null) {
                this.tableData = res.data.data;
                // console.log(this.tableData)
              } else {
                this.tableData = [];
              }
            });
          }
        },
        immediate: true
      },
      type: {
        handler(val) {
          if (this.type == 0 || this.type == 1 || this.type == 2) {
            this.getOrgan(this.type).then(res => {
              this.organOptions = [];
              this.organ='机构名';
              if (res.data !== "null") {
                res.data.map(item => {
                  this.organOptions.push({
                    label: item.nature,
                    value: item.nature
                  });
                });
              }
            });
            this.getHeadlineData(this.season, this.year, this.type).then(res => {
              if (res.data.data != null) {
                this.tableData = res.data.data;
                // console.log(this.tableData)
              } else {
                this.tableData = [];
              }
            });
          }
        },
        immediate: true
      },
      organ(val) {
        // console.log(this.organ);
        if (this.organ != "机构名") {
          this.getHeadlineData(this.season, this.year, this.type, {
            organ: this.organ
          }).then(res => {
            if (res.data.data != null) {
              this.tableData = res.data.data;
            } else {
              this.tableData = [];
            }
          });
        }

      }
    },
    created() {
      this.$http
        .post(
          "http://research.nandu.com/mediarank/htdoc/api.php?s=/NdzwInterfaces/getSeason", {
            mname: "headline"
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
    methods: {
      goSeach() {
        if (this.searchData) {
          if (this.organ != "机构名" && this.organ) {
            this.getHeadlineData(this.season, this.year, this.type, {
                name: this.searchData,
                organ: this.organ
              })
              .then(res => {
                if (res.data.data != null) {
                  this.tableData = res.data.data;
                } else {
                  this.tableData = [];
                }
              })
              .then(() => {
                // if (this.tableData.length == 1) {
                //   this.goDetail();
                // }
              });
          } else {
            this.getHeadlineData(this.season, this.year, this.type, {
              name: this.searchData
            }).then(res => {
              if (res.data.data != null) {
                this.tableData = res.data.data;
              } else {
                this.tableData = [];
              }
            });
          }
        }
      },
      getOrgan(type) {
        return this.$http.post(
          "http://research.nandu.com/mediarank/htdoc/api.php?s=/NdzwInterfaces/getOrgan", {
            mname: "headline",
            type: type
          }
        );
      },
      getHeadlineData(season, year, type, otherOptions) {
        var options = {
          season: season,
          year: year,
          type: type
        };
        Object.assign(options, otherOptions);
        return this.$http.post(
          "http://research.nandu.com/mediarank/htdoc/api.php?s=/NdzwInterfaces/getHeadlineData",
          options
        );
      },
      goDetail(ev) {
        var dataset = ev.target.dataset;
        let routeData = this.$router.resolve({
          name: "detail",
          params: {
            Otype: "headlineRank",
            name: escape(dataset.name)
          }
        });
        window.open(routeData.href, '_blank');
        // this.$router.push({
        //   name: "detail",
        //   params: {
        //     Otype: "headlineRank",
        //     name: escape(dataset.name)
        //   }
        // });
      },
      handleClick(tab, event) {
        // console.log(tab, event);
      },
      onSubmit() {
        // console.log("submit!");
      },
      radioChange() {
        // console.log(this.radio);
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
    .el-container {}
    .cardWarp1 {
      padding: 22px 30px;
      .cardBox {
        ul {
          padding: 0 0 0 50px;
          margin: 0;
          font-size: 0;
          list-style: none;
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          li {
            display: inline-block;
            width: 20%;
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
