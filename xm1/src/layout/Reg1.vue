<template>
  <div>
    <RegHead/>
    <Reg2/>
    <RegFoot/>
  </div>
</template>

<script>
import RegHead from "../components/RegHead"
import RegFoot from "../components/RegFoot"
import Reg2 from "../components/Reg2"
export default {
  name: "Reg1",
  data: function () {
    return {};
  },
  components: {
    RegHead,
    RegFoot,
    Reg2,
  },
};
</script>

<style scoped>
</style>

