import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutaions";
import actions from "./actions";
import gutters from "./gutters";

import homeModule from "./modules/homeModule";

Vue.use(Vuex);

const state = {
  navGoodCurrent: false,
  sideGoodCurrent: false,
  goodArr: [],
  sideBarGoods: [],
  productArr: [],
  productDetail: {},
  phoneArr: [
    { title: "小米9 CC", image: require("assets/images/home/tv1.png") }
  ],
  tvArr: [{}]
};

export default new Vuex.Store({
  state,
  mutations,
  gutters,
  actions,
  modules: {
    homeModule
  }
});
