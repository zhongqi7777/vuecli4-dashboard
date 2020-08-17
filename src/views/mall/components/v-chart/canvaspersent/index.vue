<template>
  <div ref="canvasring"></div>
</template>

<script>
import { drawRing } from "./drawcanvas";
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  watch: {
    // flowData(val) {
    // }
  },
  props: ["barColor", "progress", "city"],
  components: {},
  data: function() {
    return {};
  },
  computed: {
    //...mapState([""])
  },
  mounted() {
    drawRing({
      parent: this.$refs.canvasring,
      animated: true,
      width: 190,
      radius: 75,
      arc: 20,
      perent: this.progress,
      city: this.city,
      cityColor: "#F0F0F2",
      color: ["RGBA(26, 39, 61, 1)", this.barColor],
      textColor: "RGBA(255, 255, 255, 1)",
      textSize: "33px",
      textCitySize: "20px",
      after: function() {
        //console.timeEnd("用时");
      },
    });

    //window.removeEventListener("resize", this.handleCanvasWidth);
    // window.onresize = () => {
    //   return (() => {
    //     this.handleCanvasWidth();
    //   })();
    // };
    // this.handleCanvasWidth();
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed: function() {},
  methods: {
    //...mapActions([""]),
    handleCanvasWidth() {
      //防抖time（非立即执行）
      this.$dt.start({
        type: "debounce",
        immediate: false,
        time: 1000,
        success: () => {
          console.log("window ssize changed");
        },
      });
    },
  },
};
</script>

<style lang="scss"></style>
