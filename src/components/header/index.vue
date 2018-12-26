<template>
  <div class="header-page">
    <h3 class="h-title">所有产品</h3>
    <div class="h-toggle-link" @click="showNav = !showNav">
      <span class="icon-line"></span>
      <span class="icon-line"></span>
      <span class="icon-line"></span>
      <div class="h-nav" v-show="showNav">
        <router-link
          v-for="(item, index) in navList"
          :key="index"
          :to="item.url"
          class="h-nav-link">{{item.name}}</router-link>
      </div>
    </div>
    <div class="h-link">
      <router-link
        v-for="(item, index) in navList"
        :key="index"
        :to="item.url"
        class="h-nav-item">{{item.name}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      navList: [
        {
          name: '主页',
          url: '/'
        },
        {
          name: '我的收藏',
          url: '/'
        },
        {
          name: '登出',
          url: '/'
        }
      ], // 导航列表
      showNav: false // 显示下拉导航
    }
  }
}
</script>
<style scoped>
  .header-page{
    position: relative;
  }
  .h-title{
    margin: 0;
    font-size: 20px;
    font-weight: bold;
    line-height: 40px;
  }
  .h-toggle-link{
    display: none;
    position: absolute;
    right:0;
    top: 0;
    width: 30px;
    height: 40px;
    line-height: 12px;
  }
  .icon-line{
    display: inline-block;
    width: 100%;
    height: 4px;
    background-color: #000;
  }
  .h-nav{
    position: absolute;
    top: 50px;
    right: 0;
    width: 80px;
    line-height: 16px;
    background-color: #fff;
    border: 1px solid #aaa;
  }
  .h-nav:before{
    display: block;
    position: absolute;
    top: -9px;
    right: 2px;
    content: '';
    width: 15px;
    height: 15px;
    border-right: 1px solid #aaa;
    border-top: 1px solid #aaa;
    transform: rotate(-45deg);
  }
  .h-nav-link{
    display: block;
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #ccc;
  }
  .h-nav-link:last-child{
    border-bottom: none;
  }
  .h-link{
    flex-basis: 100%;
    margin: 6px 0;
  }
  .h-nav-item{
    padding: 0 5px;
    border-right: 1px solid #333;
  }
  .h-nav-item:last-child{
    border-right: none;
  }
  @media screen and (max-width: 480px) {
    .h-toggle-link{
      display: block;
    }
    .h-link{
      display: none;
    }
  }
</style>
