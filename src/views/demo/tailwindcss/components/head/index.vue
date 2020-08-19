<template>
  <!-- <div
    class="head bg-fixed ..."
    style="background-image: url(./image/bg/default.png)"
  ></div> -->

  <!-- <div class="head"></div> -->

  <!-- <div class="head  bg-fixed bg-cover bg-center bg-no-repeat" style='background-image:url(./image/bg/default.png)'></div> -->

  <!-- <div class=" bg-center bg-no-repeat bg-left-top  h-24" style="background-image: url(./image/bg/default.png)"></div> -->
  <div class="head bg-local ..." style="background-image: url(static/img/default.ec45e794.png)"></div>
</template>

<script>
export default {
  watch: {
    // flowData(val) {
    // }
  },
  props: {
    // data: {
    //   type: Object,
    //   default: false
    // }
  },
  components: {},
  data: function() {
    return {};
  },
  computed: {
    //...mapState([""])
  },
  mounted() {},
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

<style lang="scss">
.head {
  height: 94px;
//   background-image:url("./image/bg/default.png")

//   background: url("./image/bg/default.png") no-repeat;
//   background-size: cover;
//   -webkit-background-size: cover;
//   -o-background-size: cover;
//   background-position: center 0;
}
</style>
