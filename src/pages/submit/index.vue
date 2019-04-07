<template>
  <div class="panel-class">

    <div class="one-panel-class">
      <van-cell class="address-class" title="选择收货地址" icon="add-o" is-link border size="large"></van-cell>
      <van-cell class="company-class" title="选择配送时间"  icon="underway-o" size="large" is-link></van-cell>
    </div>

    <div class="two-panel-class">
      <van-cell class="company-class" title="韵达快递" label="小计:共1件" icon="wap-home" size="large"></van-cell>
      <van-cell class="company-class" title="收件人姓名" value="小王" size="large"></van-cell>
      <van-cell class="company-class" title="手机尾号" value="6835" size="large"></van-cell>
    </div>

    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit"></van-submit-bar>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {}
    },
    method: {},
    created() {
    }
  }
</script>

<style>
  page {
    background: #edece8;
  }

  .panel-class {
    padding: 10px;
  }

  .one-panel-class {

  }

  .two-panel-class {
    margin-top: 10px;
  }

  .address-class .van-cell {
    color: #feae05;
  }

  .address-class .van-cell__title {
    font-size: 16px;
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

</style>
