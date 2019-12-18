<template>
  <div class="good-box" @click="showDetail">
    <div>
      <slot name="image"></slot>
    </div>
    <div>
      <slot name="title"></slot>
    </div>
    <div>
      <slot name="desc"></slot>
    </div>
    <div class="price">
      <span class="discount-price">
        <slot name="discount-price"></slot>
      </span>
      <span class="original-price">
        <slot name="original-price"></slot>
      </span>
    </div>
  </div>
</template>

<script>
import { getHomeProduct } from "network/home";

export default {
  name: "GoodBox",
  props: {
    productId: {
      type: String
    }
  },
  methods: {
    showDetail() {
      let id = this.productId;
      getHomeProduct({ id: id }).then(res => {
        this.$store.commit("setProductDetail", res);
        this.$router.push({
          name: `detail`,
          query: {
            id
          }
        });
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.discount-price {
  color: #f00;
  margin-right: 5px;
}

.original-price {
  color: #b0b0b0;
  text-decoration: line-through;
}
</style>
