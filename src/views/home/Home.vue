<template>
  <div class="home">
    <!-- header -->
    <div>
      <top-bar-item />
      <nav-bar-item />
      <transition name="el-zoom-in-top">
        <home-nav-good
          :goods="this.$store.state.goodArr"
          v-show="this.$store.state.navGoodCurrent"
        />
      </transition>
    </div>
    <!-- header -->
    <!-- main -->
    <div>
      <home-swiper :swiper-img="swiperImg" />
      <home-recommend />
      <div class="home-content">
        <home-content-flash />
        <home-content-phone />
        <home-content-machine />
        <home-content-video />
      </div>
    </div>
    <!-- main -->

    <footer-box />
    <footer-about />
    <home-content-side />
    <el-backtop></el-backtop>
  </div>
</template>

<script>
// @ is an alias to /src
import TopBarItem from "components/contents/TopBar/TopBarItem";
import NavBarItem from "components/contents/TopBar/NavBarItem";
import FooterBox from "components/contents/FooterBox/FooterBox";
import FooterAbout from "components/contents/FooterBox/FooterAbout";

import HomeSwiper from "views/home/components/HomeSwiper";
import HomeNavGood from "views/home/components/HomeNavGood";
import HomeRecommend from "views/home/components/HomeRecommend";
import HomeContentFlash from "views/home/components/HomeContentFlash";
import HomeContentPhone from "views/home/components/HomeContentPhone";
import HomeContentMachine from "views/home/components/HomeContentMachine";
import HomeContentVideo from "views/home/components/HomeContentVideo";
import HomeContentSide from "views/home/components/HomeContentSide";

export default {
  name: "home",
  components: {
    TopBarItem,
    NavBarItem,
    FooterBox,
    FooterAbout,
    HomeSwiper,
    HomeNavGood,
    HomeRecommend,
    HomeContentFlash,
    HomeContentPhone,
    HomeContentMachine,
    HomeContentVideo,
    HomeContentSide
  },
  mounted() {
    // this.$store.commit("navGoodChoose");
  },
  data() {
    return {
      swiperImg: [
        { id: 1, image: require("assets/images/home/banner1.jpg") },
        { id: 2, image: require("assets/images/home/banner2.jpg") },
        { id: 3, image: require("assets/images/home/banner3.jpg") },
        { id: 4, image: require("assets/images/home/banner4.jpg") }
      ]
    };
  }
};
</script>

<style scoped>
.home-content {
  background: #f5f5f5;
  overflow: hidden;
  padding: 0 60px;
}
</style>
