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

      <van-cell class="company-class" title="收件人姓名" :value="submit.expressName" size="large"></van-cell>
      <van-cell class="company-class" title="手机尾号" :value="submit.tel_last" size="large"></van-cell>
    </div>

    <van-submit-bar :price="money" button-text="提交订单" @click="submitOrder"></van-submit-bar>
    <!--弹出层-->
    <van-popup :show="addressShow" position="bottom" class="address-popup-class">
      <van-row class="title-class">
        <van-col span="4" class="cancel-class" @click="addressShow = false"><span>取消</span></van-col>
        <van-col span="16"><span>我的收货地址</span></van-col>
        <!--<van-col span="4" class="add-icon-class">
          <van-icon name="plus" @click="addAddress" class="back-icon"></van-icon>
        </van-col>-->
      </van-row>



      <div class="inner-address-class">

        <van-cell-group v-for="(item, index) in addressData" :key="index">

          <van-cell :title="item.name + ',' + item.phone" :label="item.city + item.colleage + item.detail_address"
                    @click="select_address(item)">
            <van-icon slot="right-icon" name="edit" class="custom-icon" size="20px"
                      @click="editAddress(item)"></van-icon>
          </van-cell>
        </van-cell-group>
        <van-button type="danger" size="large" class="inner-button-class" @click="addsubmit">
          新增收货地址
        </van-button>

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
          phone: "13855031111",
          city: "安徽省滁州市凤阳县",
          colleage:"安徽科技学院",
          detail_address: "东四207"
        }, {
          name: "李四",
          phone: "13855032222",
          city: "安徽省合肥市",
          colleage:"安徽农业大学",
          detail_address: "研究生404"
        }, {
          name: "李四",
          phone: "13855032222",
          city: "安徽省合肥市",
          colleage:"安徽农业大学",
          detail_address: "研究生404"
        }, {
          name: "李四",
          phone: "13855032222",
          city: "安徽省合肥市",
          colleage:"安徽农业大学",
          detail_address: "研究生404"
        }, {
          name: "李四",
          phone: "13855032222",
          city: "安徽省合肥市",
          colleage:"安徽农业大学",
          detail_address: "研究生404"
        }, {
          name: "李四",
          phone: "13855032222",
          city: "安徽省合肥市",
          colleage:"安徽农业大学",
          detail_address: "研究生404"
        }, {
          name: "李四",
          phone: "13855032222",
          city: "安徽省合肥市",
          colleage:"安徽农业大学",
          detail_address: "研究生404"
        }, {
          name: "李四",
          phone: "13855032222",
          city: "安徽省合肥市",
          colleage:"安徽农业大学",
          detail_address: "研究生404"
        }, {
          name: "李四",
          phone: "13855032222",
          city: "安徽省合肥市",
          colleage:"安徽农业大学",
          detail_address: "研究生404"
        }],
        //选中的地址参数
        address: "",
        //时间显示
        timeShow: false,
        //时间数据保存
        timeData: new Date().getTime(),
        time: new Date().toLocaleString(),
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
          tel_last: "",
          openid: "",
          colleage:"",
          detail_address:"",
          tel:"",
          name:"",
          money:"",
          expressName:""
        }

      };
    },
    onLoad(options) {
      console.log("跳转成功");
      // console.log(options.phone)
      console.log(options);
      wx.getStorage({
        key:"openid",
        success:(res)=> {
         console.log(res.data);
          this.submit.openid=res.data;
        }
      });
      this.submit.tel_last = options.phone;
      this.submit.count = options.count*1.0;
      this.submit.company = options.company;
      this.submit.data = options.currentData;
      this.submit.type = options.type;
      this.submit.weight = options.weight;
      //this.submit.openid=openid;
      this.submit.money = options.money*100;
      this.submit.expressName=options.name;
      this.submit.weight = options.weight*1.0;

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
        let self=this;
        //console.log(self.submit);
        //let data=this.submit;
        //console.log('=========');
        let entity = {
        /*  userOpenId: self.submit.openid,
          receiverName: self.submit.name,//收货地址中的名字
          expressReceiveName: self.submit.expressName,//快件上的名字
          receiverMobile: self.submit.tel,//快件地址中的电话
          expressCompany: self.submit.company,//快件公司
         //expressArriveDate:self.submit.data,//收件日期
          receiverCollegeName: self.submit.colleage,//大学名称
          receiverProvince: "",//省
          receiverCity: "",//城市
          receiverDistrict: "",//地区
          receiverAddress: self.submit.detail_address,//xxx栋xxx宿舍
          //orderPayment: self.submit.money,//支付金额
          //expressWeightLevel:"",//快件重量
          expressType: self.submit.type,//快件种类
          expressTailNum: self.submit.tel_last,//快件的手机尾号
          expressSerialNum: ""*/


         // "expressArriveDate": self.submit.data,
          "expressCompany": self.submit.company,
          "expressReceiveName": self.submit.expressName,
          "expressSerialNum": "",
          "expressTailNum": self.submit.tel_last,
          "expressType":  self.submit.type,
          "expressWeightLevel": 0,
          "expressCount":self.submit.count,

          //"orderPayment": self.submit.money,
          "orderStatus": 0,
          "expressWeightLevel":self.submit.weight,
          "receiverAddress": self.submit.detail_address,
          "receiverCity": "",
          "receiverCollegeName": self.submit.colleage,
          "receiverDistrict": "",
          "receiverMobile": self.submit.tel,
          "receiverName": self.submit.name,
          "receiverProvince": "",
          "userOpenId": self.submit.openid
        };
        console.log(entity);
        wx.request({
          url: "https://api.ypaot.com/api/v1/assist-get/order/create",
          data: entity,
          method: "POST",
          header:{
            'content-type': 'application/json'
          },
          //dataType: "json",
          success(res) {
            console.log(res.data);

            wx.navigateTo({
              url:"/pages/payinfo/main?data="+JSON.stringify(res.data.data)
            })
          }
        })

      },
      editAddress(){
       /* let self = this;
        self.editAddressShow = true;
        self.addressForm = value;*/
      },


      select_address(data) {
        this.addressShow = false;


        this.addressTitle = data.colleage+data.detail_address;
        this.address = data.name + " " + data.phone;
        this.isSelectAddress = false;
        this.submit.tel=data.phone;
        this.submit.detail_address=data.detail_address;
        this.submit.name=data.name;
        this.submit.colleage=data.colleage;
        this.submit.detail_address=data.detail_address;
        this.submit.address=data.city;


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
    height: 70%;
  }

  .inner-address-class {
    height: 200px;
    overflow: auto;
  }

</style>
