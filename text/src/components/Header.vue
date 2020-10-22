<template>
  <div class="head">
    <span></span>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>
.head{
  height:293px;
  background-color:#000000;
  border-top-left-radius:3%;
  border-top-right-radius:3%;
  position: relative;
}

.head span{
  position: absolute;
  top:46px;
  left:130px;
  height:190px;
  width:120px;
  background:url("../assets/logo.png")  no-repeat;
}
</style>