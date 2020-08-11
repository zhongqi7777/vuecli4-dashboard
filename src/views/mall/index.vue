<template>
  <div class="mall">
    <vhead></vhead>
    <el-row class="row-2">
      <el-col :span="7">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="10">
        <div class="grid-content middle-grid-margin">
          <el-row
            type="flex"
            justify="space-between"
            class="grid-content-row1-margin"
          >
            <el-col :span="12">
              <div class="comon-titile">
                <span>今日交易金额</span>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content-row1-col2-div">
                <span>
                  同比昨日
                  <span>增长20%</span>
                </span>
              </div>
            </el-col>
          </el-row>
          <el-row class="grid-content-row1-margin">
            <el-col :span="24">
              <countTo
                :startVal="startVal"
                :endVal="endVal"
                :duration="7000"
              ></countTo>
            </el-col>
          </el-row>

          <el-row class="grid-contentrow1-margin">
            <el-col :span="12">
              <div class="comon-titile">
                <span>今日交易金额</span>
              </div>
            </el-col>
          </el-row>

          <el-row class="grid-map">
            <el-col :span="24">
              <chinamap></chinamap>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>

    <el-row class="row-3">
      <el-col :span="7">
        <div class="row-3-grid-content bg-purple"></div>
      </el-col>
      <el-col :span="10">
        <div class="row-3-grid-content middle-grid-margin"></div>
      </el-col>
      <el-col :span="7">
        <div class="row-3-grid-content bg-purple"></div>
      </el-col>
    </el-row>

    <el-row class="row-4">
      <el-col :span="7">
        <div class="row-4-grid-content bg-purple"></div>
      </el-col>
      <el-col :span="10">
        <div class="row-4-grid-content middle-grid-margin"></div>
      </el-col>
      <el-col :span="7">
        <div class="row-4-grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import countTo from "@/components/CountTo/index";
import vhead from "./components/head/index";
import chinamap from "@/components/map/china/index";
export default {
  name: "mall",
  components: { countTo, vhead, chinamap },
  data() {
    return {
      startVal: 0,
      endVal: 1000000,
    };
  },
};
</script>

<style lang="scss">
.mall {
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  background: #000b23;

  .row-2,
  .row-3,
  .row-4 {
    margin: 20px 35px;
  }

  .grid-content,
  .row-3-grid-content,
  .row-4-grid-content {
    height: 220px;
    background: rgba(71, 225, 255, 0.02);
    box-shadow: 0px 1px 20px 0px rgba(71, 225, 255, 0.1);
    border: 1px solid rgba(71, 225, 255, 0.15);
  }

  .grid-content {
    height: 430px;
    //width: 100%;
    .grid-content-row1-col2-div {
      height: 40px;
      display: flex;
      align-items: center;
    }

    .grid-content-row1-margin {
      margin: 8px;
    }

    .comon-titile {
      height: 40px;
      display: flex;
      align-items: center;
      height: 35px;
      background: linear-gradient(
        90deg,
        rgba(71, 225, 255, 0.3) 0%,
        rgba(71, 225, 255, 0) 100%
      );
      span {
        font-size: 16px;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        margin: 0 10px;
      }
    }

    .grid-content-row1-col2-div {
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
}
</style>
