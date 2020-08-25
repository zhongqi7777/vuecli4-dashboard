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

    <p class="text-2xl ...">
      Inline Block
    </p>
    <p class="text-lg mb-4">
      Use .inline-block to create an inline block-level element.
    </p>

    <div class="bg-gray-200 p-4">
      <span
        class="inline-block text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
        >1</span
      >
      <span
        class="inline-block text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
        >2</span
      >
      <span
        class="inline-block text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
        >3</span
      >
    </div>

    <p class="text-2xl ...">
      Inline
    </p>
    <p class="text-lg mb-4">
      Use .inline to create an inline block-level element.
    </p>

    <div class="bg-gray-200 p-4">
      <span class="inline text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
        >1</span
      >
      <span class="inline text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
        >2</span
      >
      <span class="inline text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
        >3</span
      >
    </div>

    <p class="text-3xl mt-6 ...">Flex</p>
    <p class="text-2xl ...">Row</p>
    <p class="text-lg mb-4">
      Use .flex-row to position flex items horizontally in the same direction as
      text:
    </p>

    <div class="flex flex-row bg-gray-200">
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
    </div>

    <p class="text-2xl ...">Row Reversed</p>
    <p class="text-lg mb-4">
      Use .flex-row-reverse to position flex items horizontally in the opposite
      direction:
    </p>

    <div class="flex flex-row-reverse bg-gray-200">
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
    </div>

    <p class="text-2xl ...">Column</p>
    <p class="text-lg mb-4">
      Use .flex-col to position flex items vertically:
    </p>

    <div class="flex flex-col bg-gray-200">
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
    </div>

    <p class="text-2xl ...">Column Reversed</p>
    <p class="text-lg mb-4">
      Use .flex-col-reverse to position flex items horizontally in the opposite
      direction:
    </p>

    <div class="flex flex-col-reverse bg-gray-200">
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
    </div>

    <p class="text-3xl mt-6 ...">Flex Wrap</p>
    <p class="text-2xl ...">Don't wrap</p>
    <p class="text-lg mb-4">
      Use .flex-no-wrap to prevent flex items from wrapping, causing inflexible
      items to overflow the container if necessary:
    </p>

    <div class="flex flex-no-wrap bg-gray-200">
      <div class="w-2/5 flex-none p-2">
        <div class="text-gray-700 text-center bg-gray-400 p-2">1</div>
      </div>
      <div class="w-2/5 flex-none p-2">
        <div class="text-gray-700 text-center bg-gray-400 p-2">2</div>
      </div>
      <div class="w-2/5 flex-none p-2">
        <div class="text-gray-700 text-center bg-gray-400 p-2">3</div>
      </div>
    </div>

    <p class="text-2xl ...">Wrap normally</p>
    <p class="text-lg mb-4">
      Use .flex-wrap to allow flex items to wrap:
    </p>

    <div class="flex flex-wrap bg-gray-200">
      <div class="w-2/5 p-2">
        <div class="text-gray-700 text-center bg-gray-400 p-2">1</div>
      </div>
      <div class="w-2/5 p-2">
        <div class="text-gray-700 text-center bg-gray-400 p-2">2</div>
      </div>
      <div class="w-2/5 p-2">
        <div class="text-gray-700 text-center bg-gray-400 p-2">3</div>
      </div>
    </div>

    <p class="text-2xl ...">Wrap reserved</p>
    <p class="text-lg mb-4">
      Use .flex-wrap to allow flex items to wrap:
    </p>

    <div class="flex flex-wrap-reverse bg-gray-200">
      <div class="w-2/5 p-2">
        <div class="text-gray-700 text-center bg-gray-400 p-2">1</div>
      </div>
      <div class="w-2/5 p-2">
        <div class="text-gray-700 text-center bg-gray-400 p-2">2</div>
      </div>
      <div class="w-2/5 p-2">
        <div class="text-gray-700 text-center bg-gray-400 p-2">3</div>
      </div>
    </div>

    <p class="text-3xl mt-6 ...">Aligin Items</p>
    <p class="text-2xl ...">stretch</p>
    <p class="text-lg mb-4">
      Use .items-stretch to stretch items to fill the flex container's cross
      axis:
    </p>

    <div class="flex items-stretch bg-gray-200 h-24">
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        1
      </div>
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        2
      </div>
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        3
      </div>
    </div>

    <p class="text-2xl ...">start</p>
    <p class="text-lg mb-4">
      Use .items-start to align items to the start of the flex container's cross
      axis:
    </p>

    <div class="flex items-start bg-gray-200 h-24">
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        1
      </div>
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        2
      </div>
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        3
      </div>
    </div>

    <p class="text-2xl ...">center</p>
    <p class="text-lg mb-4">
      Use .items-center to align items along the center of the flex container's
      cross axis:
    </p>

    <div class="flex items-center bg-gray-200 h-24">
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        1
      </div>
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        2
      </div>
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        3
      </div>
    </div>

    <p class="text-2xl ...">end</p>
    <p class="text-lg mb-4">
      Use .items-end to align items along the center of the flex container's
      cross axis:
    </p>

    <div class="flex items-end bg-gray-200 h-24">
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        1
      </div>
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        2
      </div>
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        3
      </div>
    </div>
    <p class="text-2xl ...">baseline</p>
    <p class="text-lg mb-4">
      Use .items-baseline to align items along the center of the flex
      container's cross axis:
    </p>

    <div class="flex items-baseline bg-gray-200 h-24">
      <div
        class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 text-base"
      >
        1
      </div>
      <div
        class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 text-2xl"
      >
        2
      </div>
      <div
        class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 text-lg"
      >
        3
      </div>
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
