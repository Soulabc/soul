<template>
  <div class="typelist">
      <ul class="box">
          <li v-for="book in books" :key="book.id">
              <div class="list">
                  <!-- <span>{{book.img}}</span> -->
                  <img :src="'/static/'+book.img">
                  <p>{{book.name}}</p>
                  <i class="el-icon-more"></i>
              </div>
               <p class="text">{{book.text}}</p>
               <p class="aa"><i class="el-icon-location"></i>{{book.didian}}</p>
               <p class="bb">
                   <i class="el-icon-share"></i>
                   <i class="el-icon-star-off" @click="fn()"><span>{{book.count}}</span></i>
                   <i class="el-icon-news"><span>{{book.num}}</span></i>
               </p>              
          </li>          
      </ul>
      <ul class="box">
        <li v-for="book in books" :key="book.id">
          <div class="list">
              <img :src="'/static/'+book.img" >
              <p>{{book.name}}</p>
              <i class="el-icon-more"></i>
          </div>
           <p class="text">{{book.text}}</p>
           <p class="aa"><i class="el-icon-location"></i>{{book.didian}}</p>
           <p class="bb">
               <i class="el-icon-share"></i>
               <i class="el-icon-star-off"><span>{{book.count}}</span></i>
               <i class="el-icon-news"><span>{{book.num}}</span></i>
           </p>
         
        </li>          
       </ul>
        <ul class="box clear">
           <li v-for="book in books" :key="book.id">
              <div class="list">
                  <img :src="'/static/'+book.img" >
                  <p>{{book.name}}</p>
                  <i class="el-icon-more"></i>
              </div>
               <p class="text">{{book.text}}</p>
               <p class="aa"><i class="el-icon-location"></i>{{book.didian}}</p>
               <p class="bb clear">
                   <i class="el-icon-share"></i>
                   <i class="el-icon-star-off"><span>{{book.count}}</span></i>
                   <i class="el-icon-news"><span>{{book.num}}</span></i>
               </p>   
            </li>          
        </ul>
         <ul class="box clear">
             <li v-for="book in books" :key="book.id">
                <div class="list">
                    <img :src="'/static/'+book.img" >
                    <p>{{book.name}}</p>
                    <i class="el-icon-more"></i>
                </div>
                 <p class="text">{{book.text}}</p>
                 <p class="aa"><i class="el-icon-location"></i>{{book.didian}}</p>
                 <p class="bb clear">
                     <i class="el-icon-share"></i>
                     <i class="el-icon-star-off" ><span>{{book.count}}</span></i>
                     <i class="el-icon-news"><span>{{book.num}}</span></i>
                 </p>   
           </li>          
       </ul>
  </div>  
</template>

<script>
import axios from "axios";

export default {
    name:"TypeList",
    props:["type"],
    data(){
        return {
            books:[]
        }
    },
    created(){
        this.getBook();
    },
    watch:{
        type:function(){           
            this.getBook();
        }
    },
    methods:{
        getBook(){
            axios({
                url:"books",
                params:{
                    "type":this.type
                }
            })
            .then(res=>this.books=res.data)
            // console.log(this.books)
        },
        fn(){
            this.books.count++
        }
    },
    
    beforeRouteUpdate (to, from, next) {
        next();
    },
}
</script>

<style  scoped>
.clear:after{
	content:".";
	display:block;
	width:0;
	height:0;
	overflow:hidden;
	visibility:hidden;
	clear:both;
}
.box{
    width:100%;
}
.typelist{
    height:515px;
    overflow: auto;
}

.box li{
    list-style: none;
    margin:5px auto;
}

.box .list{
    width:100%;
    display: flex;
}

.box .list img{
    width:70px;
    height:70px;
    border-radius:50%;
    margin: 10px;
    margin-left: 15px;
}

.box .list p{
    height: 30px;
    margin-top: 15px;
    margin-left: 10px;
    font-size: 16px;
    color: grey;
}
.box .list i{
   flex: 1;
   text-align: right;
   display:block;
   margin-right:20px;
  
   margin-top:18px;
   font-size: 20px;
}
.box .text{
    width:270px;
    margin-left:100px;
    font-size:18px;
    
}
.box .aa{
    margin-left:90px;
    margin-top: 10px;
    color: green;
}
.box .bb{
    width:100%;
    height: 24px;
    clear: both;
    margin-top: 10px;
}
.box .bb i{
      font-size: 20px;
}
.box .bb i:nth-child(1){
    display:block;
    margin-left:90px;
    float: left;
    color: grey;
}
.box .bb i:nth-child(2){
    display:block;
    margin-left:170px;
    margin-right:20px;
    float: left;
}
.box .bb i:nth-child(3){
    display:block;
    float: left;
}
.box .bb span{
      font-size: 14px;
}
</style>