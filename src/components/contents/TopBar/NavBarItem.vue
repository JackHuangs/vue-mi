<template>
  <div class="nav-bar-item">
    <top-bar>
      <div slot="left" class="nav-logo">
        <img src="~assets/images/common/logo.png" alt @click="toIndex" />
      </div>

      <div slot="center" class="nav-list" @mouseleave="hideNav">
        <div
          v-for="(item, index) in navArr"
          :key="index"
          @mouseenter="showNav($event, index)"
          :data-id="item._id"
          :class="{ activei: navCurrent === index }"
        >{{ item.name }}</div>
        <div>
          <a href="http://www.xiaomi.cn/" target="_blank">社区</a>
        </div>
        <div>
          <a href="https://www.mi.com/service/" target="_blank">服务</a>
        </div>
      </div>

      <div slot="right" class="nav-search">
        <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="searchContent"></el-input>
      </div>
    </top-bar>
  </div>
</template>

<script>
import TopBar from "components/contents/TopBar/TopBar";
import { myMixin } from "mixins/myMixin";
import { getHomeCate } from "network/home";

export default {
  name: "",
  mixins: [myMixin],
  data() {
    return {
      navItem: [
        "小米手机",
        "Redmi红米",
        "电视",
        "笔记本",
        "家电",
        "路由器",
        "智能硬件"
      ],
      navArr: [],
      searchContent: "",
      navCurrent: -1
    };
  },
  components: {
    TopBar
  },
  props: {},
  created() {
    this.getHomeCate();
  },
  methods: {
    showNav(e, index) {
      let payload = {};
      payload.index = index;
      payload.id = e.srcElement.dataset.id;
      this.$store.dispatch("getNavProduct");
      this.$store.commit("navGoodShow", payload);
      this.navCurrent = index;
    },
    hideNav() {
      this.$store.commit("navGoodHide");
      this.navCurrent = -1;
    },
    getHomeCate() {
      getHomeCate().then(res => {
        let navArr = res.filter(obj => {
          return obj.fatherId != 0;
        });
        this.navArr = navArr;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #000;
}

a:hover {
  color: #f00;
}
.nav-bar-item {
  height: 96px;
}

.nav-logo {
  width: 20%;
}

.nav-logo img {
  cursor: pointer;
}

.nav-list {
  width: 60%;
  display: flex;
}

.nav-search {
  width: 20%;
}

.nav-list > div {
  padding: 40px 20px 40px 0;
}

.active {
  color: #f00;
}
</style>
