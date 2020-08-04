<template>
  <div>
    <div>
    <div v-for="user in users" :key="user.id">
        <div class="head">           
              <img :src="'/static/img/1.jpg'">
           <div class="head-p">
             <p>昵称 : {{user.nickname}}</p>
             <p>个性签名 :  {{user.Sign}}</p>
           </div>
           <!-- <img class="img" src="/static/img/bg.jpg"> -->
        </div>
      <div class="body">
        <i>
        <router-link :to="'/Second/'"><span>{{user.like}}</span>
          <br/>关注</router-link>
        </i>
        <i>
        <router-link :to="'jjj'">  <span>{{user.liked}}</span>
          <br/>被关注</router-link>
        </i>
        <i>
        <router-link :to="'erre'">  <span>{{user.look}}</span>
          <br/>看过我</router-link>
        </i>
      </div>
      <div class="foot">
        <ul>
          <li>
            <span class="q">性别 :</span>
            <i>{{user.sex}}</i>
            <i class="el-icon-male" id="nan"></i>
            <!-- <i class="el-icon-female" id="nv"></i> -->
          </li>
          <li>
            <span class="q">电子邮箱:</span>
            <i>{{user.Sign}}</i>
          </li>
          <li>
            <span class="q">最新状态 :</span>
            <i>{{user.Sign}}</i>
          </li>
          <li>
             <span class="q">职业:</span>
             <i>打酱油</i>
          </li>
        </ul>
      </div>
      <div class="out">
        <router-link :to="'/Log/'">
        <button>退出</button>
        </router-link>
      </div>
    
    </div>
 </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "My1",
  data() {
    return {
      users: [],
    };
  },
  // methods(){
    // if((user.sex)==="男"){

// }
  // },
  
  created() {
    axios({
      url: "users",
    }).then((res) => (this.users = res.data));
  },
};
</script>

<style scoped>
a{
  text-decoration: none;
  color: rgb(148, 114, 114);
}
.q {
  margin-top: 5px;
  color: royalblue;
}
li {
  list-style: none;
}
ul {
  border-top: 1px solid gray;
  width: 100%;
  height: 268px;
  background-color: white;
}
.head {
   /* margin: 50px auto; */
   padding-top: 50px;
   width: 100%;
   height:210px;
   text-align: center;
   background-image: url("/static/img/bg.jpg");
}
/* .head .img{ */
   /* position: relative; */
   /* width: 100%; */
   /* height: 100px; */
/* } */
.head img {
  display:block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  text-align: center;
  margin-left: 40%;
}
.head .head-p p{
     margin:15px;
     font-weight: bold;
}
.head .head-p p:nth-child(2){
  color: rgb(184, 179, 179);
}
.body {
  width:100%;
  height: 100%;
  font-size: 20px;
  display: flex;
  background-color: white;
}
.body span{
  display: inline-block;
  margin:5px;
}
.body i {
  display: block;
  width: 144px;
  height: 40px;
  border-radius: 5%;
  padding: 5px;
  text-align: center;
  color: rgb(68, 63, 63);
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
}
.foot {
  width: 100%;
  height: 100%;
}
.foot span {
  display: inline-block;
  width: 80px;
}
.foot li {
  height:50px;
  border-bottom: 1px solid rgb(126, 117, 117);
  padding-left:10%;
  line-height: 50px;
  /* margin-top:30px; */
}
/* .foot li:nth-child(1) { */
/* } */
.foot li:nth-child(4) {
  padding-bottom: 10px;
}
/* .out { */
  /* margin-top: 10%; */
/* } */
.out button {
  width: 50%;
  height: 40px;
  left: 18%;
  text-align: center;
  font-size: 15px;
  margin-left: 25%;
  border-radius: 5%;
  margin-bottom: 50px;
  background-color: rgb(150, 150, 184);
}

</style>