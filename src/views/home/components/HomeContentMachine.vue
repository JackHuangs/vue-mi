<template>
  <home-content-box>
    <p slot="title">家电</p>
    <div slot="func" class="machine-cate">
      <ul>
        <li
          v-for="(item, index) in machineTag"
          :key="index"
          :class="{active: index===tagCurrent}"
          @mouseover="machineCateShow(index)"
        >{{item}}</li>
      </ul>
    </div>
    <div slot="center" class="machine-list">
      <el-row :gutter="10">
        <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
          <el-row>
            <el-col :span="24" class="machine-list-recommend">
              <img src="~assets/images/home/machine1.png" alt width="100%" height="305px" />
            </el-col>
            <el-col :span="24" class="machine-list-recommend">
              <img src="~assets/images/home/machine3.png" alt width="100%" height="305px" />
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="19" :sm="19" :md="19" :lg="19" :xl="19">
          <el-row :gutter="10">
            <el-col
              :xs="6"
              :sm="6"
              :md="6"
              :lg="6"
              :xl="6"
              v-for="(item, index) in machineArr"
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
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
              <el-row class="machine-more">
                <el-col :span="24" class="machine-more-item">
                  <div>
                    <p>Air 13.3'' 2019款</p>
                    <p style="margin-top: 10px;color: #ff6700">4499元起</p>
                  </div>
                  <div>
                    <img src="~assets/images/home/machine5.png" alt width="80px" height="80px" />
                  </div>
                </el-col>
                <el-col :span="24" class="machine-more-item">
                  <div>
                    <p style="font-size: 18px">浏览更多</p>
                    <p style="margin-top: 10px;color: #757575">热门</p>
                  </div>
                  <div>
                    <img
                      src="~assets/images/common/right-arrow-color.png"
                      alt
                      width="50px"
                      height="50px"
                    />
                  </div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <img src="~assets/images/home/machine-bottom.jpg" alt slot="ad" />
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
      machineTag: ["热门", "电视影音"],
      tagCurrent: 0,
      machineArr: [],
      machineHotArr: [
        {
          title: "米兔折叠婴儿推车 灰色",
          desc: "出发去向往的地方",
          price: 628,
          originalPrice: 699,
          image: require("assets/images/home/machine2.png")
        },
        {
          title: "米兔折叠婴儿推车 灰色",
          desc: "出发去向往的地方",
          price: 628,
          originalPrice: 699,
          image: require("assets/images/home/machine2.png")
        },
        {
          title: "米兔折叠婴儿推车 灰色",
          desc: "出发去向往的地方",
          price: 628,
          originalPrice: 699,
          image: require("assets/images/home/machine2.png")
        },
        {
          title: "米兔折叠婴儿推车 灰色",
          desc: "出发去向往的地方",
          price: 628,
          originalPrice: 699,
          image: require("assets/images/home/machine2.png")
        },
        {
          title: "米兔折叠婴儿推车 灰色",
          desc: "出发去向往的地方",
          price: 628,
          originalPrice: 699,
          image: require("assets/images/home/machine2.png")
        },
        {
          title: "米兔折叠婴儿推车 灰色",
          desc: "出发去向往的地方",
          price: 628,
          originalPrice: 699,
          image: require("assets/images/home/machine2.png")
        },
        {
          title: "米兔折叠婴儿推车 灰色",
          desc: "出发去向往的地方",
          price: 628,
          originalPrice: 699,
          image: require("assets/images/home/machine2.png")
        }
      ],
      machineAudioArr: [
        {
          title: "米兔折叠婴儿推车 灰色",
          desc: "出发去向往的地方",
          price: 628,
          originalPrice: 699,
          image: require("assets/images/home/machine4.png")
        },
        {
          title: "米兔折叠婴儿推车 灰色",
          desc: "出发去向往的地方",
          price: 628,
          originalPrice: 699,
          image: require("assets/images/home/machine4.png")
        },
        {
          title: "米兔折叠婴儿推车 灰色",
          desc: "出发去向往的地方",
          price: 628,
          originalPrice: 699,
          image: require("assets/images/home/machine4.png")
        },
        {
          title: "米兔折叠婴儿推车 灰色",
          desc: "出发去向往的地方",
          price: 628,
          originalPrice: 699,
          image: require("assets/images/home/machine4.png")
        },
        {
          title: "米兔折叠婴儿推车 灰色",
          desc: "出发去向往的地方",
          price: 628,
          originalPrice: 699,
          image: require("assets/images/home/machine4.png")
        },
        {
          title: "米兔折叠婴儿推车 灰色",
          desc: "出发去向往的地方",
          price: 628,
          originalPrice: 699,
          image: require("assets/images/home/machine4.png")
        },
        {
          title: "米兔折叠婴儿推车 灰色",
          desc: "出发去向往的地方",
          price: 628,
          originalPrice: 699,
          image: require("assets/images/home/machine4.png")
        }
      ]
    };
  },
  created() {
    this.machineArr = this.machineHotArr;
  },
  methods: {
    machineCateShow(index) {
      this.tagCurrent = index;
      switch (index) {
        case 0:
          this.machineArr = this.machineHotArr;
          break;
        case 1:
          this.machineArr = this.machineAudioArr;
          break;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.machine-cate ul li {
  display: inline;
  margin-left: 30px;
  padding-bottom: 5px;
}

.active {
  color: #ff6700;
  border-bottom: 2px solid #ff6700;
}

.machine-list {
  height: 620px;
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

.machine-list-recommend {
  margin-bottom: 10px;
}

.machine-more > div {
  margin-bottom: 15px;
  height: 145px;
  background: #fff;
}

.machine-more-item {
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 0 20px;
}

.machine-more-item > div {
  flex: 1;
}

.machine-more-item > div:last-child {
  text-align: center;
}
</style>
