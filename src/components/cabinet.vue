<template>
  <div class="cabinet">
    <ul>
      <li v-for="product in products"
          :key="product._id"
          class="product-item">
        <div class="product-picture"><img :src="product.picture"
               alt=""></div>
        <div class="product-info">
          <h2 class="product-name">
            <span class="name">{{product.name}}</span>
            <span class="price">￥{{product.price}}</span>
          </h2>
          <p class="product-desc">{{product.description}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    products:{
      type:Array,
      default:[]
    }
  },
  data() {
    return {}
  },
  methods: {},
  computed: {},
  components: {}
}
</script>

<style scoped lang="less">
@media screen and (min-width: 737px) {
	.cabinet ul {
		padding: 60px;

		.product-item {
			display: flex;
			flex-direction: row;
			margin-bottom: 30px;
			.product-picture {
				flex: 330px 0 0;
				height: 200px;
				img {
					height: 100%;
					width: 100%;
				}
			}
			.product-info {
				display: flex;
				flex-direction: column;
				margin: 0 50px;
				font-size: 18px;
				.product-desc {
					margin-top: 30px;
				}
			}
		}
	}
}
@media screen and (max-width: 736px) {
	.cabinet ul {
		font-size: 16px;

		.product-item {
			display: flex;
			flex-flow: row wrap;
			width: 50%;
			display: inline-block;
			padding: 1em;
			.product-picture {
				// padding-bottom: 50%;
				img {
					height: 100%;
					width: 100%;
				}
			}
			.product-info {
				.product-name {
					.name {
						float: left;
					}
					.price {
						float: right;
					}
				}
				.product-desc {
					display: none;
				}
			}
		}
	}
}
</style>