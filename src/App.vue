<template>
    <section id="app">
        <NavBar/>
        <Index/>
    </section>
</template>

<script>
import NavBar from './components/NavBar'
import Index from './pages/Index'

export default {
    name: 'App',
    components: {
        NavBar,
        Index
    }
}
</script>

<style>
    body{
        margin: 0;
        padding: 0;
        font-size: 14px;
        background-color: #fff;
    }
    a{
        color: inherit;
        text-decoration: none;
    }
    ul, li{
        list-style-type: none;
        padding: 0;
    }
    #app{
        box-sizing: border-box;
        padding: 0 20px;
    }
</style>