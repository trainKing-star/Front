<template>
  <div id="app">
    <Header></Header>
    <Search></Search>
  </div>
</template>

<script>
import Head from "./components/Head";
import Search from "./components/Search";
export default {
  name: 'App',
  components:{
    Header:Head,
    Search:Search
  }
}
</script>

<style>
#app{
  width:1340px;
  margin: 135px auto 0;
}
</style>
