<template>
  <div class="mall">
    <el-row class="head">
      <el-col :span="24">
        <el-row>
          <el-col :span="4">
            <div class="left">
              <img src="../../assets/image/mall/shop/default.png" alt="" />
              <span>店铺名称</span>
            </div></el-col
          >
          <el-col :span="16" class="content"><div>交易数据大屏</div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
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
    background: url("../../assets/image/mall/title/default.png") no-repeat;
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
  }
}
</style>
