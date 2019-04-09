<template>
  <div class="panel-class">
    <div class="one-panel-class">
      <van-cell-group>
        <van-field placeholder="请输入快件手机尾号" v-model="form.phone" :value="form.phone" label="手机尾号" left-icon="phone"
                   :border="false"
                   @change="changePhone"></van-field>

        <van-field label="快递公司" left-icon="wap-home" :border="false" :value="form.company" readonly
                   @click="activeSelect"></van-field>

        <van-field label="收件日期" left-icon="calender-o" :border="false" :value="form.currentDate" readonly
                   @click="activeDate"></van-field>


        <van-field label="件数" left-icon="chart-trending-o" :border="false" :value="form.count" readonly
                   @click="activeCount"></van-field>

        <van-field label="收件重量" left-icon="bag-o" :border="false" :value="form.weight" readonly
                   @click="activeWeight"></van-field>

        <van-field label="收件类型" left-icon="bag-o" :border="false" :value="form.type" readonly
                   @click="activeType"></van-field>

        <van-button class="confirm-order" type="info" size="large" @click="onsubmit">下单</van-button>

        <!--快递公司下拉框-->
        <van-popup :show="show" position="bottom">
          <van-picker show-toolbar :columns="columns" @confirm="onConfirm" @cancel="show = false"></van-picker>
        </van-popup>
        <!--收件类型 下拉框 -->
        <van-popup :show="typeshow" position="bottom">
          <van-picker show-toolbar :columns="type" @confirm="onType" @cancel="typeshow = false"></van-picker>
        </van-popup>

        <!--收件日期下拉框-快捷选择-->
        <van-popup :show="dateshow" position="bottom">
          <van-datetime-picker :value="currentDate" type="date" :max-date="maxDate" :min-date="minDate"
                               @confirm="onConfirmDate"
                               @cancel="dateshow = false"></van-datetime-picker>
        </van-popup>
        <!--件数下拉框-快捷选择-->
        <van-popup :show="countshow" position="bottom">
          <van-picker show-toolbar :columns="count" @confirm="onCount" @cancel="countshow = false"></van-picker>
        </van-popup>
        <!--收件重量-快捷选择-->
        <van-popup :show="weightshow" position="bottom">
          <van-picker show-toolbar :columns="weight" @confirm="onWeight" @cancel="weightshow = false"></van-picker>
        </van-popup>

      </van-cell-group>
    </div>
  </div>
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
          currentDate: new Date().toLocaleString().substr(0, new Date().toLocaleString().indexOf(" ")),
          count: "1",
          weight: "(0kg,5kg]",
          type: "服装鞋子"
        },
        currentDate: new Date().getTime(),
        minDate: new Date().getTime() - 15 * 24 * 60 * 60 * 1000,
        maxDate: new Date().getTime(),
        //是否显示公司
        show: false,
        //是否显示日期
        dateshow: false,
        //件数下拉框控制
        countshow: false,
        //重量下拉框控制
        weightshow: false,
        typeshow: false,
        //选择下拉值
        columns: ["韵达快递", "申通快递", "圆通快递", "天天快递", "顺丰快递", "德邦快递", "EMS"],
        weight: ["(0,5kg]", "(5,10kg]"],
        count: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        type: ["服饰鞋子", "洗发液类", "化妆品", "生活用品", "电子产品", "其它"]

      };
    },

    components: {
      card
    },

    methods: {
      changePhone(value) {
        let self = this;
        self.form.phone = value.mp.detail;
      },
      //选中日期
      onConfirmDate(event) {
        let time = new Date(event.mp.detail).toLocaleString();
        let subIndex = time.indexOf(" ");
        this.form.currentDate = time.substr(0, subIndex);
        this.dateshow = false;
        //var data=new Date().toLocaleString().substr(0, new Date().toLocaleString().indexOf(" ")).toString();
       // this.currentDate=data;
      },
      //激活日期选择
      activeDate() {
        this.dateshow = true;
      },
      //
      //激活选择菜单快递公司
      activeSelect() {
        this.show = true;
        this.currentDate = new Date().getTime();
      },

      //激活件数选择器
      activeCount() {
        this.countshow = true;
      },
      //激活选择器
      activeWeight() {
        this.weightshow = true;
      },
      //激活类型选择器
      activeType() {
        this.typeshow = true;
      },


      //确认件数
      onCount(event) {
        this.form.count = event.target.value;
        this.countshow = false;
      },
      //确认重量
      onWeight(event) {
        this.form.weight = event.target.value;
        this.weightshow = false;
      },
      //确认收件类型
      onType(event) {
        this.form.type = event.target.value;
        this.typeshow = false;
      },


      //确认选择公司
      onConfirm(event) {
        this.form.company = event.target.value;
        this.show = false;
      },

      //下单
      onsubmit() {
        console.log(this.form.phone);
        console.log(this.form);
        wx.navigateTo({
          url: "/pages/submit/main?phone="+this.form.phone+"&company="+this.form.company
          +"&count="+this.form.count+"&type="+this.form.type+"&weight="+this.form.weight
            +"&currentData="+this.form.currentDate,
        });
      }

    },

    created() {
    }
  };
</script>

<style scoped>

  /*page {*/
  /*background: #edece8;*/
  /*}*/
  .panel-class {

    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
  }

  .one-panel-class {
    /*margin-top: 10px;*/
  }
</style>
