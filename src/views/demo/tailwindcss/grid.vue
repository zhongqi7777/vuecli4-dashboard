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

    <div class="grid grid-cols-12 gap-2 mb-2">
      <div class="col-span-2 grid-content bg-gray-400  ..."></div>
      <div class="col-span-8 grid-content bg-gray-400 ..."></div>
      <div class="col-span-2 grid-content bg-gray-400 ..."></div>
    </div>

    <p class="text-3xl ...">分栏偏移</p>
    <p class="text-lg mb-4">
      支持偏移指定的栏数
    </p>

    <div class="grid grid-cols-12 gap-2 mb-2">
      <div class="col-start-7 col-span-6 grid-content bg-gray-400 ..."></div>
    </div>

    <div class="grid grid-cols-12 gap-2 mb-2">
      <div class="col-span-3 grid-content bg-gray-400 ..."></div>
      <div class="col-start-7 col-span-3 grid-content bg-gray-400 ..."></div>
    </div>

    <div class="grid grid-cols-12 gap-2 mb-2">
      <div class="col-start-4 col-span-3 grid-content bg-gray-400 ..."></div>
      <div class="col-start-11 col-span-3 grid-content bg-gray-400 ..."></div>
    </div>

    <div class="grid grid-cols-12 gap-2 mb-2">
      <div class="col-start-4 col-span-6 grid-content bg-gray-400 ..."></div>
    </div>

    <p class="text-3xl ...">对齐方式</p>
    <p class="text-lg mb-4">
      通过 flex 布局来对分栏进行灵活的对齐
    </p>
    <p class="text-2xl ...">Start</p>
    <div class="flex justify-start bg-gray-200 mb-2">
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
    </div>
    <p class="text-2xl ...">Center</p>
    <div class="flex justify-center bg-gray-200 mb-2">
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
    </div>
    <p class="text-2xl ...">End</p>
    <div class="flex justify-end bg-gray-200 mb-2">
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
    </div>

     <p class="text-2xl ...">End</p>
    <div class="flex justify-end bg-gray-200 mb-2">
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
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
