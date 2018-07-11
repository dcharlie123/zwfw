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
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName2: 'first',
        tableData1: [{
          'date': "1",
          "name": "aa",
          "address": "bb"
        }],
        tableData2: [],
        form: {
          region: '区域一'
        }
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
  .container {
    padding: 50px;
    .allRank-header {
      display: flex;
      justify-content: space-between;
    }

    .el-container {}

  }

</style>
