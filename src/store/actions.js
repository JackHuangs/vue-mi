import { getHomeProduct } from "../network/home";

export default {
  getNavProduct(context) {
    getHomeProduct().then(res => {
      context.commit("showNavProduct", res);
    });
  }
};
