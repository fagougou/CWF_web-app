<template>
    <div class="home-page">
      <v-header class="top"></v-header>
      <v-course :arrList="array"></v-course>
      <v-footer></v-footer>
    </div>
</template>
<script>
import Header from '@/components/header/index.vue'
import Course from '@/components/course/index.vue'
import Footer from '@/components/footer/index.vue'

export default {
  data () {
    return {
      arrList: [],
      array: []
    }
  },
  created () {
    this.renderList()
  },
  mounted () {},
  methods: {
    getDataApi () {
      return new Promise((resolve, reject) => {
        this.$http.get('/static/products.json')
          .then((data = {}) => {
            resolve(data.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    renderList () {
      this.getDataApi()
        .then((data) => {
          // console.log(data)
          this.array = data
        })
        .catch(err => {
          alert(err)
        })
    }
  },
  components: {
    'v-header': Header,
    'v-course': Course,
    'v-footer': Footer
  }
}
</script>
<style scoped>
  .home-page{
    margin-top: 60px;
    margin-bottom: 50px;
  }
  .home-page .top{
    position: fixed;
    top: 0;
    left:0;
  }
  .home-page .nav{
    padding-top: 44px;
    height: 100px;
    background-color: #f3f5f7;
    overflow-x: scroll;
    white-space: nowrap;
    font-size: 0;
  }
  .home-page .nav li{
    width: 88px;
    display: inline-block;
    font-size: 14px;
    text-align: center;
  }
  .home-page .nav li img{
    display: block;
    width: 32px;
    margin: 20px auto 12px;
  }
</style>
