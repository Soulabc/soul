<template>
  <div>
    <div>
    <form action>
      <ul class="list">
        <li>
          用户名
          <input type="text" placeholder="请输入你的账号" class="input" />
          <br />
          <span>{{}}</span>
          <br />
        </li>
        <li>
          设置密码
          <input type="password" placeholder="请输入登录密码" class="input" />
          <br />
          <span>{{}}</span>
          <br />
        </li>
      </ul>
      <button id="btn">立即登录</button>
      <button id="btn1"> 取消登录</button>
    </form>
    
      </div>
  </div>
</template>

<script>
export default {
  name: "Login1",
  data: function () {
    return{
      
    }
  },
  methods:{
    
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
input {
  outline: none;
}
li {
  list-style: none;
}
.input {
  width: 200px;
  height: 38px;
  border-radius: 4px;
}
#btn {
  width: 100px;
  height: 30px;
  display: inline-block;
  margin: 70px 0 0 80px;
 
}
#btn1 {
  width: 100px;
  height: 30px;
  display: inline-block;
   margin: 70px 0px 0 60px;
}
.list {
  background-color: red;
  margin-top: 20%;
}
.list li {
  margin-left: 15%;
}
.list li input {
  margin-left: 10%;
}
.list li:nth-child(2) input{
  margin-left: 5%;
}

.list li span {
  margin-left: 80px;
}
</style>