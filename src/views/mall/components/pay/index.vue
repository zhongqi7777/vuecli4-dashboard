<template>
  <!-- <div class="pay">
    <el-row class="row" v-for="(item, index) in payData" :key="index">
      <el-col
        :span="8"
        v-for="(subItem, subindex) in item.children"
        :key="subindex"
      >
        <div class="grid-box">
          <vitem :title="subItem.title" :content="subItem.content"></vitem>
        </div>
      </el-col>
    </el-row>
  </div> -->

  <div class="wrap" data-style="display: flex; flex-direction: column;">
    <div class="item" data-style="flex-grow: 1">a1; flex-grow: 1</div>
    <div class="item" data-style="flex-grow: 1">a2; flex-grow: 1</div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import vitem from "./item";
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
  components: { vitem },
  data: function() {
    return {
      payData: [
        {
          children: [
            { title: "支付人数", content: "8789" },
            { title: "支付金额", content: "5545" },
            { title: "客单价", content: "54556" },
          ],
        },
        {
          children: [
            { title: "支付订单数", content: "455" },
            { title: "退款金额", content: "45411" },
            { title: "退款订单数", content: "844" },
          ],
        },
      ],
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
.wrap {
  background-color: #73a75c;
  border: 1px solid #3a542f;
  height: 50%;

  .item {
    background-color: #8fb97c;
    border: 1px solid #c7ddbd;
    padding: 10px;
    height: 100%;
  }
}

.grid-content-text {
  background: red;
  height: 100%;
  width: 300%;

  .grid-content-item {
    background: yellow;
    height: 100%;
    width: 100%;
  }
}

.pay {
  height: 100%;
  // display: flex;
  // flex-direction: column;

  display: flex;
  // display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
  // display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
  // display: -ms-flexbox; /* TWEENER - IE 10 */
  // display: -webkit-flex; /* NEW - Chrome */

  flex-direction: column;
  // flex-direction: -ms-column;

  .row {
    //flex: 1;
    flex: 1;
    -ms-flex: 1;
    -webkit-flex: 1;

    margin: 10px 0 0 10px;

    .grid-box {
      background: RGBA(4, 25, 50, 1);
      height: 100%;
      margin-right: 10px;
      cursor: pointer;
    }

    .grid-box:hover {
      background: rgba(71, 225, 255, 0.05);
      border: 1px solid rgba(6, 201, 221, 1);
    }
  }
}
</style>
