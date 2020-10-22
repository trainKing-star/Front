<template>
<div class="Recommend">
  <ul>
    <li v-for="item in items" v-bind:key="item">{{item}}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: "Recommend",
  data(){
    return{
      items:['推荐城市:','北京','上海','广州','深圳']
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}

ul li{
  list-style: none;
  float:left;
  margin-right: 10px;
  color: #00c1cc;
  font-family: Cursive;
}

ul li:first-child{
  color:#778ab9;
}
</style>