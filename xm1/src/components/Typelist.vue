<template>
  <div>
      <ul class="box">
          <li v-for="book in books" :key="book.id">
              <div class="list">
                  <img :src="'/static/'+book.img" >
                  <p>{{book.name}}</p>
                  <i class="el-icon-more"></i>
              </div>
          </li>          
      </ul>
  </div>  
</template>

<script>
import axios from "axios";

export default {
    name:"TypeList",
    // 属性:type表示当前所显示书的类型。
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
        // 当书的类型发生变化是，重新获取书籍
        type:function(){           
            this.getBook();
        }
    },
    methods:{
        // 根据书的类型,获取书籍
        getBook(){
            axios({
                url:"books",
                params:{
                    "type":this.type
                }
            })
            .then(res=>this.books=res.data)
        }
    },
    
    beforeRouteUpdate (to, from, next) {
        // console.log("TypeList更新了");
        // console.log(this);
        next();
    },
}
</script>

<style  scoped>
.box{
    width:434px;
}

.box li{
    list-style: none;
    border:1px solid black;
    margin:5px 10px;
}

.box .list{
    width:434px;
    height: 100px;
    display: flex;
}

.box .list img{
    width:70px;
    height:70px;
    border-radius:50%;
    margin: 10px;
}

.box .list p{
    height: 30px;
    margin-top: 15px;
    margin-left: 10px;
    font-size: 20px;
}
.box .list i{
   display:block;
   margin-right:20px;
   margin-top: 10px;
}
</style>