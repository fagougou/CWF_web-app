<template>
    <section class="nav">
        <p class="nav-title">所有产品</p>
        <div class="nav-icon" @click="toggleNav">
            <span class="nav-line"></span>
            <span class="nav-line"></span>
            <span class="nav-line"></span>
            <div class="nav-area" v-show="showNav">
                <a v-for="(item, i) in links" :key="i" :href="item.url" class="link-line">{{item.name}}</a>
            </div>
        </div>
        <p class="nav-link">
            <a v-for="(item, i) in links" :key="i" :href="item.url" class="link-item">{{item.name}}</a>
        </p>
    </section>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            links: [
                {
                    name: '主页',
                    url: '#'
                },
                {
                    name: '我的收藏',
                    url: '#'
                },
                {
                    name: '登出',
                    url: '#'
                }
            ], // 导航链接信息
            showNav: false // 是否显示弹出导航链接
        }
    },
    methods: {
        toggleNav() {
            this.showNav = !this.showNav
        }
    }
}
</script>

<style scoped>
    .nav{
        display: flex;
        flex-flow: row wrap;
    }
    .nav-title{
        flex-basis: 100%;
        margin: 0;
        font-size: 20px;
        font-weight: bold;
        line-height: 40px;
    }
    .nav-icon{
        display: none;
        position: relative;
        width: 40px;
        height: 40px;
        line-height: 13.3px;
    }
    .nav-line{
        display: inline-block;
        width: 100%;
        height: 3px;
        background-color: #000;
    }
    .nav-area{
        position: absolute;
        top: 50px;
        right: 0;
        width: 80px;
        line-height: 16px;
        background-color: #fff;
        border: 1px solid #333;
    }
    .link-line{
        display: block;
        padding: 5px;
        text-align: center;
        border-bottom: 1px solid #ccc;
    }
    .link-line:last-of-type{
        border-bottom: none;
    }
    .nav-link{
        flex-basis: 100%;
        margin: 6px 0;
    }
    .link-item{
        padding: 0 5px;
        border-right: 1px solid#333;
    }
    .link-item:last-of-type{
        border-right: none;
    }
    @media screen and (max-width: 480px) {
        .nav{
            flex-flow: row wrap;
        }
        .nav-title{
            flex: 1;
        }
        .nav-icon{
            display: inline-block;
        }
        .nav-link{
            display: none;
        }
    }
</style>