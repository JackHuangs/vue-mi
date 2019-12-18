<template>
  <div>
    <mi-header></mi-header>

    <div class="detail-content">
      <el-row :gutter="30">
        <el-col :span="11">
          <el-carousel indicator-position="outside" arrow="always" height="500px">
            <el-carousel-item v-for="(item, index) in detailImg" :key="index">
              <img :src="item.image" alt width="100%" />
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :span="13">
          <div class="detail-info">
            <h3>{{this.$store.state.productDetail.title}}</h3>
            <p class="detail-desc">{{this.$store.state.productDetail.desc}}</p>
            <p style="color: #f00;font-size: 14px">{{this.$store.state.productDetail.tag}}</p>
            <p
              style="color: #f00;padding: 20px 0;font-size: 20px"
            >{{this.$store.state.productDetail.price}}元</p>
          </div>
          <div class="detail-address">
            <p>
              <i class="el-icon-location-outline"></i>
              <span style="margin: 0 20px">广州广州市天河区棠下街道</span>
              <span style="color: #f00">修改</span>
            </p>
          </div>
          <div class="detail-version">
            <p>选择版本</p>
            <div class="detail-version-list">
              <div
                v-for="(item, index) in versionArr"
                :key="index"
                class="detail-version-item"
                @click="versionChoose(index)"
                :class="{ active: index === versionCurrent }"
              >
                <span>{{ item.version }}</span>
                <span style="margin-left: 40px;color: #ccc">{{ item.price }}元</span>
              </div>
            </div>
          </div>
          <div class="detail-version">
            <p>选择颜色</p>
            <div class="detail-version-list">
              <div
                v-for="(item, index) in colorArr"
                :key="index"
                class="detail-version-item"
                @click="colorChoose(index)"
                :class="{ active: index === colorCurrent }"
              >
                <img :src="item.images" alt />
                <span>{{ item.color }}</span>
              </div>
            </div>
          </div>
          <div class="detail-total">
            <div>
              <p>小米9 Pro 5G 12GB+256GB 钛银黑</p>
              <p>4099元</p>
            </div>
            <div>共计：4099元</div>
          </div>
          <div class="detail-purchase">
            <el-button type="warning">立即购买</el-button>
          </div>
        </el-col>
      </el-row>
    </div>

    <mi-footer></mi-footer>
  </div>
</template>

<script>
import MiHeader from "components/contents/MiHeader/MiHeader";
import MiFooter from "components/contents/MiFooter/MiFooter";

export default {
  components: {
    MiHeader,
    MiFooter
  },
  data() {
    return {
      detailImg: [
        { id: 1, image: require("assets/images/detail/xiaomi1.jpg") },
        { id: 1, image: require("assets/images/detail/xiaomi2.jpg") },
        { id: 1, image: require("assets/images/detail/xiaomi3.jpg") },
        { id: 1, image: require("assets/images/detail/xiaomi4.jpg") },
        { id: 1, image: require("assets/images/detail/xiaomi5.jpg") }
      ],
      versionArr: [
        { version: "8Gb + 128GB", price: 3699 },
        { version: "8Gb + 256GB", price: 3799 },
        { version: "12Gb + 256GB", price: 4099 },
        { version: "12Gb + 512GB", price: 4299 }
      ],
      colorArr: [
        {
          color: "钛银黑",
          images: require("assets/images/detail/xiaomi-color1.jpg")
        },
        {
          color: "梦之白",
          images: require("assets/images/detail/xiaomi-color2.jpg")
        }
      ],
      versionCurrent: -1,
      colorCurrent: -1,
      productArr: {}
    };
  },
  created() {
    this.productArr = this.$store.state.productDetail;
  },
  methods: {
    versionChoose(index) {
      this.versionCurrent = index;
    },
    colorChoose(index) {
      this.colorCurrent = index;
    }
  }
};
</script>

<style scoped>
.detail-content {
  padding: 20px 60px;
}

.detail-info {
  border-bottom: 1px solid #ccc;
}

.detail-info h3 {
  font-size: 24px;
  font-weight: normal;
  color: #212121;
}

.detail-desc {
  color: #b0b0b0;
  font-size: 14px;
  line-height: 20px;
  padding: 10px 0 20px 0;
}

.detail-version,
.detail-address,
.detail-total,
.detail-purchase {
  margin-top: 30px;
}

.detail-version-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.detail-version-item {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  width: 48%;
  padding: 12px 0;
  margin: 15px 5px 0 0;
}

.detail-version-item img {
  width: 20px;
  height: 20px;
  margin-right: 15px;
}

.active {
  border: 1px solid #ff6700;
  color: #ff6700;
}

.detail-address {
  background: #fafafa;
  border: 1px solid #ccc;
  padding: 30px 40px;
}

.detail-total {
  background: #f9f9fa;
  padding: 40px 30px;
}

.detail-total > div:first-child {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}

.detail-total > div:last-child {
  color: #f00;
  font-size: 20px;
  margin-top: 30px;
}

.detail-purchase button {
  padding: 15px 100px;
  background: #ff6700;
}
</style>
