<template>
<div>
   <RegHead/>
   <Registered1/>
      <RegFoot/>
    
</div>
</template>

<script>
import RegHead from "../components/RegHead"
import RegFoot from "../components/RegFoot"
import Registered1 from "../components/Registered1"
import axios from "axios"
export default {
  name: "Registered",
  data: function () {
    return {};
  },
  methods: {},
  components:{
    RegFoot,RegHead,Registered1
  }
};
</script>

<style scoped>

</style>