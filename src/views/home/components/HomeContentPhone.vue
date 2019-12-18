<template>
  <home-content-box>
    <p slot="title">手机</p>
    <div slot="func" class="phone-more">
      <div>查看全部</div>
      <img src="~assets/images/common/right-arrow-full.png" alt />
    </div>
    <div slot="center" class="phone-list">
      <el-row :gutter="10">
        <el-col :xs="4" :sm="6" :md="6" :lg="5" :xl="4">
          <img src="~assets/images/home/phone1.png" alt width="100%" height="620px" />
        </el-col>
        <el-col :xs="20" :sm="18" :md="18" :lg="19" :xl="20">
          <el-row :gutter="10">
            <el-col
              :xs="6"
              :sm="6"
              :md="6"
              :lg="6"
              :xl="6"
              v-for="(item, index) in phoneArr"
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
        </el-col>
      </el-row>
    </div>
    <img src="~assets/images/home/phone-bottom.jpg" alt slot="ad" />
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
      phoneArr: [
        {
          title: "米兔折叠婴儿推车 灰色",
          desc: "出发去向往的地方",
          price: 628,
          originalPrice: 699,
          image: require("assets/images/home/phone2.png")
        },
        {
          title: "米兔折叠婴儿推车 灰色",
          desc: "出发去向往的地方",
          price: 628,
          originalPrice: 699,
          image: require("assets/images/home/phone2.png")
        },
        {
          title: "米兔折叠婴儿推车 灰色",
          desc: "出发去向往的地方",
          price: 628,
          originalPrice: 699,
          image: require("assets/images/home/phone2.png")
        },
        {
          title: "米兔折叠婴儿推车 灰色",
          desc: "出发去向往的地方",
          price: 628,
          originalPrice: 699,
          image: require("assets/images/home/phone2.png")
        },
        {
          title: "米兔折叠婴儿推车 灰色",
          desc: "出发去向往的地方",
          price: 628,
          originalPrice: 699,
          image: require("assets/images/home/phone2.png")
        },
        {
          title: "米兔折叠婴儿推车 灰色",
          desc: "出发去向往的地方",
          price: 628,
          originalPrice: 699,
          image: require("assets/images/home/phone2.png")
        },
        {
          title: "米兔折叠婴儿推车 灰色",
          desc: "出发去向往的地方",
          price: 628,
          originalPrice: 699,
          image: require("assets/images/home/phone2.png")
        },
        {
          title: "米兔折叠婴儿推车 灰色",
          desc: "出发去向往的地方",
          price: 628,
          originalPrice: 699,
          image: require("assets/images/home/phone2.png")
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

.flash-item {
  background: #fff;
  text-align: center;
  padding: 30px 0;
  font-size: 14px;
  margin-bottom: 10px;
  height: 305px;
  box-sizing: border-box;
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

.phone-list {
  height: 620px;
}
</style>
