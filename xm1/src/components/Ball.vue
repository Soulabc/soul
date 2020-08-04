<template>
    <div id="box">
      <div id="top">
          <ul>
              <li><img :src="'/static/img/logocopy.png'"/></li>
              <li>
                  <p>Soul</p>
              </li>
              <i class="i"><img :src="'/static/img/log2.png'"></i>
              <li>
                  <select id="sel" @click="fnn()" v-model="sex">    
                      <option >筛选</option>
                      <option value="classA" @click="fnn()">男</option>
                      <option value="classB">女</option>
                  </select>
              </li>
          </ul>
      </div>
      <div id="div1">
          <a @click="jump()" v-for="(data,index) in datas" :key="index">{{data}}<br>
          <span :class=sex></span></a>
      </div>
      <audio :src="'static/img/link.mp3'" autoplay loop id="music"></audio>
      <p id="p">当前在线<i>009527</i>人</p>
    </div>
</template>

<script>
import axios from "axios";
import litk from "../../js/lrtk.js"

export default {
   name:"Ball", 
//    props:["type"], 
   data:function(){
       return{
           sex:"筛选",
           datas:[],
        //    data:[]
       }
   },
      methods:{
         fnn:function(gender){
             console.log(gender)
            //    axios({
                    // url:"planet/gender/",
                    // params:{
                    //    "type":this.type
                    //  }
            //    })
            //    .then(res=>{this.datas=res.data;
                            // console.log(res.data)
                    // }) 
          } ,
         jump(){
               this.$router.push({path:'/Liaotian'})
            }                        
      },       
     created(){
           axios({
               url:"planet/person/",
               
           })
           .then(res=>{
               let arr = res.data.data;
            //    console.log(res.data.data);
            //    console.log(arr);
               for(let i=0;i<arr.length;i++){
                //    console.log(arr[i].nick_name);
                    this.datas.push(arr[i].nick_name)
                    // console.log(arr[i])
                    // console.log(this.datas)
                 }              
            })       
         },
        //   fnn(){
            // axios({
            // url:"planet/gender/",
            // params:{
            //    "type":this.type
            //  }
    //    })
    //    .then(res=>{
                // this.gender=res.data
                // console.log(res.data)
                // })
}
</script>

<style scoped>
span{
  background-color: rgb(90, 116, 172);
}
#p{
    color:white;
    position: absolute;
    bottom: 130px;
    left: 150px;
    color: #64DED8;
    font-size: 14px;
}#p>i{
     color: red;
     font-size: 16px;
     font-weight: bold;
}

#box{
    width:100%;
    /* background: #030202; */
    background-color: #030202;
}

* {
    margin: 0;
    padding: 0;
}

ul {
    list-style: none;
}
/* .span { */
    /* background: pink; */
/* } */

.classA {
    background: blue;
}
.classB {
    background: red;
}
span{
    display: inline-block;
    border-radius: 80%;
    width: 12px;
    height: 12px;
    margin-left: 15px;
    margin-top: -5px;
}
.i {
    position: absolute;
    top: 15px;
    right: 100px;   
}
.i img{
      width: 20px;
      height: 20px;
      margin-top:4px;
}

#sel {
    background-color: #0C0B13;
    border-radius: 10%;
    color: white;
    font-family: "PingFang SC";
    border: 2px solid #1B1B27;
    margin-top: 15px;
    font-size: 16px;
}
#div1 {
    height:625px;
    width: 100%;
    position: relative;
    margin: 45px auto;
    opacity: 0.5;
    margin-top: -15px;
}
#div1 a {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 12px;
    color: white;
    font-weight: bold;
    padding: 3px 6px;
    text-decoration: none;
    font-weight: bold;
}

/* 头部 */
#top {
    width: 100%;
    height:60px;
    background-color: #12121F;
}

#top ul {
    display: flex;
    justify-content: space-around;
    color: white;
}

#top ul li:nth-child(1) img {
    width: 100px;
    height: 50px;
    margin-top: 5px;
}

#top ul li:nth-child(2) {
    margin: 5px 0;
}

#top ul li:nth-child(3) {
    margin: 20px 0;
}

#top p {
    font-family: "PingFang SC", "Helvetica Neue", Helvetica, STHeiTi, Arial, sans-serif;
    font-size: 30px;
    color: whitesmoke;
    text-align: center;
    line-height: 50px;
    margin-left: -42px;
}
</style>