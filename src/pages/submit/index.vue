<template>
  <div class="panel-class">
    <div class="one-panel-class">
      <van-cell class="address-class" title="我的收货地址" :label="address" icon="add-o" is-link border size="large"
                @click="selectAddress"></van-cell>
      <van-cell class="company-class" title="选择配送时间" :label="time" icon="underway-o" size="large" is-link
                @click="selectTime"></van-cell>
    </div>
    <div class="two-panel-class">
      <van-cell class="company-class" title="韵达快递" label="小计:共1件" icon="wap-home" size="large"></van-cell>
      <van-cell class="company-class" title="收件人姓名" value="小王" size="large"></van-cell>
      <van-cell class="company-class" title="手机尾号" value="6835" size="large"></van-cell>
    </div>
    <van-submit-bar :price="3050" button-text="提交订单" @click="submitOrder"></van-submit-bar>
    <!--弹出层-->
    <van-popup :show="addressShow" position="bottom">
      <van-row class="title-class">
        <van-col span="4"><span>取消</span></van-col>
        <van-col span="16"><span>我的收货地址</span></van-col>
      </van-row>
      <van-cell class="company-class" title="收件人姓名" value="小王" size="large"></van-cell>
    </van-popup>
    <van-popup :show="timeShow" position="bottom">
      <van-datetime-picker show-toolbar title="配送时间" @confirm="confirmTime" @cancel="timeShow = false"
                           :min-hour="minHour" type="time" :value="currentDate"></van-datetime-picker>
    </van-popup>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        //地址显示
        addressShow: false,
        //地址数据
        addressColumns: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
        //选中的地址参数
        address: "",
        //时间显示
        timeShow: false,
        //时间数据保存
        timeData: new Date().getTime(),

        time: new Date().toLocaleString()
      };
    },
    methods: {
      //激活选择时间
      selectTime() {

      },
      //激活选择地址
      selectAddress() {
        this.addressShow = true;
      },

      //提交订单
      submitOrder() {
      },

      //选中地址事件
      onConfirm(event) {
        this.address = event.mp.detail.value;
        this.addressShow = false;
      },

      //选中时间事件
      confirmTime(event) {
        console.log(event);
      }
    },
    created() {
    }
  };
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

  .van-submit-bar__bar--safe {
    padding-bottom: 0 !important;
  }

  .title-class {
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    text-align: center;
  }

</style>
