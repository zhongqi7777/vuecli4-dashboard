<template>
  <div class="dashboard-body h-full">
    <vhead></vhead>

    <!-- <div class="grid grid-cols-3 gap-4">
      <div class="col-span-3 grid-content bg-red-600 ..."></div>
      <div class="col-span-2 grid-content bg-white ..."></div>
      <div class="col-span-1 grid-content bg-red-600 ..."></div>
      <div class="col-span-1 grid-content bg-white ..."></div>
      <div class="col-span-2 grid-content bg-red-600 ..."></div>
    </div> -->

    <!-- <div class="grid grid-cols-10 gap-4">
      <div class="col-span-1 grid-content bg-red-600 ..."></div>
      <div class="col-span-1 grid-content bg-white ..."></div>
      <div class="col-span-1 grid-content bg-red-600 ..."></div>
      <div class="col-span-1 grid-content bg-white ..."></div>
      <div class="col-span-1 grid-content bg-red-600 ..."></div>
    </div> -->

    <!-- <div class="grid grid-cols-10 gap-4">
      <div class="col-span-1 grid-content bg-red-600 ..."></div>
      <div class="col-span-1 grid-content bg-white ..."></div>
      <div class="col-span-1 grid-content bg-red-600 ..."></div>
      <div class="col-span-1 grid-content bg-white ..."></div>
      <div class="col-span-1 grid-content bg-red-600 ..."></div>
      <div class="col-span-1 grid-content bg-red-600 ..."></div>
      <div class="col-span-1 grid-content bg-white ..."></div>
      <div class="col-span-1 grid-content bg-red-600 ..."></div>
      <div class="col-span-1 grid-content bg-white ..."></div>
      <div class="col-span-1 grid-content bg-red-600 ..."></div>
    </div> -->

    <div class="grid grid-cols-12 gap-2">
      <div class="col-span-1 grid-content bg-red-600 ..."></div>
      <div class="col-span-1 grid-content bg-white ..."></div>
      <div class="col-span-1 grid-content bg-red-600 ..."></div>
      <div class="col-span-1 grid-content bg-white ..."></div>
      <div class="col-span-1 grid-content bg-red-600 ..."></div>
      <div class="col-span-1 grid-content bg-red-600 ..."></div>
      <div class="col-span-1 grid-content bg-white ..."></div>
      <div class="col-span-1 grid-content bg-red-600 ..."></div>
      <div class="col-span-1 grid-content bg-white ..."></div>
      <div class="col-span-1 grid-content bg-red-600 ..."></div>
      <div class="col-span-1 grid-content bg-red-600 ..."></div>
      <div class="col-span-1 grid-content bg-white ..."></div>
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
.dashboard-body {
  background: #000b23;

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
}
</style>
