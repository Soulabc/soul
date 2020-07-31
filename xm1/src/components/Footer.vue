<template>
    <div class="app">
        <div class="footer"> 
            <ul>
                <li>
                 <i class="el-icon-bangzhu"></i>
                 <p><router-link :to="'/First/'">星球</router-link></p>
                </li>
                <li>
                     <i class="el-icon-view"></i>
                     <p><router-link :to="'/Second/'">广场</router-link></p>
                </li>
                <li>
                    <span>
                        <router-link :to="'/Match/'">匹配</router-link>
                    </span>
                </li>
                <li>
                    <i class="el-icon-chat-dot-round"></i>
                    <p><router-link :to="'/Liaotian/'">聊天</router-link></p>
                </li>
                <li>
                     <i class="el-icon-s-custom"></i>
                     <p><router-link :to="'/My/'">我的</router-link></p>
                </li>
            </ul>                                   
        </div>
    </div>
</template>

<script>
export default {
   name:"Footer",
   data:function(){
       return{

       }
   }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
a{
    text-decoration: none;
    color: black;
}
.router-link-exact-active{
    color: blue;
}
/* a:visited{ */
     /* color: white; */
/* } */
    ul{
        list-style: none;
    }
    .footer{
            z-index: 100;
            position:fixed;
            bottom:0px;
            width:434px;
    }
      .footer ul{
           /* margin-top: 50px; */
           width:434px;
           display: flex;
           justify-content: space-around;
      }
      .footer ul i{
          margin-top: 5px;
          font-size: 30px;
          
      }
      .footer ul li:hover{
            color: rgb(106, 226, 247);
      }
      .footer ul p{
          margin-top: 5px;
      }
      .footer ul span{
          display: block;
          width: 60px;   
          height: 60px;
          border-radius: 50%;
          background: rgb(106, 226, 247);
          text-align: center;
          line-height: 60px;
          border:10px solid white;
          color: white;
          margin-top: -15px;
          font-size: 18px;
      }

</style>