<template>
  <div class="home-content-side">
    <div>
      <i class="el-icon-phone"></i>
    </div>
    <div>
      <el-tooltip class="item" effect="dark" content="个人中心" placement="left">
        <i class="el-icon-user"></i>
      </el-tooltip>
    </div>
    <div>
      <el-tooltip class="item" effect="dark" content="售后服务" placement="left">
        <i class="el-icon-s-tools"></i>
      </el-tooltip>
    </div>
    <div>
      <el-tooltip class="item" effect="dark" content="人工客服" placement="left">
        <i class="el-icon-headset"></i>
      </el-tooltip>
    </div>
    <div>
      <el-tooltip class="item" effect="dark" content="购物车" placement="left">
        <i class="el-icon-shopping-cart-2"></i>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.home-content-side {
  position: fixed;
  right: 30px;
  top: 50%;
  border: 1px solid #f5f5f5;
  background: #fff;
}

.home-content-side > div {
  padding: 10px 4px;
  border-bottom: 1px solid #f5f5f5;
}

.home-content-side > div:last-child {
  border-bottom: none;
}

.home-content-side > div > i {
  font-size: 20px;
}
</style>