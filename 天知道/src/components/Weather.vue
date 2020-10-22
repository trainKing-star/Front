<template>
  <div class="weather">
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <div class="type">
            <p class="p1">{{item.type}}</p>
            <p class="p2">{{item.low}}~{{item.high}}</p>
            <P class="p3">{{item.date}}</P>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {request} from "../myaxios/index";

export default {
  name: "Weather",
  props:['city'],
  data(){
    return {
      items:[]
    }
  },
  watch:{
    city:function (){
      request({
        params:{
          'city':this.city,
        },
        method:'get'
      }).then(res => {
        this.items= res.data.data.forecast
        console.log(res.data.data.forecast);
      }).catch(error => {
        console.log(error);
      })
    }
  },
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}


.weather{
  content:"";
  display:block;
  clear:both;
  margin-left: -40px;
}

ul{
  margin-top: 80px;
}

ul li{
  list-style: none;
  float:left;
  margin-right: 50px;
}

.p1{
  color:#00c1cc;
  font-size: 30px;
}

.p2{
  color:#00c1cc;
  font-size: 15px;
  margin: 20px 0;
}

.p3{
  color:#aaaaaa;
  font-size: 15px;
}

</style>