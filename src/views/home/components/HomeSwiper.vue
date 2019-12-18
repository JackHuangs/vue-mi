<template>
  <div class="home-swiper">
    <el-carousel trigger="click" height="480px" arrow="always">
      <el-carousel-item v-for="item in swiperImg" :key="item.id">
        <img :src="item.image" alt />
      </el-carousel-item>
    </el-carousel>
    <side-bar />
  </div>
</template>

<script>
import SideBar from "components/contents/SideBar/SideBar";
export default {
  name: "",
  props: {
    swiperImg: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    SideBar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-swiper {
  margin: 0 60px;
  position: relative;
  height: 480px;
}

.home-swiper img {
  width: 100%;
  height: 100%;
}

.home-swiper >>> .el-carousel__indicators,
.el-carousel__arrow--left,
.el-carousel__arrow--right {
  z-index: 10;
}

.home-swiper >>> .el-carousel__indicators {
  left: 60%;
}

.home-swiper >>> .el-carousel__arrow--left {
  left: 22%;
}
</style>
