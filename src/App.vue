<template>
  <div id="app">
    <header class="header">
      <div class="container logoW">
        <img class="logo1" src="./assets/images/logo1.png" alt="">
        <img class="logo2" src="./assets/images/logo2.png" alt="">
      </div>
    </header>
    <nav class="app-nav_w">
      <div class="container">
        <ul class="app-nav" @click="selectNav">
          <router-link tag="li" data-index="zwxmt" to="/zwxmt">政务新媒体</router-link>
          <!--<router-link tag="li" class="is-disabled" data-index="gxxmt" to="/gxxmt">高校新媒体</router-link>-->
          <router-link tag="li" data-index="report" to="/report">智库报告</router-link>
          <!--<router-link tag="li" data-index="meeting" to="/meeting">小编课堂</router-link>-->
          <!--<router-link tag="li" data-index="hdjy" to="/hdjy" class="is-disabled">互动建议</router-link>-->
        </ul>
      </div>
    </nav>
    <router-view/>
    <footer class="footer">
      Copyright ©2018-20XX 粤ICP备1707xxxx号
    </footer>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        // navIndex:"zwxmt",
        // activeIndex: "zwxmt"
      };
    },
    mounted() {
      // this.navIndex=this.$route.path.split('/')[1]
      // console.log(router.currentRoute);
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

  .logoW {
    display: flex;
    justify-content: space-between;
  }

  .logo1 {
    margin-top: 20px;
    width: 343px;
    height: 73px;
  }

  .logo2 {
    margin-top: 50px;
    width: 97px;
    height: 22px;
  }

  .header {
    height: 100px;
    background: #fff;
  }

  .container {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    box-sizing: border-box;
  }
  .wrapperW {
  margin-top:30px;
    box-sizing:border-box;
  }
  .footer{
    height: 100px;
    width: 100%;
    line-height: 100px;
    text-align: center;
    color:#333;
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
        &.is-active,
        &.router-link-active {
          background: #C91B1B;
        }
        &.is-disabled {
          cursor: not-allowed;
        }
      }
    }
  }

  a {
    text-decoration: none;
  }

</style>
