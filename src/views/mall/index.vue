<template>
  <div class="mall">
    <vhead></vhead>
    <el-row class="row-2">
      <el-col :span="7" class="el-col">
        <useragemobilemember></useragemobilemember>
      </el-col>
      <el-col :span="10" class="el-col">
        <todayuserdeal></todayuserdeal>
      </el-col>
      <el-col :span="7" class="el-col">
        <paymalldeal></paymalldeal>
      </el-col>
    </el-row>

    <el-row class="row-3">
      <el-col :span="7">
        <boddy></boddy>
      </el-col>
      <el-col :span="10">
        <mallvistors></mallvistors>
      </el-col>
      <el-col :span="7">
        <transaction></transaction>
      </el-col>
    </el-row>

    <el-row class="row-4">
      <el-col :span="7">
        <order></order>
      </el-col>
      <el-col :span="10">
        <mallhistory></mallhistory>
      </el-col>
      <el-col :span="7">
        <realtimeuser></realtimeuser>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import vhead from "./components/head/index";
import gridtitle from "./components/title/index";

//module

import useragemobilemember from "./modules/UserAgeMobileMember/index";

//今日交易金额 用户交易分别
import todayuserdeal from "./modules/TodayUserDeal/index";

// 支付 商城交易分布 商城成交来源TOP3
import paymalldeal from "./modules/PayMallDeal/index";
//实时交易用户
import realtimeuser from "./modules/RealtimeUser/index";

//商城访客(最近七天)
import mallvistors from "./modules/MallVistors/index";

//总交易金额分布 客单价近七天
import transaction from "./modules/transaction/index";

import mallhistory from "./modules/MallHistory/index";

//用户交易偏好

import boddy from "./modules/hobby/index";

//下单转换漏斗最近七天
import order from "./modules/order/index";
export default {
  name: "mall",
  components: {
    vhead,
    useragemobilemember,
    gridtitle,
    realtimeuser,
    mallvistors,
    transaction,
    todayuserdeal,
    paymalldeal,
    mallhistory,
    order,
    boddy,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.mall {
  // $grid-content-h: 500px;
  // $row-3-grid-content: 40vh;
  // $row-4-grid-content: 350px;

  // $grid-content-h: 450px;
  // $row-3-grid-content: 250px;
  $row-4-grid-content: 250px;
  $grid-content-h: 450px;
  $row-3-grid-content: 20vh;
  // $row-4-grid-content: 25vh;
  $grid-map-h: calc(450px - 150px);
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background: #000b23;

  .row-2,
  .row-3 {
    margin: 20px 35px;
  }

  .row-4 {
    margin: 20px 35px 0 35px;
  }

  .row-3 {
    height: $row-3-grid-content;

    .el-col {
      height: 100%;
    }
  }

  .row-4 {
    height: $row-4-grid-content;

    .el-col {
      height: 100%;
    }
  }
  .grid-content,
  .row-3-grid-content,
  .row-4-grid-content {
    // height: $row-3-grid-content;
    height: 100%;
    background: rgba(71, 225, 255, 0.02);
    box-shadow: 0px 1px 20px 0px rgba(71, 225, 255, 0.1);
    border: 1px solid rgba(71, 225, 255, 0.15);
  }

  .grid-content {
    height: $grid-content-h;
    .grid-title-end {
      margin: 8px 8px 0 0;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      span {
        font-size: 14px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        span {
          color: #ffe14b;
        }
      }
    }
  }

  .middle-grid-margin {
    margin: 0 10px;
  }

  .grid-map {
    height: $grid-map-h;
  }

  .flex-column {
    display: flex;
    flex-direction: column;

    .item-four-section {
      height: $grid-content-h/2;
    }

    .item {
      flex: 1;
    }

    .item-start {
      flex: 190;
    }

    .item-end {
      flex: 310;
    }

    .item-title {
      height: 50px;
    }

    .item-content {
      height: 100%;
      margin: 0 5px;

      .v-el-col {
        height: 100%;
      }
    }
  }
}
</style>
