<template>
  <van-cell-group>
    <van-field placeholder="请输入快件手机尾号" label="手机尾号" left-icon="phone" :border="false" :value="form.phone"></van-field>

    <van-field value="" label="快递公司" left-icon="wap-home" :border="false" :value="form.company" readonly @click="activeSelect"></van-field>





    <van-field label="收件日期" left-icon="calender-o" :border="false" :value="form.currentDate" readonly @click="activeDate"></van-field>







    <van-field label="件数" left-icon="chart-trending-o" :border="false" :value="form.count" readonly @click="activeCount"></van-field>

    <van-field label="收件重量" left-icon="bag-o" :border="false" :value="form.weight" readonly @click="activeWeight"></van-field>

    <van-button class="confirm-order" type="info" size="large">下单</van-button>

    <!--快递公司下拉框-->
    <van-popup :show="show" position="bottom" overlay>
      <van-picker show-toolbar :columns="columns" @confirm="onConfirm" @cancel="show = false"></van-picker>
    </van-popup>



    <!--收件日期下拉框-快捷选择-->
    <van-popup :show="dateshow" position="bottom" overlay>
      <van-datetime-picker :value="currentDate" type="date" :min-date="minDate" @confirm="onConfirmDate"
                           @cancel="dateshow = false"/>
    </van-popup>




    <!--件数下拉框-快捷选择-->
    <van-popup :show="countshow" position="bottom" overlay>
        <van-picker show-toolbar :columns="count" @confirm="onCount" @cancel="countshow = false"></van-picker>
    </van-popup>
    <!--收件重量-快捷选择-->
    <van-popup :show="weightshow" position="bottom" overlay>
      <van-picker show-toolbar :columns="weight" @confirm="onWeight" @cancel="weightshow = false"></van-picker>
    </van-popup>

  </van-cell-group>
</template>

<script>
  import card from "@/components/card";

  export default {
    data() {
      return {
        //表单
        form: {
          phone: "",
          company: "韵达快递",
          currentDate: '',
          count: "1",
          weight: "(0kg,5kg]"
        },
        currentDate: new Date().getTime(),
        minDate: new Date().getTime(),
        //是否显示公司
        show: false,
        //是否显示日期
        dateshow: false,
        countshow:false,
        weightshow:false,
        //选择下拉值
        columns: ["韵达快递", "申通快递", "圆通快递", "天天快递", "顺丰快递", "德邦快递", "EMS"],
        weight:["(0,5kg]","(6,10kg]"],
        count:[1,2,3,4,5,6,7,8,9,10],
      };
    },

    components: {
      card
    },

    methods: {
      //选中日期
      onConfirmDate(event){
        console.log(event)

      },
      //激活日期选择
      activeDate() {
        this.dateshow = true;
      },
      //
      //激活选择菜单快递公司
      activeSelect() {
        this.show = true;
      },

      //激活件数选择器
      activeCount(){
        this.countshow=true;
      },
      //激活选择器
      activeWeight(){
        this.weightshow=true;
      },



      //确认件数
      onCount(event){
          this.form.count=event.target.value;
          this.countshow=false;
      },
      //确认重量
      onWeight(event){
        this.form.weight=event.target.value;
        this.weightshow=false;
      },


      //确认选择公司
      onConfirm(event) {
        this.form.company = event.target.value;
        this.show = false;
      },

    },

    created() {
      // let app = getApp()
    }
  };
</script>

<style>

</style>
