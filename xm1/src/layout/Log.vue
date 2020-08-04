<template>
<div>
      <RegHead/>
      <Log1/>
      <RegFoot/>
    
</div>
</template>

<script>
import RegHead from "../components/RegHead"
import RegFoot from "../components/RegFoot"
import Log1 from "../components/Log1"
import axios from "axios"
export default {
  name: "Log",
  data: function () {
    return {};
  },
  methods: {},
  components:{
    RegFoot,RegHead,Log1
  }
};
</script>

<style scoped>

</style>
