<template>
  <home-content-box>
    <p slot="title">视频</p>
    <div slot="func" class="phone-more">
      <div>查看全部</div>
      <img src="~assets/images/common/right-arrow-full.png" alt />
    </div>
    <div slot="center">
      <el-row :gutter="10">
        <el-col :span="6" v-for="(item, index) in videoArr" :key="index">
          <div class="video-item">
            <div>
              <img :src="item.images" alt width="100%" />
            </div>
            <div>{{item.title}}</div>
          </div>
        </el-col>
      </el-row>
    </div>
  </home-content-box>
</template>

<script>
import HomeContentBox from "views/home/components/HomeContentBox";
import GoodBox from "components/contents/Good/GoodBox";

export default {
  name: "",
  props: {},
  components: {
    HomeContentBox,
    GoodBox
  },
  data() {
    return {
      videoArr: [
        {
          title: "小米5G新品手机发布会",
          images: require("assets/images/home/video1.png")
        },
        {
          title: "小米5G新品手机发布会",
          images: require("assets/images/home/video2.png")
        },
        {
          title: "小米5G新品手机发布会",
          images: require("assets/images/home/video3.png")
        },
        {
          title: "小米5G新品手机发布会",
          images: require("assets/images/home/video4.png")
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.phone-more {
  display: flex;
  align-items: center;
}

.phone-more img {
  width: 23px;
  height: 23px;
  margin-left: 10px;
}

.video-item {
  background: #fff;
}

.video-item > div:last-child {
  padding: 30px 0 60px 0;
  text-align: center;
  font-size: 14px;
}
</style>
