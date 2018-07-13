<template>
  <div class="report">
    <div class="wrapper clearfix">


      <div class="container content">
        <!--<div class="tologin">-->
        <!--想订阅？点此<a href="">登录</a>-->
        <!--</div>-->

        <div class="list ">
          <div class="item" v-for="item in reportData">
            <img class="itemImg" :src="item.img" alt="">
            <div class="itemMain">
              <p class="title">{{item.title}}</p>
              <p class="date">{{item.date}}</p>
              <p class="text">{{item.text}}</p>
              <a class="btn" :download="item.title" :href="item.url" target="_blank">详情</a>
              <!--<router-link class="btn" :to="'/report/detail/'+item.id">详情</router-link>-->
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        reportData: [{
          id: 1,
          img: require("../../assets/report1.png"),
          title: "移动金融报告",
          text: "有学者认为，2018年是公众个人信息保护意识觉醒的元年。从支付宝年度账单事件，到江苏消保委诉百度侵犯用户隐私；从李书福称微信的聊天内容可能被腾讯窥视，到今日头条的算法受到用户的质疑。一系列舆论热点的集中爆发，无疑预示着公众在互联网时代的隐私……",
          date: "2018.03.30",
          url: '../../assets/关于收集个人信息“明示同意”的测评报告 完整版.pdf',
        }, {
          id: 2,
          img: require("../../assets/report2.png"),
          title: "2017个人信息保护年度报告",
          text: "2017年，可称是中国互联网安全领域里程碑的一年。十九大报告、政治局集体学习、中央经济工作会议中，互联网安全与个人信息保护被多次提及，再次明确，二者已经成为国家战略中的重要组成部分。",
          date: "2017.12",
          url: '/piprc/static/pdf/南都个人信息保护研究中心——2017个人信息保护年度报告.pdf',
        }, {
          id: 3,
          img: require("../../assets/report2.png"),
          title: "关于收集个人信息“明示同意”的测评报告",
          text: "自《网络安全法》正式实施，四部委发起“隐私条款联合测评”以来，大批互联网营运者开始对产品的隐私政策及呈现方式进行修改。随着收集行为不断规范，其中的细节实施也成为互联网企业进一步合规的重要内容。",
          date: "2018.12.21",
          url: '/piprc/static/pdf/关于收集个人信息“明示同意”的测评报告 完整版.pdf',
        }],
      }
    },
    components: {},
    mounted() {

    },
    methods: {

    }
  }

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
    background: #fff;
    margin-top: 20px;
  }

  .list {
    overflow: hidden;
    padding: 52px 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item {
      float: left;
      display: flex;
      margin-bottom: 42px;
      .itemImg {
        flex: 0 0 160px;
        width: 160px;
        height: 228.1px;
      }
      .itemMain {
        width: 340px;
        margin-left: 34px;
        .title {
          font-size: 22px;
          color: #222222;
          line-height: 30px;
          margin: 6px 0 0 0;
        }
        .date {
          font-size: 14px;
          color: #7A7E81;
          line-height: 20px;
          margin-top: 9px;
          margin-bottom: 0;
        }
        .text {
          height: 116px;
          overflow: hidden;
          margin-top: 5px;
          margin-bottom: 10px;
          font-size: 14px;
          color: #222222;
          line-height: 28px;
        }
        .btn {
          border: 1px solid #0F2A81;
          border-radius: 100px;
          background: transparent;
          cursor: pointer;
          font-size: 14px;
          padding: 4px 14px;
          line-height: 20px;
          color: #0F2A81;
          height: 28px;
          @include lvhfa
        }
      }
    }
  }

</style>
