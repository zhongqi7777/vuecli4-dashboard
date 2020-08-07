<template>
 <chinamap></chinamap>
</template>

<script>
import chinamap from "@/components/map/china/index";
import vcharts from "@/mixin/v-charts.js";
import mapOrigin from "mock/map/_data/china"
import { mapGetters, mapActions, mapState } from "vuex";
const Base64 = require("js-base64").Base64;

export default {
  mixins: [vcharts],
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
    chinamap
  },
  data: function() {
    return {
      chartSettings: {
        position: "china",
        mapOrigin,
        label: false,
        itemStyle: {
          normal: {
            borderColor: "#00f",
          },
        },
      },
      chartData: {
        columns: ["位置", "人口"],
        rows: [
          { 位置: "吉林", " 人口": 123 },
          { 位置: "北京", " 人口": 1223 },
          { 位置: "上海", " 人口": 2123 },
          { 位置: "浙江", " 人口": 4123 },
        ],
      },
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
.china-map {
  height: 100%;
}
</style>
