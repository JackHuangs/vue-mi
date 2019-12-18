<template>
  <div>
    <div class="login-header">
      <el-row>
        <el-col :span="5" :offset="2" class="login-logo">
          <img src="~assets/images/common/logo.png" alt="" @click="toIndex" />
          <div class="logo-title">
            <h2>小米商城</h2>
            <p>让每个人都能享受科技的乐趣</p>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="login-form">
      <login-form />
    </div>
    <user-footer />
  </div>
</template>

<script>
import { myMixin } from "mixins/myMixin";
import LoginForm from "views/user/components/LoginForm";
import UserFooter from "views/user/components/UserFooter";

export default {
  mixins: [myMixin],
  components: {
    LoginForm,
    UserFooter
  }
};
</script>

<style scoped>
.login-header {
  padding: 20px 0;
}

.login-logo {
  display: flex;
}

.login-logo img {
  width: 50px;
  height: 50px;
  cursor: pointer;
}

.logo-title {
  margin-left: 20px;
}

.logo-title h2 {
  font-size: 30px;
  font-weight: normal;
}

.logo-title p {
  font-size: 12px;
  margin-top: 5px;
  color: #757575;
}

.login-form {
  width: 100%;
  height: 450px;
  background: url(~assets/images/user/user-login-bg.jpg) no-repeat;
  background-size: cover;
  background-position: 70%;
  position: relative;
}
</style>
