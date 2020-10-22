<template>
<div class="search">
  <div class="label">
    <input type="text" id="search" placeholder="输入城市查询天气" v-model.lazy="city">
    <button @click="citymessage = city">搜索</button>
  </div>
  <Recommend></Recommend>
  <Weather :city="citymessage"></Weather>
</div>
</template>

<script>
import Recommend from "./Recommend";
import Weather from "./Weather";
export default {
  name: "Search",
  data(){
    return{
      city:'',
      citymessage:''
    }
  },
  components:{
    Recommend:Recommend,
    Weather:Weather
  }
}
</script>

<style scoped>
.search{
  margin:30px 0 0 325px;
}

.label{
  height:35px;
  width:800px;
  margin-bottom: 10px;
}

input{
  width:600px;
  height:35px;
  border: 2px solid #b4c1c6;
  text-indent: 10px;
  line-height: 35px;
  font-family: Cursive;
  font-size: 18px;
}

input:focus{
  border-color: #00c1cc;
}

button{
  width:100px;
  height:39px;
  background-color: #00c1cc;
  border: 2px solid #00c1cc;
  padding-bottom: 3px;
  color:#eef5f7;
  font-size: 18px;
}
</style>