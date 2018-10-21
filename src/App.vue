<template>
  <div id="app">
    <div class="header">
      <h1 class="title">所有产品</h1>
      <div class="collapsed"
           type="button"
           @click="toggleNav">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <div class="nav-small"
             :class="{ show:showNav }">
          <ul>
            <router-link to="/home"
                         tag="li">主页</router-link>
            <router-link to="/collection"
                         tag="li">我的收藏</router-link>
            <router-link to="/sign"
                         tag="li">登出</router-link>
          </ul>
        </div>
      </div>
    </div>
    <div class="nav-large clearfix">
      <ul>
        <router-link to="/home"
                     tag="li">主页</router-link>
        <router-link to="/collection"
                     tag="li">我的收藏</router-link>
        <router-link to="/sign"
                     tag="li">登出</router-link>
      </ul>
    </div>

    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
      return {
          showNav:false
      }
  },
  methods: {
      toggleNav(){
          this.showNav=!this.showNav
      }
  }
};
</script>
<style lang="less" scope>
#app {
	width: 90%;
	max-width: 1000px;
	margin: 0 auto 50px;
	.header {
		position: relative;
		.title {
			display: inline-block;
			font-size: 24px;
			line-height: 100px;
			font-weight: bold;
		}
	}

	.nav-large {
		width: 200px;
		margin-bottom: 40px;
		li {
			float: left;
			padding: 0 8px;
			cursor: pointer;
		}
		li + li {
			border-left: 1px solid #000;
		}
		.active {
			background-color: #f8f8f8;
		}
	}

	.nav-small {
		width: 80px;
		position: absolute;
		background-color: white;
		left: -50px;
		top: 30px;
		&:before {
			content: '';
			width: 0;
			height: 0;
			border-width: 15px;
			border-style: dashed;
			border-color: transparent transparent #000 transparent;
			position: absolute;
			top: -15px;
			left: 50px;
		}

		&:after {
			content: '';
			width: 0;
			height: 0;
			border-width: 14px;
			border-style: dashed;
			border-color: transparent transparent #fff transparent;
			position: absolute;
			top: -13px;
			left: 51px;
		}
		ul {
			border: 1px solid #000;
			position: relative;
			top: 15px;
			background-color: #fff;
			li {
				text-align: center;
				line-height: 2em;
			}
			li + li {
				border-top: 1px solid #000;
			}
		}
	}
}

@media screen and (min-width: 737px) {
	.header {
		height: 100px;
	}

	.nav-large {
		display: block;
	}

	.nav-small {
		display: none;
	}

	.collapsed {
		display: none;
	}
}

@media screen and (max-width: 736px) {
	.nav-large {
		display: none;
	}
	.collapsed {
		width: 30px;
		height: 24px;
		float: right;
		background-color: transparent;
		background-image: none;
		border: 1px solid transparent;
		cursor: pointer;
		outline: none;
		position: absolute;
		top: 50%;
		right: 0;
		transform: translate(0, -50%);
	}

	.collapsed:active {
		border: 1px solid transparent;
	}

	.collapsed .icon-bar {
		display: block;
		width: 30px;
		height: 4px;
		border-radius: 1px;
		background-color: #563d7c;
	}

	.collapsed .icon-bar + .icon-bar {
		margin-top: 6px;
	}

	.nav-small {
		display: none;
		&.show {
			display: block;
		}
	}
}
</style>
