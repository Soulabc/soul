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
      <el-form-item label="密码" prop="pass">
        <el-input type="password" class="aaa" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" class="aaa" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
     <el-form-item label="年龄" prop="age">
    <el-input class="aaa" v-model.number="ruleForm.age"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="Email">
        <el-input type="Email" class="aaa" v-model="ruleForm.Email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="ccc" type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <video width="100%" height="800px" :src="'/static/img/soul.mp4'" muted loop autoplay></video>
  </div>
</template>

<script>
export default {
  name: "Reg1",
  data() {
    var checkAge = (rule, value, callback) => {
       if (!value) {
          return callback(new Error('年龄不能为空'));
        }
      setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value >50) {
              callback(new Error('年纪太大了，不适合玩此软件'));
            } else {
              callback();
            }
          }
        }, 1000);
    };
     var validateNumber = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else if (!/^1[0-9]{10}$/.test(value)) {
        callback(new Error("请输入十一位的手机号"));
      }
       else {
        if (this.ruleForm.validateNumber !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }else if(value.length < 6){
         callback(new Error('密码长度最小6位'));
             } 
      else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
     var validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      }else if (
        !/^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})$/.test(
          value
        )
      ) {
        callback(new Error("请输入带有@xx.com的邮箱"));
      } else {
        if (this.ruleForm.validateEmail !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {

      ruleForm: {
        number:"",
        pass: "",
        checkPass: "",
        age: '',
        Email:"",
      },
      rules: {
            number: [{ validator: validateNumber, trigger: "blur" }],
        Email: [{ validator: validateEmail, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('请稍候，正在跳转登录');
              this.$router.push({path:'/Log/'})

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
   
  },

};
</script>

<style scoped>
form {
  /* background-color: palegreen; */
  margin-top: 150px;
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
 .ccc{
     margin-left: 50px;
 }
</style>
