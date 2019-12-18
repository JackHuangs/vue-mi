<template>
  <div class="home-nav-good" @mouseenter="showNav" @mouseleave="hideNav">
    <good-box
      v-for="(item, index) in goods"
      :key="index"
      class="home-nav-good-item"
      :productId="item._id"
    >
      <img src="~assets/images/home/xiaomi1.png" alt slot="image" />
      <p slot="title" class="good-title">{{ item.title }}</p>
      <p slot="discount-price" class="good-price">{{ item.price }}元起</p>
    </good-box>
  </div>
</template>

<script>
import GoodBox from "components/contents/Good/GoodBox";

export default {
  name: "HomeNavGood",
  components: {
    GoodBox
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    showNav() {
      this.$store.commit("navGoodShow");
    },
    hideNav() {
      this.$store.commit("navGoodHide");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-nav-good {
  display: flex;
  position: absolute;
  top: 136px;
  left: 0;
  right: 0;
  z-index: 99;
  background: #fff;
  border-top: 1px solid #ccc;
  padding: 20px 100px;
  text-align: center;
  font-size: 12px;
}

.home-nav-good-item {
  width: 16%;
  cursor: pointer;
}

.home-nav-good-item img {
  border-right: 1px solid #ccc;
}

.home-nav-good-item:last-child img {
  border-right: none;
}

.good-title {
  margin: 20px 0 8px 0;
}

.good-price {
  color: #f00;
}
</style>
