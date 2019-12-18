<template>
  <div class="user-footer">
    <ul>
      <li>简体</li>
      <li>繁体</li>
      <li>English</li>
      <li>常见问题</li>
    </ul>
    <p>
      小米公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.user-footer {
  text-align: center;
  padding: 20px 0;
  font-size: 14px;
  color: #757575;
}

.user-footer ul li {
  display: inline-block;
  border-right: 1px solid #757575;
  padding: 0 10px;
}

.user-footer ul li:last-child {
  border-right: none;
}

.user-footer p {
  margin-top: 20px;
}
</style>
