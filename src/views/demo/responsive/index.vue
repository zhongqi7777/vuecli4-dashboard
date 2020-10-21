<template>
  <div class="resposive">
    <p></p>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
const Base64 = require("js-base64").Base64;

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
// 分辨率1920*1080
@media screen and (max-width: 1920px) {
  @import "./media/1920&1080.scss";
}

//分辨率1600*900
@media screen and (max-width: 1600px) {
  @import "./media/1600&900.scss";
}
</style>
