<template>
  <div>
    <!-- <div>
      <form action>
        <ul class="list">
          <li>
            用户名
            <input type="text" placeholder="请设置用户名" class="input" />
            <br />
            <span>{{}}</span>
            <br />
          </li>
          <li>
            设置密码
            <input type="password" placeholder="请设置登录密码" class="input" />
            <br />
            <span>{{}}</span>
            <br />
          </li>
          <li>
            确认密码
            <input type="password" class="input" placeholder="请确认登录密码" />
            <br />
            <span>{{}}</span>
            <br />
          </li>
          <li>
            性别
            <input type="radio" name="gender" />男
            <input type="radio" name="gender" />女
          </li>
          <li>
            邮箱
            <input type="email" class="input" placeholder="请输入邮箱" />
            <br />
            <span>{{}}</span>
            <br />
          </li>
        </ul>
        <button id="btn" @click="fn()">立即注册</button>
        <button id="btn1">取消注册</button>
      </form>
    </div>-->
    <!-- 
    <form action :model="test1" method="post" id="test1" enctype="multipart/form-data">
    
      <input type="text" name="test_number" id="test_number" v-model="test1.test_number" />
      <input type="text" v-model="test1.group_number" placeholder="group_number 1" />
      <input type="text" v-model="test1.user_id" placeholder="user_id 1" />
      <input type="text" v-model="test1.group_number" placeholder="group_number 2" />
      <input type="text" v-model="test1.user_id" placeholder="user_id 2" />
      <button v-on:click="submitList($event)" class="btn the-submit">submit</button>
    </form>-->
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
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
     <el-form-item label="年龄" prop="age">
    <el-input v-model.number="ruleForm.age"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="Email">
        <el-input type="Email" v-model="ruleForm.Email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Reg2",
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
      } else {
        if (this.ruleForm.validateNumber !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
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
            alert('请稍候，正在跳转首页');
              this.$router.push({path:'/First/'})

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
  // data: function () {
  //   return{

  //   }
  // data() {
  //   return {
  //     dataSet: {
  //       test_number: "",
  //       list: [
  //         {
  //           user_id: [],
  //           group_number: "",
  //         },
  //         {
  //           user_id: [],
  //           group_number: "",
  //         },
  //       ],
  //     },
  //   };
  // },
  // methods: {
  //   fn(e) {
  //     var register = getQueryVariable("register");
  //     var operation = $(e).attr("operation");
  //     var datas = $("form").serializeArray(); //获取整个from的name和value
  //     datas.push({ name: "register", value: register }); //个性数据进行填充增加上去
  //     datas.push({ name: "operation", value: operation });
  //     $.ajax({
  //       // 几个参数需要注意一下
  //       type: "POST", // 方法类型
  //       dataType: "json", // 预期服务器返回的数据类型
  //       url: "../goto/distribute",
  //       data: datas,
  //       async: true,
  //       success: function (result) {
  //         if (result.tag == 0) {
  //           window.location = result.url;
  //         }
  //       },
  //     });
  //   },
  //}
};
</script>

<style scoped>
/* * {
  margin: 0;
  padding: 0;
}
input {
  outline: none;
}
li {
  list-style: none;
}
.input {
  width: 200px;
  height: 38px;
  border-radius: 4px;
}
#btn {
  width: 100px;
  height: 30px;
  display: inline-block;
  margin: 70px 0 0 80px;
}
#btn1 {
  width: 100px;
  height: 30px;
  display: inline-block;

  margin: 70px 0px 0 60px;
}
.list {
  background-color: red;
  margin-top: 20%;
}
.list li {
  margin-left: 15%;
}
.list li input {
  margin-left: 10%;
}
.list li:nth-child(2) input {
  margin-left: 5%;
}
.list li:nth-child(3) input {
  margin-left: 5%;
}
.list li:nth-child(4) input {
  margin-left: 12%;
}
.list li:nth-child(5) input {
  margin-left: 14%;
}
.list li span {
  margin-left: 80px;
} */

form {
  background-color: palegreen;
  margin-top: 150px;
}

</style>