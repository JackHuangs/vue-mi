export const myMixin = {
  methods: {
    toIndex() {
      this.$router.push("/");
    }
  }
};

export const test = {
  methods: {
    test() {
      this.$router.push("/login");
    }
  }
};
