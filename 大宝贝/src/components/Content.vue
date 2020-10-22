<template>
  <div class="content">
    <p class="big">大宝贝助手</p>
    <p class="upload">{{ filesNum }}</p>
    <input id="select" type="file" multiple="multiple" @change="getFile"/>
    <div class="depend">
      <div v-if="logo === 1">
        <button class="but btn1" @click="getInput">选择文件</button>
        <button class="but btn2" @click="uploadFile">{{message}}</button>
      </div>
      <div v-else-if="logo === 2">
        <button class="but btn1" @click="logo = 4;filesNum = '登录中'">登录</button>
        <button class="but btn2" @click="logo = 3;filesNum = '注册中'">注册</button>
      </div>
      <div v-else-if="logo === 3">
        <input class="user" name="username" type="text" placeholder="用户名" v-model="registerUser"/>
        <input class="pas" name="password" type="password" placeholder="密码" v-model="registerPass"/>
        <button class="but btn3" @click="register">注册</button>
      </div>
      <div v-else-if="logo === 4">
        <input class="user" name="username" type="text" placeholder="用户名" v-model="loginUser"/>
        <input class="pas" name="password" type="password" placeholder="密码" v-model="loginPass"/>
        <button class="but btn3" @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import {request} from "../myaxios/index"
export default {
  name: "Content",
  data(){
    return {
      logo:2,
      filesNum:'请登录你的账号',
      registerUser:'',
      registerPass:'',
      loginUser:'',
      loginPass:'',
      files:[],
      message:'上传文件'
    }
  },
  methods:{
    uploadFile(){
      if(this.files.length === 0){
        this.filesNum = '没有选择可上传的文件'
        return
      }
      // for(let i=0;i<this.files.length;i++){
      //   formdata.append('file',this.files[i])
      // }
      let formdata = new FormData()
      for(let i=0;i<this.files.length;i++){
        formdata.append('file',this.files[i])
      }
      this.message = '正在上传文件'
      request({
        url:'upload',
        data:formdata,
        method:'post',
        headers:{
          'Content-Type':'multipart/form-data',
        }
      }).then(res => {
        if(res.data.messageid === 200){
          console.log(res)
          this.filesNum = '文件上传成功'
          this.message = '上传文件'
        }
      }).catch(error => {
        this.filesNum = error
        this.message = '上传失败'
      })
      this.files = []
    },
    getFile(event){
      this.filesNum = '已选择' + event.target.files.length + '个文件:'
      this.files = event.target.files
      for(let i=0;i<this.files.length;i++){
        this.filesNum += this.files[i].name + ' '
      }
    },
    getInput(){
      let selectFile = document.getElementById('select')
      selectFile.click()
    },
    register(){
      let formData = new FormData()
      let username = this.registerUser
      let password = this.registerPass
      formData.append('username',this.registerUser)
      formData.append('password',this.registerPass)
      request({
        url:"/register",
        data:formData,
        method:'post',
        headers:{
          'Content-Type':'multipart/form-data',
        }
      }).then(res => {
        if(res.data.messageid === 200){
          this.filesNum = "注册成功，请登录"
          this.logo = 4
          this.loginUser = username
          this.loginPass = password
        }
      }).catch(error => {
        console.log(error)
        this.filesNum = error
      })
      this.registerPass=''
      this.registerUser=''
    },
    login(){
      let formdata = new FormData()
      formdata.append('username',this.loginUser)
      formdata.append('password',this.loginPass)
      request({
        url:'/login',
        data:formdata,
        method:'post',
        headers:{
          'Content-Type':'multipart/form-data',
        }
      }).then(res => {
        if(res.data.messageid === 200){
          this.filesNum = '选择要上传的文件'
          this.logo = 1
        }
        else(
            this.filesNum = '登录失败，请检查'
        )
      }).catch(error => {
        console.log(error)
        this.filesNum = error
      })
      this.loginUser = ''
      this.loginPass = ''
    }
  }
}
</script>

<style scoped>
.content .big{
  margin-top: 32px;
  text-align: center;
  font-size:16px;
  color:#000000;
}

.content .upload{
  font-size:12px;
  text-align: center;
  color:#62afd3;
  margin-top:28px;
  margin-bottom:30px;
}

.content .but{
  width:155px;
  height:45px;
  display: block;
  font-size: 20px;
  color:#eef5f7;
  margin:auto;
  border:none;
  border-radius:15%;
}

.content .btn1{
  background-color:#60a9c1;
}

.content .btn2{
  margin-top:10px;
  background-color:#42b983;
}

.content .btn3{
  background-color:#62afd3;
}

input{
  width:155px;
  height:45px;
  display: block;
  font-size: 20px;
  color:#000000;
  margin:0 auto 10px;
  border:1px solid #000000;
  border-radius:10%;
  text-align: center;
}

input[type='file']{
  display: none;
}
</style>