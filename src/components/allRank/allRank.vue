<template>
  <div class="container">
    <div class="selectBtn">
      <el-radio-group v-model="radio1" @change="radioChange">
        <el-radio-button label="广东省级部门"></el-radio-button>
        <el-radio-button label="广东省21个地市"></el-radio-button>
        <el-radio-button label="广州市直部门"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="cardWarp">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <el-select v-model="value" placeholder="请选择" size="small">
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
            <tbody >
              <tr v-if="!tableData.length">
                <td colspan="4">暂无数据</td>
              </tr>
              <tr v-else v-for="item in tableData" >
                <td>{{item.nature}}</td>
                <td>{{item.name}}</td>
                <td class="rankRadius" :class="{'top3':item.rank<=3}">
                  <span>{{item.rank}}</span>
                </td>
                <td v-if="item.compare&&item.compare!=0" class="compare">
                  <img src="../../assets/images/up.png" alt="" v-if="item.status==1">
                  <img src="../../assets/images/down.png" alt="" v-else-if="item.status==0">
                  <span>{{item.compare}}</span>
                </td>
                <td v-else>
                  <span>-</span>
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
      type: 0,
      activeName2: "first",
      tableData: [],
      options: [],
      value: "",
      season: null,
      year: null
    };
  },
  created() {
    var season, year;
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
    // this.$http.post("http://120.79.224.76:82/mediarank/htdoc/api.php?s=/NdzwInterfaces/getWechat",{""})
  },
  watch: {
    value: {
      handler: function(val, oldVal) {
        var yearNseason = this.value.split("-");
        this.year = yearNseason[0];
        this.season = yearNseason[1];
        this.getWechatData(this.season, this.year, this.type).then(res => {
          if (res.data !== "null") {
            this.tableData = res.data;
          } else {
            this.tableData = [];
          }
        });
      },
      immediate: true
    }
  },
  methods: {
    getWechatData(season, year, type) {
      return this.$http.post(
        "http://120.79.224.76:82/mediarank/htdoc/api.php?s=/NdzwInterfaces/getWechat",
        { season: season, year: year, type: type }
      );
    },
    radioChange(val) {
      if (val == "广东省级部门") {
        this.type = 0;
      } else if (val == "广东省21个地市") {
        this.type = 1;
      } else if (val == "广州市直部门") {
        this.type = 2;
      }
      this.value = this.options[0].value;
      var yearNseason = this.options[0].value.split("-");
      this.year = yearNseason[0];
      this.season = yearNseason[1];
      this.getWechatData(this.season, this.year, this.type).then(res => {
        if (res.data !== "null") {
          this.tableData = res.data;
        } else {
          this.tableData = [];
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/style.scss";
.container {
}

.selectBtn {
  text-align: center;
  padding-top: 30px;
}

.el-card__body {
  .table-wrapper {
    @include Mytable;
    .rankRadius {
      span {
        display: inline-block;
        width: 40px;
        height: 40px;
        line-height: 40px;
        border: 1px solid #ccc;
        color: #333;
        border-radius: 50%;
        text-align: center;
      }
      &.top3 {
        span {
          border: 1px solid rgba(255, 163, 51, 1);
          color: rgba(255, 163, 51, 1);
        }
      }
    }
    .compare {
      img {
        width: 13px;
        height: 14px;
        margin-right: 4px;
      }
      span {
        font-size: 16px;
        color: #333;
      }
    }
  }
}

.cardWarp {
  padding: 22px 30px;
}
</style>
