<template>
  <div class="home-page">
    <v-header></v-header>
    <v-content></v-content>
  </div>
</template>
<script>
import Header from '@/components/header'
import Content from '@/components/content'
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
    'v-content': Content
  }
}
</script>
<style scoped>
  .home-page{
  }
</style>
