<template>
    <div class="content-page">
      <ul class="c-tab">
        <li
          :class="['c-tab-item', i === active? 'c-tab-active': '']"
          v-for="(tab, i) in tabs"
          @click="active = i"
          :key="i">{{tab}}</li>
      </ul>
      <div class="c-content">
        <div class="product"
             v-for="(item, i) in info"
             :key="i">
          <img :src="item.picture" alt="image" class="pic">
          <div class="info">
            <p class="title">
              <span class="name">{{item.name}}</span>
              <span class="price">¥{{item.price}}</span>
            </p>
            <p class="desc">{{item.description}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      tabs: ['爆款', '最新', '主编推荐'],
      active: 1, // 当前活动tab编号
      info: [] // 商品信息
    }
  },
  created () {
    this.renderList()
  },
  methods: {
    renderList () {
      this.getDataApi()
        .then((data) => {
          // console.log(data)
          this.info = data
        })
        .catch(err => {
          alert(err)
        })
    },
    getDataApi () {
      return new Promise((resolve, reject) => {
        this.$http.get('./static/products.json')
          .then((data = {}) => {
            resolve(data.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
}
</script>
<style scoped>
  .content-page{}
  .c-tab{
    height: 40px;
    margin: 6px 0 0 0;
    background-color: #eee;
  }
  .c-tab-item{
    display: inline-block;
    height: 100%;
    line-height: 40px;
    padding: 0 15px;
  }
  .c-tab-active{
    background-color: #d8d8d8;
  }
  .c-content{
    box-sizing: border-box;
    display: flex;
    flex-flow: row wrap;
    padding: 20px 10px;
    background-color: #d8d8d8;
  }
  .product{
    box-sizing: border-box;
    flex-basis: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin-bottom: 32px;
  }
  .pic{
    box-sizing: border-box;
    border: 1px solid #999;
    width: 128px;
    margin-right: 12px;
  }
  .info{
    flex: 1;
  }
  .title{
    margin: 0;
  }
  .desc{
    margin: 16px 0 0 0;
  }
  @media screen and (max-width: 480px) {
    .product{
      flex-basis: 50%;
      flex-flow: row wrap;
      justify-content: center;
      padding: 0 13px;
    }
    .pic{
      flex-basis: 100%;
      margin-right: 0;
      margin-bottom: 12px;
    }
    .title:after{
      display: block;
      clear: both;
      overflow: hidden;
      content: '';
      height: 0;
      visibility: hidden;
    }
    .title .name{
      float: left;
      font-size: 12px;
    }
    .title .price{
      float: right;
    }
    .info{
      flex-basis: 100%;
    }
    .desc{
      display: none;
    }
  }
</style>
