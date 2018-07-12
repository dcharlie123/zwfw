<template>
  <div class="container">
    <!--<header class="allRank-header">
      <span class="title">微信榜</span>
    </header>
    <div width="200px" style="background-color: rgb(255, 255, 255)">
      <el-tabs :tab-position="tabPosition">
        <el-tab-pane label="概括">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="阅读量">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="">
              <el-select v-model="formInline.region" placeholder="活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="">
              <el-select v-model="formInline.region" placeholder="活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="公众号名">
              <el-input v-model="formInline.user" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-form>
          <el-date-picker v-model="date" type="daterange" start-placeholder="开始日期" end-placeholder="结束日期" :default-time="['12:00:00']">
          </el-date-picker>
          <div>
            <el-table :data="tableData" style="width: 100%" header-row-style="border:1px solid red">
              <el-table-column prop="微信号" label="微信号" width="180">
              </el-table-column>
              <el-table-column prop="总阅读数" label="总阅读数" width="180">
              </el-table-column>
              <el-table-column prop="address" label="平均阅读量">
              </el-table-column>
            </el-table>
          </div>
          <div style="display:flex;justify-content: space-around;">
            <el-table :data="tableData" style="width: 30%;margin-right:50px;" header-row-style="border:1px solid red" border="true">
              <el-table-column prop="微信号" label="微信号" >
              </el-table-column>
              <el-table-column prop="总阅读数" label="总阅读数">
              </el-table-column>
              <el-table-column prop="address" label="平均阅读量">
              </el-table-column>
            </el-table>
            <el-table :data="tableData" style="width: 30%" header-row-style="border:1px solid red" border="true">
              <el-table-column prop="微信号" label="微信号">
              </el-table-column>
              <el-table-column prop="总阅读数" label="总阅读数">
              </el-table-column>
              <el-table-column prop="address" label="平均阅读量">
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="点赞量">角色管理</el-tab-pane>
        <el-tab-pane label="评价量">定时任务补偿</el-tab-pane>
        <el-tab-pane label="发稿量">定时任务补偿</el-tab-pane>
        <el-tab-pane label="媒体评价">定时任务补偿</el-tab-pane>

      </el-tabs>
    </div>-->
    <div class="selectBtn">
      <el-radio-group v-model="radio" @change="radioChange">
        <el-radio-button label="阅读量"></el-radio-button>
        <el-radio-button label="点赞量"></el-radio-button>
        <el-radio-button label="评论量"></el-radio-button>
        <el-radio-button label="发稿量"></el-radio-button>
        <el-radio-button label="媒体评价"></el-radio-button>
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
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="right">
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
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
        activeName2: 'first',
        tableData1: [],
        tableData2: [],
        tableData: [],
        tabPosition: 'left',
        formInline: {
          user: '',
          region: ''
        },
        date: '',
        radio: "阅读量",
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      onSubmit() {
        console.log('submit!');
      },
      radioChange() {
        console.log(this.radio)
      }
    }
  };

</script>

<style scoped lang="scss">
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
                color: #C91B1B;
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
        .right{
          display: flex;
          .searchW{
            margin-left: 70px;
            .search{
              height: 40px;
              box-sizing: border-box;
              border: 1px solid #ccc;
              border-radius: 4px 0 0 4px;
              margin:0;
              padding: 0 10px;
              vertical-align: middle;
            }
            .searchBtn{
              vertical-align: middle;
              height: 40px;
              padding: 0;
              margin-left: -3px;
              box-sizing: border-box;
              padding:0 14px;
              color:#fff;
              background-color: #C91B1B;
              border: 0;
              border-radius: 0 4px 4px 0;
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
              .rank {
                &.top3 {
                  color: #C91B1B;
                }
              }
              .detail {
                color: #0DA2FF;
                cursor: pointer;
              }
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
