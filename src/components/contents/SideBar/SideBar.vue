<template>
  <div class="side-bar">
    <side-bar-left />
    <transition name="el-fade-in-linear">
      <side-bar-right v-show="this.$store.state.sideGoodCurrent" />
    </transition>
  </div>
</template>

<script>
import SideBarLeft from "components/contents/SideBar/SideBarLeft";
import SideBarRight from "components/contents/SideBar/SideBarRight";

export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {
    SideBarLeft,
    SideBarRight
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side-bar {
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
}
</style>
