<template>
  <div class="grid-flex-layout h-full container">
    <p class="text-3xl ...">基础布局</p>
    <p class="text-lg mb-4">使用单一分栏创建基础的栅格布局</p>
    <div class="grid grid-cols-1 mb-2">
      <div class="grid-content bg-gray-300 ..."></div>
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

    <div class="grid grid-cols-4 gap-2 mb-2">
      <div class="col-span-1 grid-content bg-gray-400  ..."></div>
      <div class="col-span-1 grid-content bg-gray-500 ..."></div>
      <div class="col-span-1 grid-content bg-gray-400  ..."></div>
      <div class="col-span-1 grid-content bg-gray-500 ..."></div>
    </div>

    <div class="grid grid-cols-6 gap-2 mb-2">
      <div class="col-span-1 grid-content bg-gray-400  ..."></div>
      <div class="col-span-1 grid-content bg-gray-500 ..."></div>
      <div class="col-span-1 grid-content bg-gray-400  ..."></div>
      <div class="col-span-1 grid-content bg-gray-500 ..."></div>
      <div class="col-span-1 grid-content bg-gray-400  ..."></div>
      <div class="col-span-1 grid-content bg-gray-500 ..."></div>
    </div>

    <p class="text-3xl ...">分栏间隔</p>
    <p class="text-lg mb-4">分栏之间存在间隔</p>
    <div class="grid grid-cols-4 gap-4 mb-2">
      <div class="col-span-1 grid-content bg-gray-400  ..."></div>
      <div class="col-span-1 grid-content bg-gray-500 ..."></div>
      <div class="col-span-1 grid-content bg-gray-400  ..."></div>
      <div class="col-span-1 grid-content bg-gray-500 ..."></div>
    </div>

    <p class="text-3xl ...">混合布局</p>
    <p class="text-lg mb-4">
      通过基础的 1/12 分栏任意扩展组合形成较为复杂的混合布局
    </p>
    <div class="grid grid-cols-12 gap-2 mb-2">
      <div class="col-span-8 grid-content bg-gray-400  ..."></div>
      <div class="col-span-4 grid-content bg-gray-400 ..."></div>
    </div>

    <div class="grid grid-cols-12 gap-2 mb-2">
      <div class="col-span-4 grid-content bg-gray-400  ..."></div>
      <div class="col-span-4 grid-content bg-gray-400 ..."></div>
      <div class="col-span-2 grid-content bg-gray-400 ..."></div>
      <div class="col-span-2 grid-content bg-gray-400 ..."></div>
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
