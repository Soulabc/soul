<template>
      <div>
           <Ball/>
           <Footer/>
      </div>
</template>

<script>
import Footer from "../components/Footer"
import Ball from "../components/Ball"
export default {
    name:"First",
    data:function(){
        return{

        }
    },
    components:{
        Footer,Ball
    }
}
</script>

<style>

</style>