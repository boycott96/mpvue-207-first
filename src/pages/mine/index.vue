<template>
  <div class="div">
    <div class="div1">
      <div><img src="/static/images/user.png"></div>
      <div>张三</div>
    </div>

    <div class="div2">
      <div class="div3"><text>云跑红包</text></div>
      <div class="div4"><text>我的收货地址</text></div>
      <div class="div5"><text>客服电话：10086</text></div>
      <div class="div6"><text>退出账号</text></div>

    </div>

  </div>



</template>

<script>
  export default {
    name: "index"
  };
</script>

<style>
  .div{
    font-size: 30rpx;
    background: #ECECEC;
  }
  .div1{
    /*width: 100%;*/
    /*height: 300rpx;*/
    /*background: #07c160;*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #07c160;
    height: 400rpx;

  }
  .div1 img{
    width: 120rpx;
    height: 120rpx;
    border-radius:120rpx;
  }
  .div2{
    width: 100%;
    height: 70rpx;
    line-height: 70rpx;
    margin: 15rpx 0;
    background: #ECECEC;
  }
  .div3{
    width: 100%;
    background: #ECECEC;
    height: 70rpx;
    line-height: 70rpx;
    padding-left: 15rpx;
    margin: 15rpx 0;
  }
  .div4{
    width: 100%;
    background: #ECECEC;
    height: 70rpx;
    line-height: 70rpx;
    padding-left: 15rpx;
    margin: 15rpx 0;
  }
  .div5{
    width: 100%;
    background: #ECECEC;
    height: 70rpx;
    line-height: 70rpx;
    padding-left: 15rpx;
    margin: 15rpx 0;
  }
  .div6{
    background: #ECECEC;
    height: 70rpx;
    line-height: 70rpx;
    padding-left: 15rpx;
    text-align: center;
  }
</style>
