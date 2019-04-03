<template>
  <van-cell-group>
    <van-cell size="large" :center="true">
      <img src="/static/images/user.png" alt="头像" class="mine-photo">
    </van-cell>
  </van-cell-group>
</template>

<script>
  export default {
    name: "index",
    data: () => {
      return {
        minecss: {
          background: '#FFF8DC',
          height: '200px',
        }
      }
    }
  };
</script>

<style>
  .mine-photo {
    height: 120rpx;
    width: 120rpx;
    border-radius: 50%;
  }

  .van-cell {
    line-height: 300rpx !important;
    text-align: center;
  }
</style>
