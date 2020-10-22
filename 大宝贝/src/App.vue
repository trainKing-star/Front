<template>
  <div id="app">
    <hde></hde>
    <con></con>
  </div>
</template>

<script>
  import Header from "./components/Header";
  import Content from "./components/Content";
  export default {
    name:'App',
    components:{
      hde:Header,
      con:Content
    }
  }
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

#app{
  width:365px;
  height:635px;
  margin: 40px auto 0;
  border: 1px solid #000000;
  border-radius: 3%;
  box-shadow:0 0 10px #000000;
}
</style>
