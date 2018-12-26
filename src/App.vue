<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
body {
  padding: 15px 20px 0;
  font-size: 14px;
}
a{
  text-decoration: none;
  color:inherit;
}
</style>
