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
  props:["barColor","progress","city"],
  components: {},
  data: function() {
    return {};
  },
  computed: {
    //...mapState([""])
  },
  mounted() {
    drawRing({
      parent:this.$refs.canvasring,
      animated: true,
      width: 190,
      radius: 75,
      arc: 10,
      perent: this.progress,
      city:this.city,
      color: ["RGBA(26, 39, 61, 1)", this.barColor],
      textColor: "RGBA(255, 255, 255, 1)",
      textSize: "33px",
      after: function() {
        //console.timeEnd("用时");
      },
    });
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
  },
};
</script>

<style lang="scss"></style>
