KK 16:59:24
<template>
  <div>
    <!-- <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="number">
        <el-input type="number" class="aaa" v-model="ruleForm.number" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="checkPass">
        <el-input type="password" class="aaa" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')" class="btn">登录</el-button>
      </el-form-item>
    </el-form>
    <video width="100%" height="800px" :src="'/static/img/soul.mp4'" muted loop autoplay></video>-->



<!-- 4.0 -->
    <div class="login-container">
      <el-form
        autocomplete="on"
        :model="loginForm"
        :rules="loginRules"
        ref="loginForm"
        label-position="left"
        label-width="0px"
        class="card-box login-form"
      >
        <el-form-item prop="name">
          <el-input
            name="name"
          
            type="text"
            v-model="loginForm.name"
            autocomplete="on"
            placeholder="账号"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            name="password"
            :type="pwdType"
            @keyup.enter.native="handleLogin"
            v-model="loginForm.password"
            autocomplete="on"
            placeholder="密码"
          ></el-input>
          <span class="show-pwd" @click="showPwd"></span>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            style="width:100%;"
            :loading="loading"
            @click.native.prevent="handleLogin"
          >登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 5.0 -->
    
  </div>
</template>

<script>
export default {
  name: "Log",
 
  //4.0
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value.trim().length < 1) {
        callback(new Error("用户名不能为空"));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value.trim().length < 1) {
        callback(new Error("密码不能为空"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        name: "",
        password: "",
      },
      loginRules: {
        name: [
          { required: true, trigger: "blur", validator: validateUsername },
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePass },
        ],
      },
      loading: false,
      pwdType: "password",
    };
  },
  methods: {
    showPwd() {
      if (this.pwdType === "password") {
        this.pwdType = "";
      } else {
        this.pwdType = "password";
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("Login", this.loginForm)
            .then(() => {
              this.loading = false;
              this.$router.push({ path: "/" });
            })
            .catch((e) => {
              this.loading = false;
            });
        } else {
          confirm("请重新输入");
          return false;
        }
      });
    },
  },
};

//3.0
//   var validateNumber = (rule, value, callback) => {
//     if (value === "") {
//       callback(new Error("请输入账号"));
//     } else {
//       if (this.ruleForm.validateNumber !== "") {
//         this.$refs.ruleForm.validateField("checkPass");
//       }
//       callback();
//     }
//   };
//   var validatePass2 = (rule, value, callback) => {
//     if (value === "") {
//       callback(new Error("请输入密码"));
//     } else {
//       callback();
//     }
//   };
//   return {
//     ruleForm: {
//     number: "",
//     checkPass: "",

//     },
//     rules: {
//       number: [{ validator: validateNumber, trigger: "blur" }],
//       checkPass: [{ validator: validatePass2, trigger: "blur" }],
//     },
//   };
// },
// methods: {
//   submitForm(formName) {
//     this.$refs[formName].validate((valid) => {
//       if (valid) {
//         confirm("正在登录，请稍候");
//         this.$router.push({path:'/First/'})

//       } else {
//        confirm("请把信息输入完整");
//         return false;
//       }
//     });
//   },
//   resetForm(formName) {
//     this.$refs[formName].resetFields();
//   },

//2.0
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

//1.0
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
/* .demo-ruleForm {
  background-color: aqua; 
  margin-top: 200px;
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
.btn{margin-left: 70px;} */

/* 4.0 */
.login-container {
  margin-top: 150px;
}
</style>






