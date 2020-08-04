KK 16:59:24
<template>
  <div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="手机号" prop="number">
        <el-input type="number" class="aaa" v-model="ruleForm.number" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="checkPass">
        <el-input type="password" class="aaa" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')" class="btn">登录</el-button>
      </el-form-item>
    </el-form>
    <!-- <p class="ddd">Logining...</p> -->
    <video width="100%" height="800px" :src="'/static/img/soul.mp4'" muted loop autoplay></video>
  </div>
</template>

<script>

export default {
  name: "Log",
  data() {

    var validateNumber = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      }else if (!/^1[0-9]{10}$/.test(value)) {
        callback(new Error("请输入十一位的手机号"));
      }  
      else {
        if (this.ruleForm.validateNumber !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }else if(value.length < 6){
         callback(new Error('密码长度最小6位'));
             }
        else {
        callback();
      }
    };
    return {
      ruleForm: {
      number: "",
      checkPass: "",
     
      },
      rules: {
        number: [{ validator: validateNumber, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert("正在登录，请稍候");
          
          this.$router.push({path:'/First/'})

        } else {
         confirm("请把信息输入完整");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //  created:{
        //  Axios.post('http://localhost:3000/register', data)
    //   .then(res => {
        // console.log(res.data)
        // if (res.data.code === 0) {
        //   this.$message({
            // showClose: true,
            // message: '注册成功',
            // type: 'success'
        //   })
        //   router.push({name: 'Login'})
        // } else {
        //   this.$message({
            // showClose: true,
            // message: '注册失败',
            // type: 'error'
        //   })
        // }
    //   })
    //  }
  },

  
};
//     Axios.post('http://localhost:3000/register', data)
// .then(res => {
//   console.log(res.data)
//   if (res.data.code === 0) {
//     this.$message({
//       showClose: true,
//       message: '注册成功',
//       type: 'success'
//     })
//     router.push({name: 'Login'})
//   } else {
//     this.$message({
//       showClose: true,
//       message: '注册失败',
//       type: 'error'
//     })
//   }
// })
</script>

<style scoped>
.demo-ruleForm {
  /* background-color: aqua; */
  margin-top: 200px;
}
.ddd{
  margin-top: 50px;
  color: white;
  text-align: center;
  font-size: 20px;
}
 video {
     position: fixed;
     right: 0;
     bottom: 0;
     min-width: 100%;
     min-height: 100%;
     width: auto;
     height: auto;
     z-index: -999;
 }
.aaa{
    width: 270px;
}
.btn{margin-left: 70px;}
</style>






