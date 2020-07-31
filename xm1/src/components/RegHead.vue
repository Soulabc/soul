<template>
      <div>
            <h1>Soul</h1>
            <ul>
                <li><p class="p1"></p></li>
                <li><span>跟 随 灵 魂 找 到 你</span></li>
                <li><p class="p2"></p></li>
            </ul>     
                                  
      </div>
</template>

<script>
export default {
     name:"RegHead",
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
      ul{list-style: none;}
      div{
          width:100%;
          height: 100px;
          margin: 0 auto;
      }
      div h1{
         /* margin-top:50px; */
         text-align: center;
         font-size: 50px;
      }
      div ul{
          width: 314px;
          display: flex;
          margin: 20px 60px;
          text-align: center;
      }
      /* div ul li{ */
          /* width: 100px; */
          /* height: 30px; */
      /* } */
      div p{
          display: inline-block;  
          width: 40px;
          height: 5px;
          border-radius:5px;
      }
      div .p1{background-image: linear-gradient(20deg, white, black);}
      div .p2{background-image: linear-gradient(20deg, black, white);}
      div span{
          display: block;
          margin: 0px 15px;
          text-align: center;
          font-size: 20px;
      }
</style>