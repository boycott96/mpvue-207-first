<template>
  <div class="panel-class">
    <div class="one-panel-class">
      <van-cell v-if="isSelectAddress" class="address-class" title="我的收货地址" :label="address" icon="add-o" is-link border
                size="large"
                @click="selectAddress"></van-cell>
      <van-cell v-else :title="addressTitle" :label="address" icon="location" is-link border size="large"
                @click="selectAddress"></van-cell>
      <van-cell class="company-class" title="选择配送时间" :label="time" icon="underway-o" size="large" is-link
                @click="selectTime"></van-cell>
    </div>

    <div class="two-panel-class">
      <van-cell class="company-class" :title="title" :label="label+count+label1" icon="wap-home" size="large">

      </van-cell>

      <!--<van-cell :title="title" :value="+" size="large" label="描述信息"/>-->

      <van-cell class="company-class" title="收件人姓名" value="小王" size="large"></van-cell>
      <van-cell class="company-class" title="手机尾号" :value="submit.phone" size="large"></van-cell>
    </div>

    <van-submit-bar :price="money" button-text="提交订单" @click="submitOrder"></van-submit-bar>
    <!--弹出层-->
    <van-popup :show="addressShow" position="bottom" class="address-popup-class">
      <van-row class="title-class">
        <van-col span="4" class="cancel-class" @click="addressShow = false"><span>取消</span></van-col>
        <van-col span="16"><span>我的收货地址</span></van-col>
      </van-row>
      <div class="inner-address-class">

        <van-cell-group v-for="(item, index) in addressData" :key="index">
          <van-cell :title="item.name + ',' + item.phone" :label="item.city + item.address"
                    @click="select_address(item)">
            <van-icon slot="right-icon" name="edit" class="custom-icon" size="20px"
                      @click="editAddress(item)"></van-icon>
          </van-cell>
        </van-cell-group>


       <!-- <van-popup :show="editAddressShow" position="right" class="right-popup-inner">
          <div class="back-div-class">
            <van-icon name="arrow-left" @click="editAddressShow = false" class="back-icon"></van-icon>
          </div>
          <div class="edit-address-class">
            <van-cell-group class="address-cell-group-class">
              <van-field :value="addressForm.name" clearable label="姓名" left-icon="user-o"
                         placeholder="收货人姓名"></van-field>
              <van-field :value="addressForm.phone" type="text" label="电话" placeholder="收货人手机号"
                         left-icon="phone-circle-o"
                         :border="false"></van-field>
              <van-field :value="addressForm.city" type="text" label="地区" left-icon="home-o" readonly
                         placeholder="省/市/区"
                         :border="false" @click="activeArea"></van-field>


              <van-field :value="addressForm.address" type="text" label="详细地址" placeholder="街道门牌号、楼层房间号等"
                         left-icon="aim"
                         :border="false"></van-field>


              &lt;!&ndash;区域弹出框&ndash;&gt;
              <van-popup :show="show" position="bottom">
                <van-area :area-list="AreaList" value="110101" @cancel="show = false" @confirm="onArea"></van-area>
              </van-popup>
            </van-cell-group>



            <div>
              <van-button type="danger" size="large" class="inner-button-class" @click="submit">保存</van-button>
              <van-button size="large" class="inner-button-class" @click="deleteAddress">删除</van-button>
            </div>
          </div>
        </van-popup>-->












      </div>
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
        addressTitle: "",
        isSelectAddress: true,
        //地址显示
        addressShow: false,
        //地址数据
        addressData: [{
          name: "张三",
          phone: "13855036835",
          city: "浙江省杭州市西湖区",
          address: "文三路138号东方通信大厦7楼501室"
        }, {
          name: "李四",
          phone: "13855036835",
          city: "浙江省杭州市西湖区",
          address: "文三路138号东方通信大厦7楼501室"
        }, {
          name: "李四",
          phone: "13855036835",
          city: "浙江省杭州市西湖区",
          address: "文三路138号东方通信大厦7楼501室"
        }, {
          name: "李四",
          phone: "13855036835",
          city: "浙江省杭州市西湖区",
          address: "文三路138号东方通信大厦7楼501室"
        }, {
          name: "李四",
          phone: "13855036835",
          city: "浙江省杭州市西湖区",
          address: "文三路138号东方通信大厦7楼501室"
        }],
        //选中的地址参数
        address: "",
        //时间显示
        timeShow: false,
        //时间数据保存
        timeData: new Date().getTime(),
        time: new Date().toLocaleString(),
        //封装该页数据
        // item:{
        //   phone: "",
        //   company: "",
        //   currentDate: "",
        //   count: "",
        //   weight: "",
        //   type: "",
        //   univercity:"",
        //   detail_address:"",
        //   time:"",
        //
        // },
        title: "",
        money: 1,
        label: "小计:共",
        label1: "件",
        count: "",
        //封装提交数据
        submit: {
          count: "",
          company: "",
          data: "",
          weight: "",
          type: "",
          address: "",
          phone: "",
          openid: ""
        }

      };
    },
    onLoad(options) {
      console.log("跳转成功");
      // console.log(options.phone)
      console.log(options);
      this.submit.phone = options.phone;
      this.submit.count = options.count;
      this.submit.company = options.company;
      this.submit.data = options.currentData;
      this.submit.type = options.type;
      this.submit.weight = options.weight;


      this.title = options.company;
      this.money = options.money * 100;
      this.count = options.count;


    },
    beforeMount() {
      console.log("---beforeMount----");
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
        console.log(this.submit);


      },
      editAddress(value){
        let self = this;
        self.editAddressShow = true;
        self.addressForm = value;
      },


      select_address(data) {
        this.addressShow = false;
        this.addressTitle = data.address;
        this.address = data.name + data.phone;
        this.isSelectAddress = false;
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
  .cancel-class {
    font-size: 14px;
    color: #1989fa;
  }

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

  .address-popup-class .van-popup--bottom {
    height: 300px;
  }

  .inner-address-class {
    height: 200px;
    overflow: auto;
  }

</style>
