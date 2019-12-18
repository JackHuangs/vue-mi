<template>
  <div class="footer-box">
    <div class="footer-service">
      <div v-for="(item, index) in serviceArr" :key="index" class="service-item">
        <img :src="item.icon" alt />
        <p>{{item.title}}</p>
      </div>
    </div>

    <div class="footer-func">
      <el-row>
        <el-col :span="19">
          <el-row>
            <el-col :span="4" v-for="(item, index) in funcArr" :key="index">
              <p>{{item.title}}</p>
              <ul class="func-detail">
                <li v-for="(detail, index) in item.detail" :key="index">{{detail}}</li>
              </ul>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="5" class="footer-contact">
          <h4>400-100-5678</h4>
          <div class="contact-time">
            <p>周一到周日 8:00-18:00</p>
            <p>(仅收市话费)</p>
          </div>
          <el-button type="warning" plain class="el-icon-chat-dot-round">&nbsp;人工客服</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      serviceArr: [
        {
          title: "预约维修服务",
          icon: require("assets/images/common/service.png")
        },
        {
          title: "7天无理由退货",
          icon: require("assets/images/common/service.png")
        },
        {
          title: "15天免费换货",
          icon: require("assets/images/common/service.png")
        },
        {
          title: "满150元包邮",
          icon: require("assets/images/common/service.png")
        },
        {
          title: "520余家售后网点",
          icon: require("assets/images/common/service.png")
        }
      ],
      funcArr: [
        { title: "帮助中心", detail: ["账户管理", "购物管理", "订单操作"] },
        { title: "服务支持", detail: ["售后政策", "购物管理", "订单操作"] },
        { title: "线下门店", detail: ["小米之家", "购物管理", "订单操作"] },
        { title: "关于小米", detail: ["了解小米", "购物管理", "订单操作"] },
        { title: "关注我们", detail: ["新浪微博", "购物管理", "订单操作"] },
        { title: "特色服务", detail: ["F码通道", "购物管理", "订单操作"] }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer-box {
  padding: 0 60px;
}

.footer-service {
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 30px 0;
}

.service-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  border-right: 1px solid #ccc;
}

.service-item:last-child {
  border-right: none;
}

.service-item img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.footer-func {
  padding: 40px 0;
}

.func-detail {
  color: #757575;
  margin-top: 20px;
  font-size: 13px;
}

.func-detail li {
  line-height: 30px;
}

.footer-contact {
  text-align: center;
}

.footer-contact h4 {
  color: #f00;
  font-size: 20px;
  font-weight: normal;
}

.contact-time {
  color: #757575;
  font-size: 12px;
  margin: 10px 0;
  line-height: 20px;
}
</style>
