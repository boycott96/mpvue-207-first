<template>
  <div class="div">

    <div class="div1">
      <img src="/static/images/user.png" alt="头像" class="mine-photo">
    </div>

  </div>

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

<style scoped>
  .mine-photo {
    /*height: 120rpx;*/
    /*width: 120rpx;*/
    /*border-radius: 50%;*/
  }

  .van-cell {
    /*line-height: 300rpx !important;*/
    /*text-align: center;*/
    /*background: #07c160;*/
  }
  .mine-photo{
    width: 120rpx;
    height: 120rpx;
    border-radius:120rpx;
    border: 8rpx solid rgb(51, 199, 204);
    margin-bottom: 30rpx;
  }
  .van-cell-group{
    /*background: #07c160;*/
  }
  .div{
    width: 100%;
    height: 300rpx;
    background: #338FCC;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .div1{
    /*width: 120rpx;*/
    /*height: 120rpx;*/
    /*border-radius:120rpx;*/
    /*border: 8rpx solid rgb(51, 199, 204);*/
    /*margin-bottom: 30rpx;*/
  }

</style>
