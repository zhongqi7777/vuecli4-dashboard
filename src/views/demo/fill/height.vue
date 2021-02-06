<template>
  <div class="panel">
    <div class="inner1">
      <p>sfsfsf</p>
      <p>sfsfsf</p>
      <p>sfsfsf</p>
      <p>sfsfsf</p>
      <p>sfsfsf</p>
      <p>sfsfsf</p>
      <p>sfsfsf</p>

      <p>sfsfsf</p>
    </div>
    <div class="inner2">
      <p>下部分</p>
      <p>下部分</p>
      <p>下部分</p>
    </div>
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
.panel {
  background: aliceblue;
  overflow: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .inner1 {
    background: red;
    width: 100%;
    height: auto;
    // height: 300px;
    position: relative;
  }
  .inner2 {
    background: brown;
    width: 100%;
    height: inherit;
    position: relative;
  }

  //   /* 默认值。内容不会被修剪，会呈现在元素框之外 */
  // overflow: visible;

  // /* 内容会被修剪，并且其余内容不可见 */
  // overflow: hidden;

  // /* 内容会被修剪，浏览器会显示滚动条以便查看其余内容 */
  // overflow: scroll;

  // /* 由浏览器定夺，如果内容被修剪，就会显示滚动条 */
  // overflow: auto;

  // /* 规定从父元素继承overflow属性的值 */
  // overflow: inherit;
}
</style>
