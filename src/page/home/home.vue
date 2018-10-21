<template>
  <div class="cabinet-wrapper">
    <div class="tab-title-wrapper">
      <div v-for="tab in tabs"
           v-bind:key="tab"
           v-bind:class="['tab-button', { active: currentTab === tab }]"
           v-on:click="currentTab = tab">{{ tab }}</div>
    </div>

    <Cabinet :products="products"
             class="tab"></Cabinet>
  </div>
</template>

<script>
import Cabinet from '@/components/cabinet'
import {getProducts} from '@/api/products'

const ERR_OK=200

export default {
  name: "home",
  data(){
    return {
      currentTab: '最新',
      tabs: ['爆款', '最新', '主编推荐'],
      products:[]
    }
  },
  created () {
    this._getProducts()
  },
  methods: {
    _getProducts(){
      getProducts().then(res=>{
        if (res.status === ERR_OK) {
					this.products = res.data.slice(0,6)
				} else {
					console.error('Products 获取失败')
				}
      })
    }
  },
  computed: {
    currentTabData() {
      return this.products
    }
  },
  components:{
    Cabinet,
  }
};
</script>

<style scoped>
.tab-title-wrapper {
	background-color: #f8f8f8;
	width: 100%;
	height: 40px;
}
.tab-button {
	display: inline-block;
	cursor: pointer;
	background: #f8f8f8;
	line-height: 40px;
	text-align: center;
	padding: 0 1em;
	font-size: 14px;
}
.tab-button.active {
	background: #d8d8d8;
}
.tab {
	background-color: #d8d8d8;
}
@media screen and (min-width: 737px) {
	.tab-button {
		padding: 0 30px;
	}
}
</style>