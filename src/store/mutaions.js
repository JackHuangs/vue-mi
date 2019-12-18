export default {
  showNavProduct(state, obj) {
    this.state.productArr = obj;
  },
  navGoodShow(state, payload) {
    this.state.navGoodCurrent = true;
    if (payload) {
      switch (payload.index) {
        case 0:
          this.state.goodArr = this.state.productArr.filter(obj => {
            return obj.cateId == payload.id;
          });
          break;
        case 1:
          this.state.goodArr = this.state.productArr.filter(obj => {
            return obj.cateId == payload.id;
          });
          break;
        case 2:
          this.state.goodArr = this.state.productArr.filter(obj => {
            return obj.cateId == payload.id;
          });
          break;
        case 3:
          this.state.goodArr = this.state.productArr.filter(obj => {
            return obj.cateId == payload.id;
          });
          break;
        case 4:
          this.state.goodArr = this.state.productArr.filter(obj => {
            return obj.cateId == payload.id;
          });
          break;
        case 5:
          this.state.goodArr = this.state.productArr.filter(obj => {
            return obj.cateId == payload.id;
          });
          break;
        case 6:
          this.state.goodArr = this.state.productArr.filter(obj => {
            return obj.cateId == payload.id;
          });
          break;
      }
    }
  },
  navGoodHide(state) {
    this.state.navGoodCurrent = false;
  },
  sideGoodShow(sate, payload) {
    switch (payload) {
      case 0:
        this.state.sideBarGoods = this.state.phoneArr;
        break;
      case 1:
        this.state.sideBarGoods = this.state.tvArr;
        break;
    }
    this.state.sideGoodCurrent = true;
  },
  sideGoodHide(state) {
    this.state.sideGoodCurrent = false;
  },
  setProductDetail(state, data) {
    this.state.productDetail = data;
  }
};
