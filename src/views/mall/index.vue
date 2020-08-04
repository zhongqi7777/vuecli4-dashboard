<template>
  <div class="mall">
    <el-row class="row-1">
      <el-col>
        <el-row>
          <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
            <div class="left">
              <img src="../../assets/image/mall/head/left/default.png" alt />
              <span>店铺名称</span>
            </div>
          </el-col>
          <el-col :xs="12" :sm="14" :md="14" :lg="14" :xl="16" class="content">
            <div>交易数据大屏</div>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6" :lg="6" :xl="4" class="right">
            <div class="refresh">
              <img
                src="../../assets/image/mall/head/right/refresh/default.png"
                alt
              />
              <span>刷新</span>
            </div>
            <div class="fullscreen">
              <img
                src="../../assets/image/mall/head/right/fullscreen/default.png"
                alt
              />
              <span>全屏</span>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

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
              <!-- <div class="item" v-for="(item, index) in [1, 1, 1, 1, 1, 1, 1]">
                <span>{{ index }}</span>
              </div> -->、
               <countTo :startVal='startVal' :endVal='endVal' :duration='7000'></countTo>
            </el-col>
          </el-row>

          <el-row class="grid-contentrow1-margin">
            <el-col :span="12">
              <div class="comon-titile">
                <span>今日交易金额</span>
              </div>
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
export default {
  name: "mall",
  components: { countTo },
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

  .row-1 {
    background: url("../../assets/image/mall/head/bg/default.png") no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center 0;
    height: 84px;
    .left {
      margin: 15px 0 0 35px;
      display: flex;
      align-items: center;
      span {
        font-size: 14px;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.8);
        margin-left: 2px;
      }
    }
    .content {
      font-size: 42px;
      color: rgba(255, 255, 255, 1);
      text-align: center;
      padding: 17px 0;
    }

    .right {
      padding: 15px 40px 0 0;
      text-align: right;
      .refresh,
      .fullscreen {
        display: inline-block;
        width: 66px;
        height: 25px;
        background: rgba(71, 225, 255, 0.08);
        border-radius: 2px;
        text-align: center;
        margin: 0 10px 0 0;
        padding: 5px;
        img {
          margin-right: 6px;
        }
        span {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.8);
          // margin: 0 13px 0 20px;
        }
      }
    }
  }

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

    .amount {
      // height: 90px;
      // display: flex;
      // justify-content: space-around;
      // align-items: center;

      // .item {
      //   display: inline-block;
      //   width: 52px;
      //   height: 85px;
      //   background: rgba(71, 225, 255, 0.02);
      //   box-shadow: 0px 1px 20px 0px rgba(71, 225, 255, 0.1);

      //   span {
      //     font-size: 68px;
      //     font-weight: normal;
      //     color: rgba(255, 255, 255, 1);
      //     line-height: 78px;
      //     background: linear-gradient(
      //       180deg,
      //       rgba(218, 255, 253, 1) 0%,
      //       rgba(20, 225, 252, 1) 100%
      //     );
      //     background-clip: text;
      //     -webkit-text-fill-color: transparent;
      //   }

      //   //animate
      // }
    }
  }

  .middle-grid-margin {
    margin: 0 10px;
  }
}
</style>
