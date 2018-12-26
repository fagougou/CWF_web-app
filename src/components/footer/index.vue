<template>
  <div class="c-footer">
    <ul class="footer-ul">
      <li v-for="(item,index) in arrList" :key="index">
        <img :src="item.imgUrl">
        <span>{{item.text}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import Home from '@/assets/首页-选中@2x.png'
import Sea from '@/assets/发现@2x.png'
import Me from '@/assets/我的@2x.png'
export default {
  data () {
    return {
      arrList: []
    }
  },
  mounted () {
    this.arrList = [
      {
        imgUrl: Home,
        text: '首页'
      },
      {
        imgUrl: Sea,
        text: '发现'
      },
      {
        imgUrl: Me,
        text: '我的'
      }
    ]
  }
}
</script>
<style scoped>
  .c-footer{
    position: fixed;
    bottom: 0;
    z-index: 3;
    width: 100%;
    background: #fff;
    border-top: 1px solid #f3f5f7
  }
  .c-footer .footer-ul{
    display: flex;
  }
  .c-footer .footer-ul li{
    display: flex;
    height: 50px;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .c-footer .footer-ul li img{
    width: 24px;
  }
  .c-footer .footer-ul li span{
    font-size: 10px;
  }
</style>
