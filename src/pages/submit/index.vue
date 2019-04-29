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
    <van-popup :show="addressShow" position="bottom" class="address-popup-class" overlay="false" lock-scroll="true">
      <van-row class="title-class">
        <van-col span="4" class="cancel-class" @click="addressShow = false"><span>取消</span></van-col>
        <van-col span="16"><span>我的收货地址</span></van-col>
        <!--<van-col span="4" class="add-icon-class">
          <van-icon name="plus" @click="addAddress" class="back-icon"></van-icon>
        </van-col>-->
      </van-row>



      <div class="inner-address-class">

        <van-cell-group v-for="(item, index) in addressData" :key="index">

          <van-cell :title="item.receiverName + ' ' + item.receiverMobile" :label="item.receiverCollegeName + ' ' + item.receiverAddress"
                    @click="select_address(item)">
            <van-icon slot="right-icon" name="edit" class="custom-icon" size="20px"
                      @click.stop="editAddress(item)"></van-icon>
          </van-cell>
        </van-cell-group>

      </div>

        <van-button type="danger" size="large" class="inner-button-class" @click="addsubmit">
          新增收货地址
        </van-button>

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
        storageAddressKeyName:"address",
        storageKeyName:"newOrder",
        addressTitle: "",
        isSelectAddress: true,
        //地址显示
        addressShow: false,
        //地址数据
        addressData: [/*{
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
        }*/],
        add: {
          name: "",
          phone: "",
          city: "",
          colleage:"",
          detail_address: ""
        },
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
          expressName:"",
          province:"",
          district:"",
          city:""

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
    onShow() {
      console.log("----onshow---");
      let newAddress = this.hasNewAddress();
      if(newAddress || this.addressData.length == 0){
        this.getaddresslist();
        this.execSetAddressStorageSync(false);
      }

      console.log("地址");

    },
    beforeMount() {
      console.log("---beforeMount----");
    },
    methods: {
      //激活选择时间
      selectTime() {

      },
      getaddresslist(){
        wx.getStorage({
          key:"openid",
          success:(res)=> {

            //this.add.userOpenId=res.data;
            wx.request({
              url:"https://api.ypaot.com/api/v1/service-user/receive-info/list/"+res.data,
              method: "GET",
              success:(res)=>{
                console.log('请求');
                console.log(res.data.data);
                this.addressData = res.data.data;
              }
            })
          }
        })
      },
      //激活选择地址
      selectAddress() {
        this.addressShow = true;
        //console.log(this.addressData)

/*        wx.getStorage({
          key:"openid",
          success:(res)=> {
            console.log(res.data);
            //this.add.userOpenId=res.data;
            wx.request({
              url:"http://188.131.244.83/api/v1/service-user/receive-info/list/"+res.data,
              method: "GET",
              success:(res)=>{
                console.log(res.data.data)
                this.addressData = res.data.data
              }
            })
          }
        })*/
      },
      execSetStorageSync(data){
        wx.setStorageSync(this.storageKeyName,data);
      },

      //提交订单
      submitOrder() {
        let self=this;
        //console.log(self.submit);
        //let data=this.submit;
        //console.log('=========');
        let entity = {
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
          "receiverCity": self.submit.city,
          "receiverCollegeName": self.submit.colleage,
          "receiverDistrict": self.submit.district,
          "receiverMobile": self.submit.tel,
          "receiverName": self.submit.name,
          "receiverProvince": self.submit.province,
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
          success:(res)=> {

            console.log(res.data.data.id);
            this.execSetStorageSync(true);

            wx.navigateTo({
              //url:"/pages/payinfo/main?data="+JSON.stringify(res.data.data)
              url:"/pages/payinfo/main?id="+res.data.data.id
            })
          }
        })

      },
      //编辑收获地址
      editAddress(item){
        /*let self = this;
        self.editAddressShow = true;
        self.addressForm = value;*/
        console.log(item)
        wx.navigateTo({
          url:"/pages/orderaddress/main?item="+JSON.stringify(item)
        })
      },
      //新增收获地址
      addsubmit(){
        wx.navigateTo({
          url:"/pages/ordernewaddress/main"
        })
      },
      //选择收货地址
      select_address(data) {
        this.addressShow = false;
        console.log(data)

        this.addressTitle = data.receiverCollegeName+data.receiverAddress;
        this.address = data.receiverName + " " + data.receiverMobile;
        this.isSelectAddress = false;


        this.submit.tel = data.receiverMobile;
        this.submit.detail_address = data.receiverAddress;
        this.submit.name = data.receiverName;
        this.submit.colleage = data.receiverCollegeName;
        this.submit.province = data.receiverProvince;
        this.submit.district = data.receiverDistrict;
        this.submit.city = data.receiverCity;

        //this.submit.detail_address=data.detail_address;
        //this.submit.address=data.city;


      },
      execSetAddressStorageSync(data){
        wx.setStorageSync(this.storageAddressKeyName,data);
      },
      hasNewAddress(){
        let flag = wx.getStorageSync(this.storageAddressKeyName);
        return flag == true;
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
    height: 10%;
    line-height: 40px;
    font-size: 16px;
    text-align: center;

  }

  .address-popup-class .van-popup--bottom {
    height: 70%;
  }

  .inner-address-class {
    height: 80%;
    //overflow: auto;
  }
  .btn{
    height: 10%;
  }

  .inner-button-class{
    position: fixed;
    bottom:0;
    width: 100%;
  }


</style>
