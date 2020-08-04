<template>
  <div>
    <RegHead/>
    <Reg1/>
    <RegFoot/>
  </div>
</template>

<script>
import RegHead from "../components/RegHead"
import RegFoot from "../components/RegFoot"
import Reg1 from "../components/Reg1"
export default {
  name: "Reg",
  data: function () {
    return {};
  },
  components: {
    RegFoot,RegHead,Reg1
  },
};
</script>

<style scoped>
</style>
