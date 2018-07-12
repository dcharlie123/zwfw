<template>
  <div class="meeting">
    <div class="wrapper clearfix">
      <div class="container content">
        <div class="pannel_title">
          <div class="pannel_titleText">会议集锦</div>
        </div>

        <div class="list clearfix">
          <div class="item" v-for="item in listData">
            <a :href="item.url">
              <img class="itemImg" :src="item.titleimg" alt="">
            </a>
            <span class="itemTitle">
              <a target="_blank" :href="item.url">{{item.title}}</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        listData: [{
          titleimg: "",
          title: "独家视频：据说这个班走出来的都是中国个人信息保护界的尖子生"
        },{
          titleimg: "",
          title: "独家视频：据说这个班走出来的都是中国个人信息保护界的尖子生"
        },{
          titleimg: "",
          title: "独家视频：据说这个班走出来的都是中国个人信息保护界的尖子生"
        }]
      }
    }
  }

</script>

<style lang="scss" scoped>
  @mixin lvhfa {
    &:link,
    &:visited,
    &:hover,
    &:focus,
    &:active {
      outline: none;
    }
  }

  .pannel_title {
    margin-bottom: 40px;
  }

  .content {
    overflow: hidden;
    padding: 36px 40px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    .item {
      display: flex;
      margin-bottom: 40px;
      &:nth-child(odd) {
        margin-right: 78px;
      }
      .itemImg {
        display: inline-block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 180px;
        flex: 0 0 180px;
        width: 180px;
        height: 100px;
        border: 1px #eee solid;
      }
      .itemTitle {
        align-self: center;
        margin-left: 25px;
        width: 316px;
        height: 80px;

        font-size: 20px;
        color: #333333;
        line-height: 40px;
        a {
          color: #333;
        }
      }
    }
  }

</style>
