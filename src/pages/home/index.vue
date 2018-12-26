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
    return {}
  },
  created () {},
  mounted () {},
  methods: {},
  components: {
    'v-header': Header,
    'v-content': Content
  }
}
</script>
<style scoped>
  .home-page{}
</style>
