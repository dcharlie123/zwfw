<template>
  <div class="container">
    <header>
      <h1 class="organization">广州环保局</h1>
      <div class="right">
        <el-select v-model="value" placeholder="请选择" size="small">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="value" placeholder="请选择" size="small">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <div class="searchW">
          <input type="text" name="" id="" class="search" placeholder="请输入公号名">
          <button class="searchBtn">搜索</button>
        </div>
      </div>
    </header>
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
              <p class="type">总阅读量排行</p>
              <p class="rank">第1名</p>
            </li>
            <li>
              <p class="type">总阅读量排行</p>
              <p class="rank">第1名</p>
            </li>
            <li>
              <p class="type">总阅读量排行</p>
              <p class="rank">第1名</p>
            </li>
            <li>
              <p class="type">总阅读量排行</p>
              <p class="rank">第1名</p>
            </li>
            <li>
              <p class="type">总阅读量排行</p>
              <p class="rank">第1名</p>
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
          <ve-line :data="chartData" :settings="chartSettings"></ve-line>

        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      this.chartSettings = {
        xAxisType: 'category',
        boundaryGap: false,
      }
      return {
        chartData: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [{
              '日期': '第一季度',
              '访问用户': 1393,
              '下单用户': 1093,
              '下单率': 0.32
            },
            {
              '日期': '第二季度',
              '访问用户': 3530,
              '下单用户': 3230,
              '下单率': 0.26
            },
            {
              '日期': '第三季度',
              '访问用户': 2923,
              '下单用户': 2623,
              '下单率': 0.76
            },
            {
              '日期': '第四季度',
              '访问用户': 1723,
              '下单用户': 1423,
              '下单率': 0.49
            },
            {
              '日期': '2018-01-10',
              '访问用户': 3792,
              '下单用户': 3492,
              '下单率': 0.323
            },
            {
              '日期': '2018-01-20',
              '访问用户': 4593,
              '下单用户': 4293,
              '下单率': 0.78
            }
          ]
        },
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
    created: function () {
     
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
      },
      afterConfig(options) {
        options.legend.y = 'bottom'
        return options
      }
    }
  };

</script>

<style scoped lang="scss">
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
            height: 32px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 4px 0 0 4px;
            margin: 0;
            padding: 0 10px;
            vertical-align: middle;
          }
          .searchBtn {
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
          justify-content: flex-start;
          flex-wrap: wrap;
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
    }
  }

</style>
