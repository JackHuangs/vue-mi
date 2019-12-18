<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="70px"
      label-position="left"
      class="login-form"
      status-icon
    >
      <ul class="login-type">
        <li style="color: #ff7500">账号登录</li>
        <li>扫码登录</li>
      </ul>
      <el-form-item label="手机号" prop="phone">
        <el-input v-model.number="ruleForm.phone" placeholder="请输入手机号/邮箱"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('ruleForm')">立即登录</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
      <el-form-item>
        <div class="login-tag">
          <div>手机短信登录/注册</div>
          <div class="login-help">
            <ul>
              <li>立即注册</li>
              <li>|</li>
              <li>忘记密码?</li>
            </ul>
          </div>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { userLogin } from "network/user";

export default {
  data() {
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      } else {
        const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的手机号"));
        }
      }
    };
    return {
      ruleForm: {
        phone: "",
        pass: ""
      },
      rules: {
        phone: [{ validator: checkPhone, trigger: "blur" }],
        pass: [{ required: true, message: "请输入您的密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let userInfo = {};
          userInfo.phone = this.ruleForm.phone;
          userInfo.password = this.ruleForm.pass;

          try {
            const res = await userLogin(userInfo);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("phone", this.ruleForm.phone);
            this.$message({
              duration: 1000,
              message: "登录成功",
              type: "success"
            });
            setTimeout(time => {
              this.$router.replace("/");
            }, 1000);
          } catch (err) {
            console.log(err);
          }
        } else {
          console.log("fail");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.login-form {
  background: #fff;
  position: absolute;
  top: 10%;
  width: 500px;
  right: 2%;
  padding: 20px;
}

.login-type {
  padding-bottom: 40px;
  text-align: center;
}

.login-type li {
  display: inline-block;
  border-right: 2px solid #ccc;
  font-size: 25px;
  width: 40%;
}

.login-type li:last-child {
  border-right: none;
}

.login-tag {
  display: flex;
  justify-content: space-between;
  color: #ff7500;
}

.login-help li {
  display: inline-block;
  color: #757575;
  padding: 0 2px;
}
</style>
