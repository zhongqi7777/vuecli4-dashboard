<template>
  <div class="mall">
    <el-row class="head">
      <!-- <el-col :span="24">
        <el-row>
          <el-col :span="4">
            <div class="left">
              <img src="../../assets/image/mall/head/left/default.png" alt="" />
              <span>店铺名称</span>
            </div></el-col
          >
          <el-col :span="16" class="content"><div>交易数据大屏</div></el-col>
          <el-col :span="4" class="right">
            <div class="refresh"><img src="../../assets/image/mall/head/right/refresh/default.png" alt=""><span>刷新</span></div>
            <div class="fullscreen"><img src="../../assets/image/mall/head/right/fullscreen/default.png" alt=""><span>全屏</span></div>
          </el-col>
        </el-row>
      </el-col> -->

      <el-col>
        <el-row>
          <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
            <div class="left">
              <img src="../../assets/image/mall/head/left/default.png" alt="" />
              <span>店铺名称</span>
            </div></el-col
          >
          <el-col :xs="12" :sm="14" :md="14" :lg="14" :xl="16"class="content"><div>交易数据大屏</div></el-col>
          <el-col :xs="8" :sm="6" :md="6" :lg="6" :xl="4" class="right">
            <div class="refresh">
              <img
                src="../../assets/image/mall/head/right/refresh/default.png"
                alt=""
              /><span>刷新</span>
            </div>
            <div class="fullscreen">
              <img
                src="../../assets/image/mall/head/right/fullscreen/default.png"
                alt=""
              /><span>全屏</span>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "mall",
};
</script>

<style lang="scss">
.mall {
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  background: #000b23;

  .head {
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
}
</style>
