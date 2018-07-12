<template>
  <div class="container">
    <!--- <header class="allRank-header">
      <span class="title">总榜</span>
      <div>
        <el-button type="primary" plain>主要按钮</el-button>
        <el-button type="primary" plain>主要按钮</el-button>
        <el-button type="primary" plain>主要按钮</el-button>
      </div>
    </header>
    <div>
      <div>
        <el-form>
          <el-form-item label="">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <div>
        <el-table :data="tableData1" style="width: 100%" class="t1">
          <el-table-column prop="date" label="机构" width="180">
          </el-table-column>
          <el-table-column prop="name" label="微博号" width="180">
          </el-table-column>
          <el-table-column prop="address" label="排名">
          </el-table-column>
          <el-table-column prop="address" label="与上期对比升降名次">
          </el-table-column>
        </el-table>
      </div>
      <div>
        <el-table :data="tableData2" style="width: 100%">
          <el-table-column prop="date" label="机构" width="180">
          </el-table-column>
          <el-table-column prop="name" label="微信号" width="180">
          </el-table-column>
          <el-table-column prop="address" label="排名">
          </el-table-column>
          <el-table-column prop="address" label="与上期对比升降名次">
          </el-table-column>
        </el-table>
      </div>
    </div>-->
    <div class="selectBtn">
      <el-radio-group v-model="radio1">
        <el-radio-button label="广东省级部门"></el-radio-button>
        <el-radio-button label="广东省21个地市"></el-radio-button>
        <el-radio-button label="广州市直部门"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="cardWarp">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="table-wrapper">
          <table class="table" border="0">
            <thead>
              <th>机构</th>
              <th>微信号</th>
              <th>排名</th>
              <th>与上期对比升降名次</th>
            </thead>
            <tbody>
              <tr>
                <td>广东环保局</td>
                <td>广东环保</td>
                <td class="rank top3"><span>1</span></td>
                <td>
                  <i></i>
                  <span>1</span>
                </td>
              </tr>
              <tr>
                <td>广东环保局</td>
                <td>广东环保</td>
                <td class="rank top3"><span>2</span></td>
                <td>
                  <i></i>
                  <span>1</span>
                </td>
              </tr>
              <tr>
                <td>广东环保局</td>
                <td>广东环保</td>
                <td class="rank top3"><span>3</span></td>
                <td>
                  <i></i>
                  <span>1</span>
                </td>
              </tr>
              <tr>
                <td>广东环保局</td>
                <td>广东环保</td>
                <td class="rank"><span>4</span></td>
                <td>
                  <i></i>
                  <span>1</span>
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
        radio1: "广东省级部门",
        activeName2: 'first',
        tableData1: [{
          'date': "1",
          "name": "aa",
          "address": "bb"
        }],
        tableData2: [],
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
      select(i) {
        console.log(i)
      }
    }
  };

</script>

<style lang="scss" scoped>
  .container {}

  .selectBtn {
    text-align: center;
    padding-top: 30px;
  }

  .el-card__body {
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
          padding: 0;
          td {
            height: 60px;
            line-height: 60px;
            border: 0;
            padding: 0;
            &.rank{
             span{
               display: inline-block;
               width: 40px;
               height: 40px;
               line-height: 40px;
               border:1px solid #ccc;
               color: #333;
               border-radius: 50%;
               text-align: center;
             }
             &.top3{
               span{
                 border: 1px solid rgba(255,163,51,1);
                 color:rgba(255,163,51,1);
               }
             } 
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


  .cardWarp {
    padding: 22px 30px;
  }

</style>
