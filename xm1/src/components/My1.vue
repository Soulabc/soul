<template>
  <div>
    <!-- <div v-for="user in users" :key="user.id">
      <div class="head">
        <div class="head-img">
          <img :src="users['data'][1].head_img" />
        </div>
        <div class="head-p">
          <strong>昵称 :</strong>
          <i>{{users['data'][3]['nick_name']}}</i>
          <br />
          <strong>个性签名 :</strong>
          <i>{{users['data'][1]['sign']}}</i>
        </div>
      </div>
      <div class="body">
        <i>
          <span>{{users['data'][1]['focus_num']}}</span>
          <br />关注
        </i>
        <i>
          <span>{{users['data'][1]['fans_num']}}</span>
          <br />被关注
        </i>
        <i>
          <span>{{users['data'][1]['look_num']}}</span>
          <br />看过我
        </i>
      </div>
      <div class="foot">
        <ul>
          <li>
            <span class="q">昵称 :</span>
            <i>{{users['data'][1]['focus_num']}}</i>
          </li>
          <li>
            <span class="q">性别 :</span>
            <i>{{users['data'][1]['gender']}}</i>
            <i class="el-icon-male" id="nan"></i>
            <i class="el-icon-female" id="nv"></i>
          </li>
          <li>
            <span class="q">个性签名 :</span>
            <i>{{users['data'][1]['sign']}}</i>
          </li>
        </ul>
      </div>
      <div class="out">
        <button>退出</button>
      </div>
      <div class="in"></div>
    </div> -->
 <div>
    <div v-for="user in users" :key="user.id">
      <div class="head">
        <div class="head-img">
          <img :src="''" />
        </div>
        <div class="head-p">
          <strong>昵称 :</strong>
          <i>{{user.nickname}}</i>
          <br />
          <strong>个性签名 :</strong>
          <i>{{user.Sign}}</i>
        </div>
      </div>
      <div class="body">
        <i>
        <router-link :to="''">  <span>{{user.like}}</span>
          <br />关注</router-link>
        </i>
        <i>
        <router-link :to="''">  <span>{{user.liked}}</span>
          <br />被关注</router-link>
        </i>
        <i>
        <router-link :to="''">  <span>{{user.look}}</span>
          <br />看过我</router-link>
        </i>
      </div>
      <div class="foot">
        <ul>
          <li>
            <span class="q">昵称 :</span>
            <i>{{user.nickname}}</i>
          </li>
          <li>
            <span class="q">性别 :</span>
            <i>{{user.sex}}</i>
            <i class="el-icon-male" id="nan"></i>
            <i class="el-icon-female" id="nv"></i>
          </li>
          <li>
            <span class="q">个性签名 :</span>
            <i>{{user.Sign}}</i>
          </li>
          <li>
            <span class="q">最近状态 :</span>
            <i>{{user.Sign}}</i>
          </li>
        </ul>
      </div>
      <div class="out">
        <button>退出</button>
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
  methods() {
    if (user.sex === "nan") {
    }
  },

  created() {
    axios({
      // url: "soul/person/user/",
       url: "http://localhost:3000/users",
    }).then((res) => (this.users = res.data));
  },
};
</script>

<style scoped>
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
  width: 44px;
  height: 200px;
  padding-top: 15%;
  padding-left: 8.125rem;
}
.head div img {
  width: 99.2px;
  height: 100px;
  border-radius: 50%;
}
.head > div {
  width: 100px;
  height: 100px;
}
.head-img {
  margin-left: 36%;
}
.head .head-p {
  width: 8.125rem;
  padding-left: 20.8px;
}

.body {
  width: 430px;
  height: 100%;
  font-size: 20px;
  display: flex;
  background-color: white;
}
.body i:hover {
  background-color:gray;
  
}
.body i {
  display: block;
  width: 144px;
  height: 40px;
  margin-left: 6px;
  border-radius: 5%;
  padding-top: 1%;
  text-align: center;
  color: rgb(68, 63, 63);
  font-size: 12px;
  font-weight: bold;
  margin-left: 30px;
}
.foot {
  width: 100%;
  height: 100%;
  background-color: white;
}
.foot li {
  margin-left: 15%;
  margin-top: 40px;
}
.foot li:nth-child(1) {
  margin-top: 0px;
}
.foot li:nth-child(4) {
  padding-bottom: 10px;
}
.out {
  margin-top: 10%;
}
.out button {
  width: 50%;
  height: 40px;
  left: 18%;
  text-align: center;
  font-size: 15px;
  margin-left: 25%;
  border-radius: 5%;
  margin-bottom: 20px;
  background-color: white;
}
i > span {
  margin-top: -5px;
  color: rgb(207, 52, 52);
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  margin-left: 5px;
}
</style>
