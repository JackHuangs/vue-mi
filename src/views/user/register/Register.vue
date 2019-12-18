<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="16" class="register">
        <img src="~assets/images/common/logo.png" alt @click="toIndex" />
        <h2>注册小米账号</h2>
        <register-form />
      </el-col>
    </el-row>
    <user-footer />
  </div>
</template>

<script>
import RegisterForm from "views/user/components/RegisterForm";
import UserFooter from "views/user/components/UserFooter";
import { myMixin } from "mixins/myMixin";

export default {
  mixins: [myMixin],
  components: {
    RegisterForm,
    UserFooter
  },
  mounted() {
    window.document.body.style.backgroundColor = "#f9f9f9";
  }
};
</script>

<style scoped>
.register {
  background: #fff;
  text-align: center;
  padding-bottom: 50px;
}

.register img {
  width: 50px;
  height: 50px;
  cursor: pointer;
}

.register h2 {
  font-weight: normal;
  font-size: 30px;
  margin-top: 30px;
}
</style>
