<template>
  <van-tabs :active="active"@click="onChange">
    <van-tab title="全部订单">
      <van-card
        num="3"
        price="2.00"
        desc="描述信息"
        title="韵达快递"
        :thumb="imageURL"
      >
        <view slot="footer">
          <van-button size="mini">删除</van-button>
          <van-button size="mini" style="color: #07c160">去付款</van-button>
        </view>
      </van-card>


    </van-tab>


    <van-tab title="待付款">
      <van-card
        num="3"
        price="2.00"
        desc="描述信息"
        title="韵达快递"
        :thumb="imageURL"
      >
      <view slot="footer">
        <van-button size="mini">删除</van-button>
        <van-button size="mini" style="color: #07c160">去付款</van-button>
      </view>
      </van-card>
    </van-tab>


    <van-tab title="待评价">
      <van-card
        num="3"
        price="2.00"
        desc="描述信息"
        title="韵达快递"

        :thumb="imageURL"
      >
        <view slot="footer">
          <van-button size="mini">删除</van-button>
          <van-button size="mini" style="color: #07c160">去评价</van-button>
        </view>
      </van-card>

    </van-tab>

  </van-tabs>
</template>

<script>
  export default {
    data(){
      return {
        active:1,
        imageURL:"/static/images/sf.jpg"
      };
    },
    methods:{
      onChange(event){
        console.log(event)
        wx.showToast({
          title:'切换到标签${event.detail.index+1}',
          icon:'none'
        })
      }
    }
  };
</script>

<style>
  .div{
    /*width: 100%;*/
    /*padding: 15rpx;*/
    /*border: 100rpx 0;*/
    border-style: solid;
    border-color: #ECECEC;
  }
  .div1{
    width: 100%;
    height: 70rpx;
    line-height: 70rpx;
    border-bottom: 1rpx solid #ECECEC;
    display: flex;
    justify-content: space-between;
  }
  .div2{
    height: 250rpx;
    display: flex;
    align-items: center;
    border-bottom: 1rpx solid #ECECEC;
  }
  .div2 img{
    width: 200rpx;
    height: 200rpx;
  }
  .div3{
    width: 100%;
    height: 90rpx;
    display: flex;
    justify-content: flex-end;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ECECEC;
  }
  .order-content-info-price{
    color: red;
    font-size: 30rpx;
  }
  .order-content-info-price,.order-content-info-date,
  .order-content-info-howToDistribute{
    height: 42rpx;
    line-height: 42rpx;
    margin-left: 30rpx;
  }
  .order-content-info{
    font-size: 25rpx;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .order-footer-goToComment,.order-footer-orderAgain{
    margin-top: 15rpx;
    margin-right: 40rpx;
    height: 70rpx;
    line-height: 70rpx;
    width: 200rpx;
    text-align: center;
    border: 1rpx solid #ECECEC;
  }
  .order-footer-orderAgain{
    margin-right: 20rpx;
  }
  .order-footer-goToComment{
    background: #339900;
  }
  .order-title-restaurantName{
    padding-left: 20rpx;
  }
  .order-title-state{
    padding-right: 20rpx;
  }

</style>
