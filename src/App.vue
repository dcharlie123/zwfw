<template>
  <div id="app">
    <header class="header">
      <div class="container"></div>
    </header>
    <nav class="app-nav_w">
      <div class="container">
        <ul class="app-nav" @click="selectNav">
          <router-link tag="li" :class="navIndex=='zwxmt' ? 'is-active' : '' " data-index="zwxmt" to="/zwxmt">政务新媒体</router-link>
          <router-link tag="li"  class="is-disabled" :class="navIndex=='gxxmt' ? 'is-active' : '' " data-index="gxxmt" to="/zwxmt">高校新媒体</router-link>
          <router-link tag="li" :class="navIndex=='report' ? 'is-active' : '' " data-index="report" to="/report">智库报告</router-link>
          <router-link tag="li" :class="navIndex=='meeting' ? 'is-active' : '' " data-index="meeting" to="/meeting">小编课堂</router-link>
          <router-link tag="li" :class="navIndex=='hdjy' ? 'is-active' : '' " data-index="hdjy" to="/zwxmt">互动建议</router-link>
        </ul>
      </div>
    </nav>
    <!--<footer>
      Copyright ©2018-20XX 粤ICP备1707xxxx号
    </footer>-->
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        navIndex:"zwxmt",
        // activeIndex: "zwxmt"
      };
    },
    created() {
      this.navIndex=this.$route.path.split('/')[1]
      // console.log(this.activeIndex);
    },
    methods: {
      selectNav(event) {
        this.navIndex = event.target.dataset.index
      },
      handleSelect(key, keyPath) {
        console.log(key);
        switch (key) {
          case "zwfw":
            this.$router.push({
              path: "/zwfw"
            });
            break;
          case "wechatRank":
            this.$router.push({
              path: "/wechatRank"
            });
            break;
          case "weiboRank":
            this.$router.push({
              path: "/weiboRank"
            });
            break;
          case "meeting":
            this.$router.push({
              path: "/meeting"
            });
            break;
          case "report":
            this.$router.push({
              path: "/report"
            });
            break;
        }
      }
    }
  };

</script>

<style lang="scss">
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #eee;
    height: 100vh;
  }

  .header {
    height: 100px;
    background: #fff;
  }

  .container {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }

  .app-nav_w {
    background-color: #2D3038;
    height: 50px;
    line-height: 50px;
    .app-nav {
      list-style: none;
      margin: 0;
      padding: 0;
      font-size: 0;
      li {
        display: inline-block;
        color: #fff;
        padding: 0 36px;
        font-size: 16px;
        cursor: pointer;
        &.is-active {
          background: #C91B1B;
        }
        &.is-disabled{
          cursor: not-allowed;
        }
      }
    }
  }

  a {
    text-decoration: none;
  }

</style>
