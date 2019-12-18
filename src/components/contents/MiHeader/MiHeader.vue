<template>
  <div>
    <top-bar-item />
    <nav-bar-item />
    <transition name="el-zoom-in-top">
      <home-nav-good :goods="this.$store.state.goodArr" v-show="this.$store.state.navGoodCurrent" />
    </transition>
  </div>
</template>

<script>
import TopBarItem from "components/contents/TopBar/TopBarItem";
import NavBarItem from "components/contents/TopBar/NavBarItem";
import HomeNavGood from "views/home/components/HomeNavGood";

export default {
  components: {
    TopBarItem,
    NavBarItem,
    HomeNavGood
  }
};
</script>

<style scoped>
</style>