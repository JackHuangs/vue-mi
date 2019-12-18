<template>
  <home-content-box>
    <p slot="title">小米团购</p>
    <div slot="center">
      <el-row :gutter="10" class="flash-item-box">
        <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" class="good-limit">
          <p style="color: #f00;font-size: 20px">闪购专场</p>
          <div class="el-icon-present" style="color: #f00; font-size: 60px;margin: 20px 0"></div>
          <time-down :endTime="endTime"></time-down>
        </el-col>
        <el-col
          :xs="5"
          :sm="5"
          :md="5"
          :lg="5"
          :xl="5"
          v-for="(item, index) in flashArr"
          :key="index"
        >
          <good-box class="flash-item">
            <img :src="item.image" alt slot="image" />
            <p slot="title">{{item.title}}</p>
            <p slot="desc" class="flash-desc">{{item.desc}}</p>
            <span slot="discount-price">{{item.price}}元</span>
            <span slot="original-price">{{item.originalPrice}}元</span>
          </good-box>
        </el-col>
      </el-row>
    </div>
    <img src="~assets/images/home/flash-bottom.jpg" alt slot="ad" />
  </home-content-box>
</template>

<script>
import TimeDown from "components/common/EndTime/TimeDown";

import HomeContentBox from "views/home/components/HomeContentBox";
import GoodBox from "components/contents/Good/GoodBox";

export default {
  name: "",
  props: {},
  components: {
    TimeDown,
    HomeContentBox,
    GoodBox
  },
  data() {
    return {
      flashArr: [
        {
          title: "米兔折叠婴儿推车 灰色",
          desc: "出发去向往的地方",
          price: 628,
          originalPrice: 699,
          image: require("assets/images/home/flash1.png")
        },
        {
          title: "米兔折叠婴儿推车 灰色",
          desc: "出发去向往的地方",
          price: 628,
          originalPrice: 699,
          image: require("assets/images/home/flash2.jpg")
        },
        {
          title: "米兔折叠婴儿推车 灰色",
          desc: "出发去向往的地方",
          price: 628,
          originalPrice: 699,
          image: require("assets/images/home/flash3.jpg")
        },
        {
          title: "米兔折叠婴儿推车 灰色",
          desc: "出发去向往的地方",
          price: 628,
          originalPrice: 699,
          image: require("assets/images/home/flash2.jpg")
        }
      ],
      endTime: "2020-01-01"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flash-item-box > div {
  height: 320px;
}
.flash-item {
  background: #fff;
  text-align: center;
  padding: 40px 0;
  font-size: 14px;
}

.flash-item img {
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
}

.flash-desc {
  color: #b0b0b0;
  padding: 10px 0 20px 0;
}

.good-limit {
  background: #f1eded;
  padding: 40px 0;
  text-align: center;
}
</style>
