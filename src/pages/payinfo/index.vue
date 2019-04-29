<template>

  <div class="panel-class">

    <div class="one-panel-class">
      <!--<van-field placeholder="请在15分钟之内完成支付，超时将自动取消" left-icon="logistics" disabled :border="false"/>-->
      <van-field v-if="info.status==2"  placeholder="支付超时，订单已取消" left-icon="logistics" disabled :border="false"/>

      <van-field v-if="info.status==0" placeholder="请在15分钟之内完成支付，超时将自动取消" left-icon="logistics" disabled :border="false"/>
      <!--<van-field  placeholder="订单已提交，待支付" left-icon="logistics" disabled :border="false"/>-->

    </div>

   <div v-if="info.status==0" class="two-panel-class">
      <van-cell>
        <view slot="title">
          <view class="van-cell-text">剩余支付时间{{time}}</view>
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
        storageKeyName:"newOrder",
        createTime:"",
        time:"",
        timer:"",
        id:"",
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
          orderPayment:"",
          status:""

        }
      };

    },
    onLoad(options){

      this.id=options.id;
      //this.getOrder(options.id);
      //this.getdata(options);
      //let data = JSON.parse(options.data);
      //this.info.status = data.orderStatus;
      // console.log(data)
      // console.log(data.id)
        /* this.info.company = data.expressCompany;
         this.info.receiverName = data.receiverName;
           this.info.tel = data.receiverMobile;
           this.info.colleage = data.receiverCollegeName;
           this.info.detail_address = data.receiverAddress;
           this.info.id = data.id;
           this.info.createTime = data.createTime;
           this.info.orderStatus = data.orderStatus;
           this.info.count = data.expressCount;
           this.info.orderPayment = data.orderPayment;
           this.info.status = data.orderStatus;
           this.createTime = data.createTime;*/
      // console.log(this.createTime);
       //console.log(this.renderTime(this.createTime));
      //
       //console.log(this.dateToStamp(this.renderTime(this.createTime)))
    },
    onShow(){
      this.getOrder(this.id);
    },
    /*onShow(){
      //this.test();
    /!*  let data=new Date();
      let dataFormat = this.formatDate(data);
      console.log(dataFormat);
      let startTime = this.createTime;
      console.log()*!/
    //将起始时间转换成时间戳
      let startTime = this.createTime;
      let startStamp = this.dateToStamp(this.renderTime(startTime));
      console.log(startStamp);
      //将现在的时间转换成时间戳
      let nowTime = this.formatDate();
      let nowStamp= this.dateToStamp(nowTime);
      console.log(nowStamp);
     /!* if(1800+startStamp-nowStamp>=0){
        console.log('待付款');
      }*!/
      let time = 30+startStamp-nowStamp-1;
      if(this.info.status == 0){

      }
      if(time>0){
        console.log('jishiqi')
        this.jishiqi(time);
      }/!*else{
        this.info.status=2;
        this.execSetStorageSync(true);

      }*!/
    },*/
  /*  onUnload(){
      clearInterval(this.timer);
    },*/
    methods: {
      //数据库时间+8，并格式化成yy-mm-dd hh-mm-ss
      renderTime(date) {
          var dateee = new Date(date).toJSON();
          return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
        },
      //转换成时间戳 单位秒
      dateToStamp(datatime){
        let ts = new Date(datatime).valueOf()/1000;
        return ts;
      },
      //将现在的时间格式化时间成yy-mm-dd hh-mm-ss
      formatDate(){
        var date = new Date();

        var year = date.getFullYear(),
          month = date.getMonth()+1,//月份是从0开始的
          day = date.getDate(),
          hour = date.getHours(),
          min = date.getMinutes(),
          sec = date.getSeconds();
        var newTime = year + '-' +
          (month < 10? '0' + month : month) + '-' +
          (day < 10? '0' + day : day) + ' ' +
          (hour < 10? '0' + hour : hour) + ':' +
          (min < 10? '0' + min : min) + ':' +
          (sec < 10? '0' + sec : sec);

        return newTime;
      },
      jishiqi(time){
        let that = this;
        console.log("计时器")
       let second = time % 60;
       let minute = (time-second)/60;
       console.log(minute+" "+second);
       this.timer = setInterval(function(){
         console.log('**********')
        if(minute*1.0>=0 && second>=0){
         console.log('========')
           let left_time = that.add(minute)+":"+that.add(second);
           that.time = left_time;
           console.log(that.time)
           console.log('0000000');
           second--;
           if(second<0){
             second = 59;
             minute--;
           }
         }else{
          console.log('退出计时');
          that.info.status = 2;
          that.execSetStorageSync(true);
          clearInterval(that.timer);
        }
     console.log("hahhahah")
       },1000);
      },
      add(m){
        return m < 10 ? '0' +m : m;
      },
      test(){
        this.time=6663
      },
      execSetStorageSync(data){
        wx.setStorageSync(this.storageKeyName,data);
      },
      getdata(options){
        let that = this;
        let data = JSON.parse(options.data)
        console.log(data)
        console.log(data.id)
        this.info.company = data.expressCompany;
        this.info.receiverName = data.receiverName;
        this.info.tel = data.receiverMobile;
        this.info.colleage = data.receiverCollegeName;
        this.info.detail_address = data.receiverAddress;
        this.info.id = data.id;
        this.info.createTime = data.createTime;
        this.info.orderStatus = data.orderStatus;
        this.info.count = data.expressCount;
        this.info.orderPayment = data.orderPayment;
        this.info.status = data.orderStatus;
        this.createTime = this.renderTime(data.createTime);
      },
      getOrder(id){
        wx.request({
          url:"https://api.ypaot.com/api/v1/assist-get/order/"+id,
          method: "GET",
          dataType: "json",
          success:(res)=> {
            //console.log('*****')
            console.log(res.data.data)
            this.info.company = res.data.data.expressCompany;
            this.info.receiverName = res.data.data.receiverName;
            this.info.tel = res.data.data.receiverMobile;
            this.info.colleage = res.data.data.receiverCollegeName;
            this.info.detail_address = res.data.data.receiverAddress;
            this.info.id = res.data.data.id;
            this.info.createTime = res.data.data.createTime;
            this.info.orderStatus = res.data.data.orderStatus;
            this.info.count = res.data.data.expressCount;
            this.info.orderPayment = res.data.data.orderPayment;
            this.info.status = res.data.data.orderStatus;
            this.createTime = res.data.data.createTime;
            //let that = this;
            //将起始时间转换成时间戳
            let startTime = this.createTime;
            let startStamp = this.dateToStamp(this.renderTime(startTime));
            console.log(startStamp);
            //将现在的时间转换成时间戳
            let nowTime = this.formatDate();
            let nowStamp= this.dateToStamp(nowTime);
            console.log(nowStamp);
            let time = 1800+startStamp-nowStamp-1;
            if(time>0){
              this.jishiqi(time);
            }
          }
        })
      }
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
    font-size: 15px;
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
