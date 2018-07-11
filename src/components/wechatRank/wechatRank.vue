<template>
  <div class="container">
    <header class="allRank-header">
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
        date: ''
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      onSubmit() {
        console.log('submit!');
      }
    }
  };

</script>

<style scoped lang="scss">
  .container {
    padding: 50px;
    .allRank-header {
      display: flex;
      justify-content: space-between;
    }

    .el-container {}
  }

</style>
