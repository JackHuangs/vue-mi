<template>
  <div class="side-bar-right" @mouseover="sideGoodShow" @mouseout="sideGoodHide">
    <div
      v-for="(item, index) in this.$store.state.sideBarGoods"
      :key="index"
      class="side-bar-right-item"
    >
      <div>
        <img :src="item.image" :alt="item.title" />
      </div>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  methods: {
    sideGoodShow() {
      this.$store.commit("sideGoodShow");
    },
    sideGoodHide() {
      this.$store.commit("sideGoodHide");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side-bar-right {
  background: #fff;
  padding: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 1;
  overflow: hidden;
  font-size: 13px;
}

.side-bar-right-item {
  display: flex;
  align-items: center;
  width: 25%;
  height: 16%;
  flex: 1;
  min-height: 16%;
  min-width: 25%;
  max-width: 25%;
  max-height: 16%;
}

.side-bar-right-item img {
  margin-right: 20px;
}
</style>
