<template>
  <div>
    <!-- <div class="p"> -->
             <!-- <router-link :to="''"><p class="p1">来自守护天使星球</p></router-link> -->
             <!-- <router-link :to="''"><p class="p2">我的soul币</p></router-link> -->
             <!-- <router-link :to="''"><p class="p3">加好友</p></router-link> -->
              <!-- <router-link :to="''"><p class="p4">设置</p></router-link> -->
   <!-- </div> -->
    <My1/>
    <Footer/>
  </div>
</template>

<script>
import Footer from "../components/Footer"
import My1 from "../components/My1"
export default {
name:"My",
data:function(){
    return{};
},
   components:{
       My1,Footer,
   },
};
</script>

<style scoped >
/* .p{display: flex;width: 100%;} */
/* a{text-decoration: none;} */
/* div{width: 100%;} */
/* div{font-size: 0.875rem;background-color:skyblue;} */
/* .p4{background-color: gray;position: relative;right: -10rem;opacity: .5;} */
/* .p3{width:100%;background-color:gray;margin-left: 200%;opacity: .5;} */
/* .p2{width:100%;background-color: gray;margin-left: 50%;opacity: .5;} */
/* .p1{background-color: gray;opacity: .5;} */

</style>