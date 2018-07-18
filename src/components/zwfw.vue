<template>
  <div class="container ">
    <div class="wrapperW">
      <nav class="index-nav">
        <ul style="margin-top:0">
          <li v-for="(item,index) in ['总榜','微信榜','微博榜','今日头条榜']" :class="{'is-active':index==activeNav}" @click="tabToggle(index)">{{item}}</li>
        </ul>
      </nav>
      <div class="content">
        <!--<component :is='currentView' keep-alive></component>-->
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import allRank from '../components/allRank/allRank.vue'
  import wechatRank from '../components/wechatRank/wechatRank.vue'
  import weiboRank from '../components/weiboRank/weiboRank.vue'
  export default {
    name: 'zwfw',
    data() {
      return {
        currentView: allRank,
        activeNav: 0
      }
    },
    created() {
      var View = this.$route.name;
      if (View == "detail") {
        View = this.$route.params.Otype;
      }
      switch (View) {
        case "allRank":
          this.activeNav = 0
          break;
        case "wechatRank":
          this.activeNav = 1;
          break;
        case "weiboRank":
          this.activeNav = 2
          break;
        case "headlineRank":
          this.activeNav = 3;
          break;
      }
    },
    watch: {
      $route(to, from) {
        console.log(to.path)
        var View = to.name;
      if (View == "detail") {
        View = to.params.Otype;
      }
      switch (View) {
        case "allRank":
          this.activeNav = 0
          break;
        case "wechatRank":
          this.activeNav = 1;
          break;
        case "weiboRank":
          this.activeNav = 2
          break;
        case "headlineRank":
          this.activeNav = 3;
          break;
      }
      },
    },
    methods: {
      tabToggle(index) {
        this.activeNav = index;
        switch (index) {
          case 0:
            this.currentView = allRank;
            this.$router.push({
              path: "/zwxmt/allRank"
            })
            break;
          case 1:
            this.currentView = wechatRank
            this.$router.push({
              path: "/zwxmt/wechatRank"
            })
            break;
          case 2:
            this.currentView = weiboRank
            this.$router.push({
              path: "/zwxmt/weiboRank"
            })
            break;
          case 3:
            this.$router.push({
              path: "/zwxmt/headlineRank"
            })
            break;
        }
      }
    },
    components: {
      allRank,
      wechatRank,
      weiboRank
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .wrapperW {

    .index-nav {
      height: 50px;
      background: #fff;
      line-height: 45px;
      ul {
        width: 100%;
        display: inline-block;
        border-bottom: 1px solid #ccc;
        li {
          padding: 0 28px;
          text-align: center;
          cursor: pointer;
          margin: 0;
          box-sizing: content-box;
          color: #666;
          &.is-active {
            border-top: 4px solid #C91B1B;
            border-right: 1px solid #ccc;
            border-left: 1px solid #ccc;
            position: relative;
            font-size: 18px;
            font-weight: 600;
            color: #333;

            &:first-child {
              border-left: 0;
            }
            &::after {
              position: absolute;
              z-index: 1;
              bottom: -2px;
              content: '';
              display: block;
              width: 100%;
              left: 0;
              height: 4px;
              background: #fff;

            }
          }
        }
      }
    }
    .content {
      min-height: 500px;
      background: #fff;
    }
  }

</style>
