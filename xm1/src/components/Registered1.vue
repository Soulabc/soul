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
      <el-form-item label="账号" prop="number">
        <el-input type="number" v-model="ruleForm.number" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')" class="btn">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: "Registered1",
  data() {

    var validateNumber = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        if (this.ruleForm.validateNumber !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
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
          confirm("正在登录，请稍候");
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
     created:{
      //    Axios.post('http://localhost:3000/register', data)
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
        //}
      //})
     }
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
  background-color: aqua;
  margin-top: 200px;
}
.btn{margin-left: 70px;}
</style>