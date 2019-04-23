<template>

  <div class="panel-class">

    <div class="one-panel-class">
      <!--<van-field placeholder="请在15分钟之内完成支付，超时将自动取消" left-icon="logistics" disabled :border="false"/>-->
      <van-field  placeholder="支付超时，订单已取消" left-icon="logistics" disabled :border="false"/>

      <van-field placeholder="请在15分钟之内完成支付，超时将自动取消" left-icon="logistics" disabled :border="false"/>
      <!--<van-field  placeholder="订单已提交，待支付" left-icon="logistics" disabled :border="false"/>-->

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
          <div class="c1">
          <div class="c2">
            <view class="van-cell-text">{{info.company}}</view>
            <van-tag type="danger">小计：共{{info.count}}件</van-tag>
         <!--   <view class="van-cell-text">韵达快递</view>
            <van-tag type="danger">小计：共1件</van-tag>-->
          </div>
          <div class="c3">
            <text class="t1">合计</text><text class="t2">￥ {{info.orderPayment}}</text>
          </div>
          </div>
        </view>
      </van-cell>
      <van-cell title="配送服务">
          <view>云跑提供服务</view>
      </van-cell>
      <van-cell title="配送地址">
       <view>{{info.receiverName}} {{info.tel}}</view>
        <view>{{info.colleage}} {{info.detail_address}}</view>
        <!--<view>张三 18896669123</view>
        <view>安徽科技学院 东四207</view>-->
      </van-cell>
    </div>

    <div class="two-panel-class">
      <van-cell>
        <view slot="title">
          <view class="van-cell-text">订单信息</view>
        </view>
      </van-cell>
      <van-cell title="订单号码">
        <view>{{info.id}}</view>
        <!--<view>222126562261616</view>-->
      </van-cell>
      <van-cell title="下单时间">
        {{info.createTime}}
        <!--2019-6-6 16-06-066-->
      </van-cell>
    </div>
  </div>

</template>

<script>
  export default {
    data:()=>{
      return {

        info: {
          id:"",
          count: "",
          company: "",
          data: "",
          weight: "",
          type: "",
          address: "",
          tel_last: "",
          openid: "",
          colleage:"",
          detail_address:"",
          tel:"",
          name:"",
          //money:"",
          expressName:"",
          receiverName:"",
          createTime:"",
          orderPayment:""

        }
      };

    },
    onLoad(options){
      let data = JSON.parse(options.data)
      console.log(data)
      console.log(data.id)
         this.info.company = data.expressCompany,
         this.info.receiverName = data.receiverName,
           this.info.tel = data.receiverMobile,
           this.info.colleage = data.receiverCollegeName,
           this.info.detail_address = data.receiverAddress,
           this.info.id = data.id,
           this.info.createTime = data.createTime,
           this.info.orderStatus = data.orderStatus,
           this.info.count = data.expressCount
           this.info.orderPayment = data.orderPayment






    },
    methods: {

    }
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
  .c1{
    display: flex;
    flex-direction: row;

  }
  .c2{
    width: 60%;
  }
  .c3{
    width: 40%;
    text-align: center;
    align-items: center;
    line-height: 300%;
    font-size: 15px;
    color: #7d7e80;

  }
  .t1{

  }
  .t2{
    color: crimson;
  }

</style>
