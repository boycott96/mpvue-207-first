<template>
  <div class="div">
    <div class="div1">
        选择收货地址
    </div>
    <div class="div2">

      <van-card
        num="1"
        price="1.00"
        desc="2019/4/4"
        title="韵达快递"

      />

    </div>
    <div class="div2">
      <van-cell-group>
        <van-field
          value="张三"
          label="收件人姓名"
          disabled
          :border="false"
          input-align="right"
        />
        <van-field
          value="6653"
          label="手机尾号"
          disabled
          :border="false"
          input-align="right"
        />
        <van-field
          value="￥ 1.0"
          label="实付金额"
          disabled
          :border="false"
          input-align="right"
        />
        <van-button class="confirm-order" type="info" size="large">下单</van-button>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        imageURL:"/static/images/sf.jpg"
      }
    }
  };
</script>

<style scoped>
  .div{
    display: flex;
    flex-direction: column;
  }
  .div1{
    width: 100%;
    height: 200rpx;
    background: #07c160;
  }
  .div2{
    height: 130rpx;
  }
</style>
