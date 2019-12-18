<template>
  <div class="top-bar-item">
    <top-bar>
      <div slot="left" class="item-left">
        <div v-for="(item, index) in linkArr" :key="index">
          <a v-if="item.url" :href="item.url" target="_blank">
            {{
            item.name
            }}
          </a>
          <a v-else href="#">
            <el-dropdown>
              <a href="#" class="el-dropdown-link">{{ item.name }}</a>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item class="mi-app-download">
                  <img src="~assets/images/common/download.png" alt />
                </el-dropdown-item>
                <el-dropdown-item>小米商城APP</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </a>
        </div>
      </div>

      <div slot="right" class="item-right">
        <div class="user-opt">
          <span v-if="!isLogin">
            <router-link to="/login">登录</router-link>
            <router-link to="/register">注册</router-link>
          </span>
          <span v-else>
            <a href="#">{{username}}</a>
            <a href="#" @click="loginOut">退出</a>
          </span>
          <span>
            <a href="#">消息通知</a>
          </span>
        </div>

        <div class="item-right-cart" @mouseenter="cartShow" @mouseleave="cartHide">
          <i class="el-icon-shopping-cart-1"></i>
          <span style="margin-right: 5px">购物车</span>
          <span>({{ cartAmount }})</span>
        </div>

        <transition name="el-zoom-in-top">
          <div class="cart-content" v-show="cartCurrent">
            <p>购物车中还没有商品，赶紧选购吧</p>
          </div>
        </transition>
      </div>
    </top-bar>
  </div>
</template>

<script>
import TopBar from "components/contents/TopBar/TopBar.vue";
import { getHomeLinks } from "network/home";

export default {
  name: "TopBarItem",
  data() {
    return {
      linkArr: [],
      cartAmount: 0,
      cartCurrent: false,
      isLogin: false,
      username: ""
    };
  },
  created() {
    this.getHomeLinks();
    this.getLoginStatus();
  },
  methods: {
    cartShow() {
      this.cartCurrent = true;
    },
    cartHide() {
      this.cartCurrent = false;
    },
    getHomeLinks() {
      getHomeLinks().then(res => {
        this.linkArr = res;
      });
    },
    getLoginStatus() {
      const loginToken = localStorage.getItem("token");
      if (loginToken) {
        this.isLogin = true;
        this.username = localStorage.getItem("phone");
      } else {
        this.isLogin = false;
      }
    },
    loginOut() {
      this.$confirm("是否退出登录?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        localStorage.clear();
        setTimeout(() => {
          this.$message({
            type: "success",
            message: "退出成功!"
          });
          this.getLoginStatus();
        }, 500);
      });
    }
  },
  components: {
    TopBar
  },
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #ccc;
  font-size: 12px;
}
a:hover {
  color: #fff;
}
.top-bar-item {
  background: #333333;
  height: 40px;
  line-height: 40px;
}

.top-bar-item > div {
  justify-content: space-between;
}

.item-left,
.item-right {
  display: flex;
}

.item-left > div {
  margin-right: 20px;
}

.mi-app-download img {
  width: 90px;
  height: 90px;
  vertical-align: middle;
}

.user-opt a {
  margin-left: 20px;
}

.item-right-cart {
  color: #ccc;
  margin-left: 20px;
  padding: 0 10px;
  font-size: 12px;
}

.item-right-cart i {
  font-size: 18px;
  margin-right: 5px;
}

.item-right-cart:hover {
  background: #fff;
  color: #ff6700;
}

.cart-content {
  position: absolute;
  top: 40px;
  right: 40px;
  width: 300px;
  height: 95px;
  background: #fff;
  z-index: 99;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  text-align: center;
}
</style>
