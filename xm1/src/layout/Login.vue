<template>
<div>
 <RegHead/>
    <Login1/>
    <RegFoot/>
</div>
</template>

<script>
import RegHead from "../components/RegHead"
import RegFoot from "../components/RegFoot"
import Login1 from "../components/Login1"
export default {
  name: "Login",
  data: function () {
    return {};
  },
  components:{
      RegHead,RegFoot,Login1
  },
  methods: {},
};
</script>

<style scoped>

</style>