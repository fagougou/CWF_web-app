<template>
    <section class="index">
        <ul class="tab">
            <li :class="['tab-item', i === active? 'tab-active': '']" v-for="(tab, i) in tabs" :key="i">{{tab}}</li>
        </ul>
        <section class="content">
            <section class="product" v-for="(item, i) in info" :key="i">
                <img :src="item.picture" alt="image" class="pic">
                <section class="info">
                    <p class="title">
                        <span class="name">{{item.name}}</span>
                        <span class="price">¥{{item.price}}</span>
                    </p>
                    <p class="desc">{{item.description}}</p>
                </section>
            </section>
        </section>
    </section>
</template>

<script>
/**
 * 主页
 */
export default {
    name: 'Index',
    data() {
        return {
            tabs: ['爆款', '最新', '主编推荐'],
            active: 1, // 当前活动tab编号
            info: [] // 商品信息
        }
    },
    created() {
        this.$req('/products.json').then(res => {
            this.info = res.data
        }).catch(err => {
            throw err
        })
    }
}
</script>

<style scoped>
    .tab{
        height: 40px;
        margin: 6px 0 0 0;
        background-color: #eee;
    }
    .tab-item{
        display: inline-block;
        height: 100%;
        line-height: 40px;
        padding: 0 15px;
    }
    .tab-active{
        background-color: #ccc;
    }
    .content{
        box-sizing: border-box;
        display: flex;
        flex-flow: row wrap;
        padding: 20px 10px;
        background-color: #ccc;
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
        border: 1px solid #333;
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
            padding: 0 6px;
        }
        .pic{
            flex-basis: 100%;
            margin-right: 0;
            margin-bottom: 12px;
        }
        .title{
            text-align: center;
        }
        .info{
            flex-basis: 100%;
        }
        .desc{
            display: none;
        }
    }
</style>