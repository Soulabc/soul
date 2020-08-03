<template>
    <div class="app">
        <div class="footer"> 
            <ul>
                <li>
                    <router-link :to="'/First/'">
                      <i class="el-icon-bangzhu"></i>
                      <p>星球</p>
                    </router-link>
                </li>
                <li>
                     <router-link :to="'/Second/'">
                        <i class="el-icon-view"></i>
                        <p>广场</p>
                     </router-link>
                </li>
                <li>
                    <span>
                        <router-link :to="'/Match/'">匹配</router-link>
                    </span>
                </li>
                <li>
                    <router-link :to="'/Liaotian/'">
                        <i class="el-icon-chat-dot-round"></i>
                        <p>聊天</p>
                    </router-link>
                </li>
                <li>
                     <router-link :to="'/My/'">
                         <i class="el-icon-s-custom"></i>
                         <p>我的</p>
                     </router-link>
                </li>
            </ul>                                   
        </div>
    </div>
</template>

<script>
export default {
   name:"Footer",
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
     /* color: blue; */
/* } */
    ul{
        list-style: none;
    }
    .footer{
            z-index: 100;
            position:fixed;
            bottom:0px;
            width:100%;
            background: rgb(250, 242, 242);
    }
      .footer ul{
           /* margin-top: 50px; */
           width:100%;
           display: flex;
           justify-content: space-around;
      }
      .footer ul i{
          margin-top: 5px;
          font-size: 30px;
          
      }
      /* .footer ul li:hover{ */
            /* color: rgb(106, 226, 247); */
      /* } */
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