<template>

  <div class="panel-class">

    <div class="one-panel-class">
  <!--    <van-cell icon="logistics" size="large">
        <view>请在15分钟之内完成支付，超时将自动取消</view>
      </van-cell>-->

      <van-field placeholder="请在15分钟之内完成支付，超时将自动取消" left-icon="logistics" disabled :border="false"/>
    </div>

    <div class="two-panel-class">
      <van-cell>
        <view slot="title">
          <view class="van-cell-text">预计01：30送达</view>
        </view>
      </van-cell>

      <van-cell title="由云跑提供服务"  :border="false">

       </van-cell>

      <van-cell   lable="van-row" :border="false">
        <van-row>
          <van-col span="8"><van-button type="default">取消支付</van-button></van-col>
          <van-col span="8"><van-button type="primary">立即支付</van-button></van-col>
        </van-row>
      </van-cell>

    </div>


    <div class="two-panel-class">
      <van-cell>
        <view slot="title">
          <view class="van-cell-text">韵达快递</view>
          <van-tag type="danger">小计：共1件</van-tag>
        </view>
      </van-cell>
      <van-cell title="配送服务">
          <view>云跑提供服务</view>
      </van-cell>
      <van-cell title="配送地址">
        <view>小王 18896323262</view>
        <view>安徽科技学院 东四207</view>
      </van-cell>
    </div>

    <div class="two-panel-class">
      <van-cell>
        <view slot="title">
          <view class="van-cell-text">订单信息</view>
        </view>
      </van-cell>
      <van-cell title="订单号码">
        <view>9632 2521 3625 6252 1</view>
      </van-cell>
      <van-cell title="下单时间">
        2019-04-08 00:51:00
      </van-cell>
    </div>
  </div>

</template>

<script>
  export default {
    name: "index"
  };
</script>

<style >
  page {
    background: #edece8;
  }

  .panel-class {
    padding: 10px;
  }

  .one-panel-class {
    font-size: 25rpx;
  }

  .two-panel-class {
    margin-top: 10px;
  }

  .address-class .van-cell {
    color: #feae05;
  }

  .address-class .van-cell__title {
    font-size: 20rpx;
    font-weight: bold;
    margin-left: 10px;
  }

  .company-class .van-cell__title {
    font-size: 18px;
    margin-left: 10px;
  }

  .company-class .van-cell__label {
    margin-top: 10px;
    font-size: 14px;
  }
  .van-cell-text{
    font-size: 40rpx;
  }
  .div1{
    display: flex;
    flex-direction: row;
  }
  .div2{
    display: flex;
    flex-direction: row;

  }
</style>
