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
              <!-- <router-link class="btn" :to="'/report/detail/'+item.id">详情</router-link> -->
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
          img: require("../../assets/images/zwxmtb.jpg"),
          title: "政务新媒体榜",
          text: "国办印发《2018年政务公开工作要点》提出“互联网+政务服务”等方面事项的一系列新要求，用好“两微一端“新平台，做好信息发布、政策解读和办事服务工作，进一步增强公开实效，提升服务水平。南都大数据研……",
          date: "2018.07.01",
          url: 'http://res.mp.oeeee.com/u/pdf/5b4ea42cd8dfd.pdf',
        }, {
          id: 2,
          img: require("../../assets/images/gxxmtb.jpg"),
          title: "2017年度广东高校新媒体榜",
          text: "从2017年1月起，南都就在持续观察广东80所高校微信、微博的运营状况，今年4月发布《广东高校新媒体榜》第一季度成绩单，之后，南都通过报纸版面和移动端，连续每个季度都对榜单进行更新发布，至今……",
          date: "2017.07.01",
          url: 'http://res.mp.oeeee.com/u/pdf/5a9533fe7900b.pdf',
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
