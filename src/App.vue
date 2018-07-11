<template>
  <div id="app">
    <header class="header">
      <div class="container"></div>
    </header>
    <nav style="background-color:#2D3038">
      <div class="container">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#2D3038"
        text-color="#fff" active-text-color="#fff">
          <el-menu-item index="zwfw">政务新媒体</el-menu-item>
          <el-menu-item index="2" disabled>高校新媒体</el-menu-item>
          <el-menu-item index="report">智库报告</el-menu-item>
          <el-menu-item index="meeting">小编课堂</el-menu-item>
          <el-menu-item index="5" disabled>互动建议</el-menu-item>
        </el-menu>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeIndex: "allRank"
    };
  },
  created() {
    this.activeIndex = this.$route.name;
  },
  methods: {
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

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #eee;
  height: 100vh;
}
.header{
  height:100px;
  background:#fff;
}
.el-submenu__title a {
  color: #fff;
}
.el-menu li{
  border: none;
}

.el-menu--horizontal,.el-menu--horizontal>.el-menu-item{
  border: none;
}
.el-menu--horizontal > .el-menu-item.is-active{
  border:none;
  background-color: #C91B1B !important;
}
.container {
  width: 1200px;
  margin: 0 auto;
}

a {
  text-decoration: none;
}
</style>
