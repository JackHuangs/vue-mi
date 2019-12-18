<template>
  <div class="footer-about">
    <el-row :gutter="10">
      <el-col :span="2">
        <img src="~assets/images/common/logo.png" alt width="60%" />
      </el-col>
      <el-col :span="22">
        <div class="footer-link">
          <ul>
            <li v-for="(item, index) in linkArr" :key="index">{{item}}</li>
          </ul>
        </div>
        <div class="footer-license">
          <p>© mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2017]1530-131号</p>
          <p>（京）网械平台备字（2018）第00005号 互联网药品信息服务资格证 (京) -非经营性-2014-0090 营业执照 医疗器械公告</p>
          <p>增值电信业务许可证 网络食品经营备案（京）【2018】WLSPJYBAHF-12 食品经营许可证</p>
          <p>违法和不良信息举报电话：185-0130-1238 知识产权侵权投诉 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试</p>
        </div>
        <div class="footer-image">
          <el-row>
            <el-col :span="2">
              <img src="~assets/images/footer/truste.png" alt height="30px" />
            </el-col>
            <el-col :span="2">
              <img src="~assets/images/footer/v-logo-1.png" alt />
            </el-col>
            <el-col :span="2">
              <img src="~assets/images/footer/v-logo-2.png" alt />
            </el-col>
            <el-col :span="2">
              <img src="~assets/images/footer/v-logo-3.png" alt />
            </el-col>
            <el-col :span="2">
              <img src="~assets/images/footer/v-logo-4.png" alt />
            </el-col>
          </el-row>
        </div>
        <div class="footer-slogan">
          <img src="~assets/images/footer/slogan.png" alt />
        </div>
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
      linkArr: [
        "小米商城",
        "MIUI",
        "米家",
        "米聊",
        "多看",
        "游戏",
        "路由器",
        "米粉卡",
        "政企服务",
        "小米天猫店",
        "小米集团隐私政策",
        "小米公司儿童信息保护规则",
        "小米商城隐私蒸车",
        "小米商城用户协议",
        "问题反馈",
        "廉正举报",
        "诚信合规",
        "Select Location"
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer-about {
  padding: 30px 60px;
  background: #f5f5f5;
  font-size: 12px;
}

.footer-link ul li {
  display: inline-block;
  color: #757575;
  border-right: 1px solid #757575;
  padding: 0 5px;
  margin-bottom: 5px;
}

.footer-link ul li:first-child {
  padding-left: 0;
}

.footer-link ul li:last-child {
  border-right: none;
  padding-left: 0;
}

.footer-license {
  color: #b0b0b0;
  margin-bottom: 10px;
  line-height: 15px;
}

.footer-slogan {
  text-align: center;
  margin-top: 20px;
}
</style>
