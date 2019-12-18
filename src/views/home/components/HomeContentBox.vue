<template>
  <div class="home-content-box">
    <div class="top">
      <slot name="title"></slot>
      <slot name="func"></slot>
    </div>
    <slot name="center"></slot>
    <div class="bottom">
      <slot name="ad"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
}

.top p {
  font-size: 22px;
  color: #333;
  font-weight: 200;
}

.bottom {
  margin: 20px 0;
}

.bottom img {
  width: 100%;
}
</style>
