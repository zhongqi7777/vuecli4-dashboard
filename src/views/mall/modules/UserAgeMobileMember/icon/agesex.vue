<template>
  <div class="icon-agesex">
    <div class="start">
      <img src="../../../../../assets/images/dashboard/person/men.png" alt="" />
      <img
        src="../../../../../assets/images/dashboard/person/women.png"
        alt=""
      />
    </div>
    <div class="end">
      <span>45%</span>
      <span>45%</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  watch: {
    // flowData(val) {
    // }
  },
  // props: {
  // 	data: {
  // 		type: Object,
  // 		default: false
  // 	}
  // },
  props: ["title"],
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
.icon-agesex {
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 70px;
  width: 100px;
  text-align: center;
  img {
    height: 45px;
    margin: 0 5px;
  }

  .end {
    span {
      font-size: 12px;
      font-weight: 400;
      color: #ffffff;
      line-height: 17px;
      margin: 0 5px;
    }
  }
}
</style>
