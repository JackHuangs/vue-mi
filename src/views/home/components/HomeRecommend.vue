<template>
  <div class="home-recommend">
    <el-row :gutter="15">
      <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
        <div class="recommend-list">
          <div v-for="(item, index) in recommendArr" :key="index" class="recommend-list-item">
            <img :src="item.image" alt />
            <div>{{item.title}}</div>
          </div>
        </div>
      </el-col>
      <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
        <img src="~assets/images/home/recommend1.jpg" alt />
      </el-col>
      <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
        <img src="~assets/images/home/recommend2.jpg" alt />
      </el-col>
      <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
        <img src="~assets/images/home/recommend3.jpg" alt />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      recommendArr: [
        { title: "小米秒杀", image: require("assets/images/home/time.png") },
        { title: "企业团购", image: require("assets/images/home/company.png") },
        { title: "F码通道", image: require("assets/images/home/code-f.png") },
        { title: "米粉卡", image: require("assets/images/home/mi-card.png") },
        { title: "以旧换新", image: require("assets/images/home/charge.png") },
        {
          title: "话费充值",
          image: require("assets/images/home/call-charge.png")
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-recommend {
  margin: 20px 0;
  padding: 0 60px;
  box-sizing: border-box;
}

.home-recommend img {
  width: 100%;
  height: 150px;
}

.recommend-list {
  background: #5f5750;
  color: #ccc;
  display: flex;
  padding: 0 10px;
  font-size: 12px;
  flex-wrap: wrap;
  text-align: center;
  height: 150px;
  box-sizing: border-box;
}

.recommend-list-item {
  flex: 1;
  width: 33%;
  min-width: 33%;
  max-width: 33%;
  margin: auto 0;
}

.recommend-list img {
  width: 25px;
  height: 25px;
  margin-bottom: 5px;
}
</style>
