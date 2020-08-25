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

    <p class="text-3xl mt-6 ...">Aligin content</p>
    <p class="text-2xl ...">start</p>
    <p class="text-lg mb-4">
      Use .content-start to pack lines in a flex container against the start of
      the cross axis:
    </p>

    <div class="flex content-start flex-wrap bg-gray-200 h-48">
      <div class="w-1/3 p-2">
        <div class="text-gray-700 text-center bg-gray-400 p-2">1</div>
      </div>
      <div class="w-1/3 p-2">
        <div class="text-gray-700 text-center bg-gray-400 p-2">2</div>
      </div>
      <div class="w-1/3 p-2">
        <div class="text-gray-700 text-center bg-gray-400 p-2">3</div>
      </div>
      <div class="w-1/3 p-2">
        <div class="text-gray-700 text-center bg-gray-400 p-2">4</div>
      </div>
      <div class="w-1/3 p-2">
        <div class="text-gray-700 text-center bg-gray-400 p-2">5</div>
      </div>
    </div>

    <p class="text-2xl ...">center</p>
    <p class="text-lg mb-4">
      Use .content-center to pack lines in a flex container against the start of
      the cross axis:
    </p>

    <div class="flex content-center flex-wrap bg-gray-200 h-48">
      <div class="w-1/3 p-2">
        <div class="text-gray-700 text-center bg-gray-400 p-2">1</div>
      </div>
      <div class="w-1/3 p-2">
        <div class="text-gray-700 text-center bg-gray-400 p-2">2</div>
      </div>
      <div class="w-1/3 p-2">
        <div class="text-gray-700 text-center bg-gray-400 p-2">3</div>
      </div>
      <div class="w-1/3 p-2">
        <div class="text-gray-700 text-center bg-gray-400 p-2">4</div>
      </div>
      <div class="w-1/3 p-2">
        <div class="text-gray-700 text-center bg-gray-400 p-2">5</div>
      </div>
    </div>

    <p class="text-2xl ...">end</p>
    <p class="text-lg mb-4">
      Use .content-end to pack lines in a flex container against the start of
      the cross axis:
    </p>

    <div class="flex content-end flex-wrap bg-gray-200 h-48">
      <div class="w-1/3 p-2">
        <div class="text-gray-700 text-center bg-gray-400 p-2">1</div>
      </div>
      <div class="w-1/3 p-2">
        <div class="text-gray-700 text-center bg-gray-400 p-2">2</div>
      </div>
      <div class="w-1/3 p-2">
        <div class="text-gray-700 text-center bg-gray-400 p-2">3</div>
      </div>
      <div class="w-1/3 p-2">
        <div class="text-gray-700 text-center bg-gray-400 p-2">4</div>
      </div>
      <div class="w-1/3 p-2">
        <div class="text-gray-700 text-center bg-gray-400 p-2">5</div>
      </div>
    </div>

    <p class="text-2xl ...">space between</p>
    <p class="text-lg mb-4">
      Use .content-end to pack lines in a flex container against the start of
      the cross axis:
    </p>

    <div class="flex content-between flex-wrap bg-gray-200 h-48">
      <div class="w-1/3 p-2">
        <div class="text-gray-700 text-center bg-gray-400 p-2">1</div>
      </div>
      <div class="w-1/3 p-2">
        <div class="text-gray-700 text-center bg-gray-400 p-2">2</div>
      </div>
      <div class="w-1/3 p-2">
        <div class="text-gray-700 text-center bg-gray-400 p-2">3</div>
      </div>
      <div class="w-1/3 p-2">
        <div class="text-gray-700 text-center bg-gray-400 p-2">4</div>
      </div>
      <div class="w-1/3 p-2">
        <div class="text-gray-700 text-center bg-gray-400 p-2">5</div>
      </div>
    </div>

    <p class="text-2xl ...">space around</p>
    <p class="text-lg mb-4">
      Use .content-end to pack lines in a flex container against the start of
      the cross axis:
    </p>

    <div class="flex content-around flex-wrap bg-gray-200 h-48">
      <div class="w-1/3 p-2">
        <div class="text-gray-700 text-center bg-gray-400 p-2">1</div>
      </div>
      <div class="w-1/3 p-2">
        <div class="text-gray-700 text-center bg-gray-400 p-2">2</div>
      </div>
      <div class="w-1/3 p-2">
        <div class="text-gray-700 text-center bg-gray-400 p-2">3</div>
      </div>
      <div class="w-1/3 p-2">
        <div class="text-gray-700 text-center bg-gray-400 p-2">4</div>
      </div>
      <div class="w-1/3 p-2">
        <div class="text-gray-700 text-center bg-gray-400 p-2">5</div>
      </div>
    </div>

    <p class="text-3xl mt-6 ...">Aligin self</p>
    <p class="text-2xl ...">auto</p>
    <p class="text-lg mb-4">
      Use .self-auto to align an item based on the value of the flex container's
      align-items property:
    </p>

    <div class="flex items-stretch bg-gray-200 h-24">
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        1
      </div>
      <div
        class="self-auto flex-1 text-gray-800 text-center bg-gray-500 px-4 py-2 m-2"
      >
        2
      </div>
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        3
      </div>
    </div>

    <p class="text-2xl ...">start</p>
    <p class="text-lg mb-4">
      Use .self-start to align an item based on the value of the flex
      container's align-items property:
    </p>

    <div class="flex items-stretch bg-gray-200 h-24">
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        1
      </div>
      <div
        class="self-start flex-1 text-gray-800 text-center bg-gray-500 px-4 py-2 m-2"
      >
        2
      </div>
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        3
      </div>
    </div>

    <p class="text-2xl ...">center</p>
    <p class="text-lg mb-4">
      Use .self-center to align an item based on the value of the flex
      container's align-items property:
    </p>

    <div class="flex items-stretch bg-gray-200 h-24">
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        1
      </div>
      <div
        class="self-center flex-1 text-gray-800 text-center bg-gray-500 px-4 py-2 m-2"
      >
        2
      </div>
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        3
      </div>
    </div>

    <p class="text-2xl ...">end</p>
    <p class="text-lg mb-4">
      Use .self-end to align an item based on the value of the flex container's
      align-items property:
    </p>

    <div class="flex items-stretch bg-gray-200 h-24">
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        1
      </div>
      <div
        class="self-end flex-1 text-gray-800 text-center bg-gray-500 px-4 py-2 m-2"
      >
        2
      </div>
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        3
      </div>
    </div>

    <p class="text-2xl ...">stretch</p>
    <p class="text-lg mb-4">
      Use .self-stretch to align an item based on the value of the flex
      container's align-items property:
    </p>

    <div class="flex items-start bg-gray-200 h-24">
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        1
      </div>
      <div
        class="self-stretch flex-1 text-gray-800 text-center bg-gray-500 px-4 py-2 m-2"
      >
        2
      </div>
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        3
      </div>
    </div>

    <p class="text-3xl mt-6 ...">Justify content</p>
    <p class="text-2xl ...">start</p>
    <p class="text-lg mb-4">
      Use .justify-start to justify items against the start of the flex
      container's main axis:
    </p>

    <div class="flex justify-start bg-gray-200">
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
    </div>

    <p class="text-2xl ...">center</p>
    <p class="text-lg mb-4">
      Use .justify-center to justify items against the start of the flex
      container's main axis:
    </p>

    <div class="flex justify-center bg-gray-200">
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
    </div>

    <p class="text-2xl ...">end</p>
    <p class="text-lg mb-4">
      Use .justify-end to justify items against the start of the flex
      container's main axis:
    </p>

    <div class="flex justify-end bg-gray-200">
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
    </div>

    <p class="text-2xl ...">space between</p>
    <p class="text-lg mb-4">
      Use .justify-between to justify items against the start of the flex
      container's main axis:
    </p>

    <div class="flex justify-between bg-gray-200">
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
    </div>

    <p class="text-2xl ...">space around</p>
    <p class="text-lg mb-4">
      Use .justify-around to justify items against the start of the flex
      container's main axis:
    </p>

    <div class="flex justify-around bg-gray-200">
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
    </div>

    <p class="text-2xl ...">space evenly</p>
    <p class="text-lg mb-4">
      Use .justify-evenly to justify items against the start of the flex
      container's main axis:
    </p>

    <div class="flex justify-evenly bg-gray-200">
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
    </div>

    <p class="text-3xl mt-6 ...">Flex</p>
    <p class="text-2xl ...">initial</p>
    <p class="text-lg mb-4">
      Use .flex-initial to allow a flex item to shrink but not grow, taking into
      account its initial size:
    </p>

    <div class="flex bg-gray-200">
      <div
        class="flex-initial text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
      >
        Short
      </div>
      <div
        class="flex-initial text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
      >
        Medium length Medium length Medium length Medium length Medium length
        Medium length Medium length Medium length
      </div>
    </div>

    <div class="flex bg-gray-200">
      <div
        class="flex-initial text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
      >
        Short
      </div>
      <div
        class="flex-initial text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
      >
        Medium length Medium length Medium length Medium length Medium length
        Medium length Medium length Medium length
      </div>
      <div
        class="flex-initial text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ad labore
        ipsam, aut rem quo repellat esse tempore id, quidem Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Qui ad labore ipsam, aut rem quo
        repellat esse tempore id, quidem Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Qui ad labore ipsam, aut rem quo repellat esse tempore
        id, quidem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
        ad labore ipsam, aut rem quo repellat esse tempore id, quidem Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Qui ad labore ipsam,
        aut rem quo repellat esse tempore id, quidem
      </div>
    </div>

    <p class="text-2xl ...">flex 1</p>
    <p class="text-lg mb-4">
      Use .flex-1 to allow a flex item to grow and shrink as needed, ignoring
      its initial size:
    </p>

    <div class="flex bg-gray-200">
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        Short
      </div>
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        Medium length
      </div>
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        Significantly larger amount of content Significantly larger amount of
        content Significantly larger amount of content Significantly larger
        amount of content Significantly larger amount of content Significantly
        larger amount of content
      </div>
    </div>

    <p class="text-2xl ...">atuo</p>
    <p class="text-lg mb-4">
      Use .atuo to allow a flex item to grow and shrink as needed, ignoring its
      initial size:
    </p>

    <div class="flex bg-gray-200">
      <div
        class="flex-auto text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
      >
        Short
      </div>
      <div
        class="flex-auto text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
      >
        Medium length
      </div>
      <div
        class="flex-auto text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
      >
        Significantly larger amount of content Significantly larger amount of
        content Significantly larger amount of content Significantly larger
        amount of content Significantly larger amount of content Significantly
        larger amount of content
      </div>
    </div>
    <p class="text-2xl ...">none</p>
    <p class="text-lg mb-4">
      Use .none to allow a flex item to grow and shrink as needed, ignoring its
      initial size:
    </p>

    <div class="flex bg-gray-200">
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        Item that can grow or shrink if needed
      </div>
      <div
        class="flex-none text-gray-800 text-center bg-gray-500 px-4 py-2 m-2"
      >
        Item that cannot grow or shrink Item that cannot grow or shrink Item
        that cannot grow or shrink Item that cannot grow or shrink Item that
        cannot grow or shrink Item that cannot grow or shrink Item that cannot
        grow or shrink
      </div>
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        Item that can grow or shrink if needed
      </div>
    </div>

    <p class="text-3xl mt-6 ...">Flex Grow</p>
    <p class="text-2xl ...">Grow</p>
    <p class="text-lg mb-4">
      Use .flex-grow to allow a flex item to grow to fill any available space:
    </p>
    <div class="flex bg-gray-200">
      <div
        class="flex-none text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
      >
        Content that cannot flex Content that cannot flex Content that cannot
        flex Content that cannot flex Content that cannot flex Content that
        cannot flex Content that cannot flex
      </div>
      <div
        class="flex-grow text-gray-800 text-center bg-gray-500 px-4 py-2 m-2"
      >
        Item that will grow Item that will grow Item that will grow Item that
        will grow Item that will grow Item that will grow Item that will grow
        Item that will grow
      </div>
      <div
        class="flex-none text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
      >
        Content that cannot flex Content that cannot flex Content that cannot
        flex Content that cannot flex Content that cannot flex Content that
        cannot flex Content that cannot flex Content that cannot flex
      </div>
    </div>

    <p class="text-2xl ...">Don't Grow</p>
    <p class="text-lg mb-4">
      Use .flex-grow-0 to prevent a flex item from growing:
    </p>

    <div class="flex bg-gray-200">
      <div
        class="flex-grow text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
      >
        Will grow Will grow Will grow Will grow Will grow Will grow Will grow
        Will grow Will grow Will grow Will grow Will grow Will grow Will grow
      </div>
      <div
        class="flex-grow-0 text-gray-800 text-center bg-gray-500 px-4 py-2 m-2"
      >
        Will not grow Will not grow Will not grow Will not grow Will not grow
        Will not grow Will not grow Will not grow Will not grow Will not grow
        Will not grow Will not grow Will not grow Will not grow Will not grow
        Will not grow Will not grow Will not grow Will not grow Will not grow
        Will not grow Will not grow Will not grow Will not grow Will not grow
        Will not grow Will not grow Will not grow Will not grow Will not grow
      </div>
      <div
        class="flex-grow text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
      >
        Will grow Will grow Will grow Will grow Will grow Will grow Will grow
        Will grow Will grow Will grow Will grow Will grow
      </div>
    </div>

    <p class="text-3xl mt-6 ...">Flex shirnk</p>
    <p class="text-2xl ...">start</p>
    <p class="text-lg mb-4">
      Use .flex-shrink to allow a flex item to shrink if needed:
    </p>
    <div class="flex bg-gray-200">
      <div
        class="flex-shirnk text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
      >
        Longer content that cannot flex Longer content that cannot flex Longer
        content that cannot flex Longer content that cannot flex Longer content
        that cannot flex Longer content that cannot flex Longer content that
        cannot flex Longer content that cannot flex Longer content that cannot
        flex Longer content that cannot flex Longer content that cannot flex
      </div>
      <div
        class="flex-shrink text-gray-800 text-center bg-gray-500 px-4 py-2 m-2"
      >
        Item that will shrink even if it causes the content to wrap Item that
        will shrink even if it causes the content to wrap Item that will shrink
        even if it causes the content to wrap Item that will shrink even if it
        causes the content to wrap Item that will shrink even if it causes the
        content to wrap Item that will shrink even if it causes the content to
        wrap Item that will shrink even if it causes the content to wrap Item
        that will shrink even if it causes the content to wrap
      </div>
      <div
        class="flex-none text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
      >
        Longer content that cannot flex Longer content that cannot flex Longer
        content that cannot flex Longer content that cannot flex Longer content
      </div>
    </div>

    <p class="text-3xl mt-6 ...">Don't shrink</p>
    <p class="text-2xl ...">
      Use .flex-shrink-0 to prevent a flex item from shrinking:
    </p>

    <div class="flex bg-gray-200">
      <div
        class="flex-shrink text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
      >
        Item that can shrink if needed Item that can shrink if needed Item that
        can shrink if needed Item that can shrink if needed Item that can shrink
        if needed Item that can shrink if needed can shrink if needed can shrink
        if needed can shrink if needed can shrink if needed can shrink if needed
        can shrink if needed can shrink if needed can shrink if needed can
        shrink if needed Item that can shrink if needed Item that can shrink if
        needed Item that can shrink if needed Item that can shrink if needed
        Item that can shrink if needed Item that can shrink if needed can shrink
        if needed can shrink if needed can shrink if needed can shrink if needed
        can shrink if needed can shrink if needed can shrink if needed can
        shrink if needed can shrink if needed
      </div>
      <div
        class="flex-shrink-0 text-gray-800 text-center bg-gray-500 px-4 py-2 m-2"
      >
        Item that cannot shrink below its initial size Item that cannot shrink
        <!-- below its initial size Item that cannot shrink below its initial size
        Item that cannot shrink below its initial size Item that cannot shrink
        below its initial size Item that cannot shrink below its initial size -->
        <!-- Item that cannot shrink below its initial size Item that cannot shrink
        below its initial size Item that cannot shrink below its initial size
        Item that cannot shrink below its initial size Item that cannot shrink
        below its initial size Item that cannot shrink below its initial size
        Item that cannot shrink below its initial size Item that cannot shrink
        below its initial size Item that cannot shrink below its initial size
        Item that cannot shrink below its initial size Item that cannot shrink
        below its initial size Item that cannot shrink below its initial size
        Item that cannot shrink below its initial size Item that cannot shrink
        below its initial size Item that cannot shrink below its initial size
        Item that cannot shrink below its initial size Item that cannot shrink
        below its initial size Item that cannot shrink below its initial size -->
      </div>
      <div
        class="flex-shrink text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
      >
        Item that can shrink if needed Item that can shrink if needed Item that
        can shrink if needed Item that can shrink if needed Item that can shrink
        if needed Item that can shrink if needed Item that can shrink if needed
        Item that can shrink if needed Item that can shrink if needed Item that
        can shrink if needed Item that can shrink if needed Item that can shrink
        if needed Item that can shrink if needed Item that can shrink if needed
        Item that can shrink if needed Item that can shrink if needed Item that
        can shrink if needed Item that can shrink if needed
      </div>
    </div>

    <p class="text-3xl mt-6 ...">Grid</p>
    <p class="text-2xl ...">Grid template columns</p>
    <p class="text-lg mb-4">
      Use the grid-cols-{n} utilities to create grids with n equally sized
      columns.
    </p>

    <div class="grid grid-cols-3  gap-4 ">
      <div
        v-for="(item, index) in 24"
        class="bg-gray-400 odd:bg-gray-700 p-4 text-center"
        :key="index"
      >
        {{ index + 1 }}
      </div>
    </div>

    <div class="grid grid-cols-12  gap-4 mt-10">
      <div
        v-for="(item, index) in 21"
        class="bg-gray-400 odd:bg-gray-700 p-4 text-center"
        :key="index"
      >
        {{ index + 1 }}
      </div>
    </div>
    <p class="text-2xl ... mt-10">Responsive</p>
    <div
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
    >
      <div
        v-for="(item, index) in 21"
        class="bg-gray-400 odd:bg-gray-700 p-4 text-center"
        :key="index"
      >
        {{ index + 1 }}
      </div>
    </div>
    <p class="text-3xl mt-6 ...">Grid Columns Start/end</p>
    <p class="text-2xl ...">
      Spanning columns
    </p>
    <p class="text-lg mb-4">
      Use the col-span-{n} utilities to make an element span n columns.
    </p>
    <div class="grid grid-cols-3 gap-4">
      <div class="col-span-3  p-4 text-center bg-gray-400 ..."></div>
      <div class="col-span-2  p-4 text-center bg-gray-400 ..."></div>
      <div class="col-span-1  p-4 text-center bg-gray-400 ..."></div>
      <div class="col-span-1  p-4 text-center bg-gray-400 ..."></div>
      <div class="col-span-2  p-4 text-center bg-gray-400 ..."></div>
    </div>

    <p class="text-2xl ...">
      Starting and ending lines
    </p>
    <p class="text-lg mb-4">
      Use the col-start-{n} and col-end-{n} utilities to make an element start
      or end at the nth grid line. These can also be combined with the
      col-span-{n} utilities to span a specific number of columns.
    </p>

    <div class="grid grid-cols-6 gap-4">
      <div class="col-start-2 col-span-4 p-4 text-center bg-gray-400 ..."></div>
      <div class="col-start-1 col-end-3 p-4 text-center bg-gray-400 ..."></div>
      <div class="col-end-7 col-span-2 p-4 text-center bg-gray-400 ..."></div>
      <div class="col-start-1 col-end-7 p-4 text-center bg-gray-400 ..."></div>
    </div>

    <p class="text-2xl ...">
      Grid Template Rows
    </p>
    <p class="text-lg mb-4">
      Use the grid-rows-{n} utilities to create grids with n equally sized rows.
    </p>

    <div class="h-64 grid grid-rows-3 grid-flow-col gap-4">
      <div
        v-for="(item, index) in 9"
        class="bg-gray-400 odd:bg-gray-700 p-4 text-center"
        :key="index"
      >
        {{ index + 1 }}
      </div>
    </div>

    <div class="h-64 grid grid-rows-2 grid-flow-col gap-4 mt-5">
      <div
        v-for="(item, index) in 9"
        class="bg-gray-400 odd:bg-gray-700 p-4 text-center"
        :key="index"
      >
        {{ index + 1 }}
      </div>
    </div>

    <div class="h-64 grid grid-rows-1 grid-flow-col gap-4 mt-5">
      <div
        v-for="(item, index) in 9"
        class="bg-gray-400 odd:bg-gray-700 p-4 text-center"
        :key="index"
      >
        {{ index + 1 }}
      </div>
    </div>

    <p class="text-2xl ...">
      Spanning rows
    </p>
    <p class="text-lg mb-4">
      Use the row-span-{n} utilities to make an element span n rows.
    </p>

    <div class="grid grid-rows-3 grid-flow-col gap-4 h-64">
      <div class="row-span-3 bg-gray-400 ..."></div>
      <div class="row-span-1 bg-gray-400 col-span-4 ..."></div>
      <div class="row-span-2 bg-gray-400 col-span-4 ..."></div>
    </div>

    <p class="text-lg mb-4">
      Use the row-start-{n} and row-end-{n} utilities to make an element start
      or end at the nth grid line. These can also be combined with the
      row-span-{n} utilities to span a specific number of rows.
    </p>

    <div class="grid grid-rows-3 grid-flow-col gap-4 h-64">
      <div class="row-start-2 row-span-2 bg-gray-400  ..."></div>
      <div class="row-end-3 row-span-2 bg-gray-400 .."></div>
      <div class="row-start-1 row-end-4 bg-gray-400 ..."></div>
    </div>

    <p class="text-2xl ...">
      Grid Auto Flow
    </p>
    <p class="text-lg mb-4">
      Use the grid-flow-{keyword} utilities to control how the auto-placement
      algorithm works for a grid layout.
    </p>

    <div class="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4">
      <div
        v-for="(item, index) in 9"
        class="bg-gray-400 odd:bg-gray-700 p-4 text-center"
        :key="index"
      >
        {{ index + 1 }}
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
    return {
      grid: [1, 2, 3, 4],
    };
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
