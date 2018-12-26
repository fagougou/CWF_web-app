<template>
  <ul class="c-course">
    <li v-for="(item ,index) in arrList" :key="index">
        <img :src="item.picture">
        <h1>{{item.name}}</h1>
        <p>{{item.description}}</p>
      </li>
  </ul>
</template>
<script>
export default{
  props: {
    arrList: Array
  }
}
</script>
<style scoped>
  .c-course{
    padding: 4px 0;
    background: #fff;
  }
  .c-course li{
    position: relative;
    width: 335px;
    height: 120px;
    margin: 0 auto 24px;
  }
  .c-course li img{
    position: absolute;
    width: 90px;
    border-radius: 5px;
    top: 17px;
  }
  .c-course li h1{
    padding-top: 10px;
    font-size: 15px;
    padding-left: 124px;
  }
  .c-course li p{
    padding-top: 10px;
    font-size: 12px;
    padding-left: 124px;
    color: #777;
    height: 65px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
</style>
