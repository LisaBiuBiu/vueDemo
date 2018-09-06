<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  body,p{
    margin:0;
    font-size:62.5%;
  }
  ul{
    list-style:none;
    margin:0;
    padding:0;
  }
  img{
    width:100%;
  }
  .mint-header{
  background:#26a2ff;
  color:#fff;
  font-size:1rem;
}
</style>
