<template>
  <!-- <p>{{time}}</p> -->
  <div class="time-down">
    <div>
      {{day}}
      <span>天</span>
    </div>
    <div>
      {{hour}}
      <span>时</span>
    </div>
    <div>
      {{minute}}
      <span>分</span>
    </div>
    <div>
      {{second}}
      <span>秒</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
      time: 0,
      flag: false
    };
  },

  mounted() {
    let time = setInterval(() => {
      if (this.flag == true) {
        clearInterval(time);
      }
      this.timeDown();
    }, 1000);
  },

  props: {
    endTime: {
      type: String
    }
  },

  methods: {
    timeDown() {
      const endTime = new Date(this.endTime);
      const nowTime = new Date();
      let leftTime = parseInt((endTime.getTime() - nowTime.getTime()) / 1000);
      let d = parseInt(leftTime / (24 * 60 * 60));
      let h = this.formate(parseInt((leftTime / (60 * 60)) % 24));
      let m = this.formate(parseInt((leftTime / 60) % 60));
      let s = this.formate(parseInt(leftTime % 60));
      if (leftTime <= 0) {
        this.flag = true;
        this.$emit("time-end");
      }
      this.time = `${d}天${h}时${m}分${s}秒`; // 需要修改时间样式的话 ，比如需要什么30分钟倒计时，就只保留分和秒
      this.day = `${d}`;
      this.hour = `${h}`;
      this.minute = `${m}`;
      this.second = `${s}`;
    },
    formate(time) {
      if (time >= 10) {
        return time;
      } else {
        return `0${time}`;
      }
    }
  }
};
</script>
<style scoped>
.time-down {
  display: flex;
}

.time-down div {
  flex: 1;
  background: #605751;
  color: #fff;
  padding: 10px;
  margin-right: 5px;
}

.time-down span {
  font-size: 12px;
}
</style>