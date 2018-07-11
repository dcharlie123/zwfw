<template>
  <div class="container ">
    <div class="wrapperW">
      <nav class="index-nav">
        <ul>
          <li v-for="(item,index) in [0,1,2]" :class="{'is-active':index==activeNav}">{{item}}</li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'zwfw',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        activeNav:0
      }
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
    padding-top: 20px;
    .index-nav{
      height: 50px;
      background: #fff;
      line-height: 45px;
      ul{
         border-bottom:1px solid #ccc;
        li{
          width: 107px;
          text-align: center; 
          cursor: pointer;
          margin: 0;
          box-sizing: content-box;
          &.is-active{
            border-top: 4px solid #C91B1B;
            border-right: 1px solid #ccc;
            position: relative;
            &::after{
              position: absolute;
              bottom: -1px;
              content:'';
              display: block;
              width: 100%;
              height: 1px;
              background: #fff;
            }
          }
        }
      }
    }
  }
</style>
