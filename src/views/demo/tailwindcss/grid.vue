<template>
  <div class="grid-flex-layout h-full container">
    <p class="text-4xl ...">基础布局</p>
    <p class="text-2xl mb-4">使用单一分栏创建基础的栅格布局</p>
    <div class="grid grid-cols-1 mb-2">
      <div class="grid-content bg-gray-700 ..."></div>
    </div>

    <div class="grid grid-cols-2 gap-2 mb-2">
      <div class="col-span-1 grid-content bg-gray-400  ..."></div>
      <div class="col-span-1 grid-content bg-gray-500 ..."></div>
    </div>

    <div class="grid grid-cols-3 gap-2 mb-2">
      <div class="col-span-1 grid-content bg-gray-400  ..."></div>
      <div class="col-span-1 grid-content bg-gray-500 ..."></div>
      <div class="col-span-1 grid-content bg-gray-400  ..."></div>
    </div>
  </div>
</template>

<script>
import vhead from "./components/head/index";
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
  components: {
    vhead,
  },
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
.grid-flex-layout {
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
}
</style>
