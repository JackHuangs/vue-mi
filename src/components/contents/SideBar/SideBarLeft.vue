<template>
  <div class="side-bar-left">
    <div
      v-for="(item, index) in sideBarArr"
      :key="index"
      class="side-bar-left-item"
      @mouseenter="sideBarShow(index)"
      @mouseleave="sideBarHide"
      :class="{ active: index === sideBarCurrent }"
    >
      <p>{{ item.name }}</p>
      <img src="~assets/images/common/right-arrow.png" alt />
    </div>
  </div>
</template>

<script>
import { getHomeCate } from "network/home";

export default {
  name: "",
  props: {},
  data() {
    return {
      sideBarArr: [],
      sideBarCurrent: -1
    };
  },
  created() {
    this.getSideCate();
  },
  methods: {
    sideBarShow(index) {
      this.sideBarCurrent = index;
      this.$store.commit("sideGoodShow", index);
    },
    sideBarHide() {
      this.sideBarCurrent = -1;
      this.$store.commit("sideGoodHide");
    },
    getSideCate() {
      getHomeCate().then(res => {
        this.sideBarArr = res.filter(obj => {
          return obj.fatherId == 0;
        });
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side-bar-left {
  background: rgba(105, 101, 101, 0.6);
  color: #fff;
  padding: 20px 0;
  font-size: 14px;
  width: 20%;
}

.side-bar-left-item {
  padding: 12px 15px 12px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.side-bar-left-item img {
  width: 20px;
  height: 20px;
  margin-left: 90px;
}

.active {
  background: #ff6700;
}
</style>
