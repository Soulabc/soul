<template>
     <div>
    <RegHead/>
      <RegFoot/>
     </div>
</template>

<script>
import RegHead from "../components/RegHead"
import RegFoot from "../components/RegFoot"
export default {
      name:"Reg",
      data:function(){
          return{

          }
      },
      components:{
          RegHead,RegFoot,
      }
}
</script>

<style scoped>

</style>