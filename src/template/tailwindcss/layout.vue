<template>
  <div class="tailwindcss-layout h-full container">
    <p class="text-3xl ...">Container</p>
    <p class="text-lg mb-4">To center a container, use the .mx-auto utility:</p>

    <div class="container mx-auto bg-gray-400 h-64">
      <!-- ... -->
    </div>

    <p class="text-lg mb-4 mt-5">
      add horizontal padding, use the .px-{size} utilities:
    </p>

    <div class="container mx-auto px-4 bg-gray-400 h-64">
      <!-- ... -->
    </div>

    <p class="text-lg mb-4 mt-5">
      Responsive Variants
    </p>

    <div class="lg:container lg:mx-auto px-4 bg-gray-400 h-64">
      <!-- ... -->
    </div>

    <p class="text-3xl mt-6 ...">Box Sizing</p>
    <p class="text-lg mb-4">
      Include borders and padding
    </p>

    <div
      class="box-border h-20 w-32 p-4 border-4 border-gray-400 bg-gray-200 mb-4"
    >
      <div class="h-full w-full bg-gray-400"></div>
    </div>

    <p class="text-lg mb-4">
      Exclude borders and padding
    </p>

    <div
      class="box-content h-20 w-32 p-4 border-4 border-gray-400 bg-gray-200 mb-4"
    >
      <div class="h-full w-full bg-gray-400"></div>
    </div>

    <p class="text-lg mb-4">
      Responsive
    </p>

    <div
      class="box-border md:box-content h-20 w-32 p-4 border-4 border-gray-400 bg-gray-200 mb-4"
    >
      <div class="h-full w-full bg-gray-400"></div>
    </div>

    <p class="text-3xl mt-6 ...">Display</p>
    <p class="text-2xl ...">Block</p>
    <p class="text-lg mb-4">
      Use .block to create a block-level element.
    </p>

    <div class="bg-gray-200 p-4">
      <span class="block text-gray-700 text-center bg-gray-400 px-4 py-2"
        >1</span
      >
      <span class="block text-gray-700 text-center bg-gray-400 px-4 py-2 mt-2"
        >2</span
      >
      <span class="block text-gray-700 text-center bg-gray-400 px-4 py-2 mt-2"
        >3</span
      >
    </div>
  </div>
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
.tailwindcss-layout {
}
</style>
