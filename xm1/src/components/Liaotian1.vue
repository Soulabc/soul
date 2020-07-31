<template>
     <div>
       <!-- <div id="container"> -->
          <div class="header">
              <span style="float: left;">Soul聊天界面</span>
            <span style="float: right;">{{houer}}:{{minutes}}</span>
          </div>
          <ul class="content">
              <li v-for="(item, index) in messageList" :key="index">
                  <img :src="'/static/img/1.jpg'+(item.isSelf?'r.jpg':'l.jpg')" :class="'img'+(item.isSelf?'right':'left')">
                  <!-- <img :src="'/static/img/1.jpg'"> -->
                  <span :class="'span'+(item.isSelf?'right':'left')">{{item.message}}</span>
              </li>
          </ul>
          <div class="footer">
              <!-- 添加输入内容 -->
              <input id="text" type="text" placeholder="说点什么吧..." v-model="inputValue" @keyup.enter="chat">
              <!-- 给发送也绑定一个事件 -->
              <span id="btn" @click="chat">发送</span>
           </div>
     </div>
</template>

<script>
import $ from "jquery";
export default {
     name:"Liaotian1",
     data:function(){
         return{

            //输入内容,双向数据绑定
             inputValue: '',
             //聊天窗口内容
             messageList: [],
             houer : (new Date()).getHours(),
             minutes : (new Date()).getMinutes(),
            //  seconds : (new Date()).getSeconds()
         }
     },
      methods: {
     chat() {

         // console.log(this.inputValue);
         // console.log(this);
         // 二.获取自己输入内容,将内容渲染到页面
         this.messageList.push({
                 message: this.inputValue,
                 isSelf: true
             })
             // 三.获取机器人接口内容,也将内容渲染到页面
         $.ajax({
             url: 'http://www.tuling123.com/openapi/api',
             data: {
                 userid: 1, //添加id,实现上下文连贯
                 key: 'b6ef78a0c1f24fee90d2317139b9c3d5',
                 info: this.inputValue
             },
             // 注意使用箭头函数,不然里面的this会发生变化
             success: (obj) => {
                 console.log(obj);
                 // 三.获取机器人接口内容,也将内容渲染到页面
                 this.messageList.push({
                     message: obj.text,
                     isSelf: false
                 })
             }
         })
         this.inputValue = ''; //最后清除文本框
     }
 },
     
}
</script>

<style scoped>
              * {
          margin: 0;
          padding: 0;
          list-style: none;
          font-family: '微软雅黑'
      }
      
      #container {
          width: 434px;
          height: 780px;
          background: #eee;
          margin: 80px auto 0;
          position: relative;
          box-shadow: 20px 20px 55px #777;
      }
      
      .header {
          width:434px;
          background: #000;
          height: 40px;
          color: #fff;
          line-height: 34px;
          font-size: 20px;
          padding: 0 10px;
      }
      /* .header span:nth-child(2){color: red;} */
      .footer {
          width: 430px;
          height: 50px;
          background: #666;
          position: absolute;
          bottom: 20px;
          padding: 10px;
      }
      
      .footer input {
          width: 360px;
          height: 45px;
          outline: none;
          font-size: 20px;
          text-indent: 10px;
          position: absolute;
          border-radius: 6px;
          right: 80px;
      }
      
      .footer span {
          display: inline-block;
          width: 62px;
          height: 48px;
          background: #ccc;
          font-weight: 900;
          line-height: 45px;
          cursor: pointer;
          text-align: center;
          position: absolute;
          right: 10px;
          border-radius: 6px;
      }
      
      .footer span:hover {
          color: #fff;
          background: #999;
      }
      /* #user_face_icon {
    display: inline-block;
    background: red;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    position: absolute;
    bottom: 6px;
    left: 14px;
    cursor: pointer;
    overflow: hidden;
  } */
      
      img {
          width: 60px;
          height: 60px;
      }
      
      .content {
          font-size: 20px;
          width: 435px;
          height: 662px;
          overflow: auto;
          padding: 5px;
      }
      
      .content li {
          margin-top: 10px;
          padding-left: 10px;
          width: 412px;
          display: block;
          clear: both;
          overflow: hidden;
      }
      
      .content li img {
          float: left;
      }
      
      .content li span {
          background: #7cfc00;
          padding: 10px;
          border-radius: 10px;
          float: left;
          margin: 6px 10px 0 10px;
          max-width: 310px;
          border: 1px solid #ccc;
          box-shadow: 0 0 3px #ccc;
      }
      
      .content li img.imgleft {
          float: left;
      }
      
      .content li img.imgright {
          float: right;
      }
      
      .content li span.spanleft {
          float: left;
          background: #fff;
      }
      
      .content li span.spanright {
          float: right;
          background: #7cfc00;
      }
</style>