<template>
  <div class="divp">
  <van-tabs :active="0" @click="onChange" sticky="true">
    <van-tab title="全部订单">
      <div class="panel-class">
        <van-cell-group v-for="(item, index) in orderlist" :key = "index">
              <van-card :num="item.expressCount" :price="item.orderPayment"  :desc="item.createTime" :title="item.expressCompany" :thumb="imageURL" @click="selectItem(item)">
                <view slot="footer">
                  <van-button size="mini">删除</van-button>
                  <!--<van-button size="mini" style="color: #07c160">{{item.orderStatus==0 ? "待付款": "去评价"}}</van-button>-->
                  <van-button v-if="item.orderStatus==0" size="mini" style="color: #07c160">待付款</van-button>
                  <van-button v-if="item.orderStatus==1" size="mini" style="color: #07c160">已付款</van-button>
                  <van-button v-if="item.orderStatus==2" size="mini" style="color: #07c160">订单失效</van-button>
                </view>
              </van-card>
        </van-cell-group>
      </div>
    </van-tab>

    <van-tab title="待付款">
      <van-card num="3" price="2.00" desc="2019-3-29 15-30-30" title="韵达快递" :thumb="imageURL">
      <view slot="footer">
        <van-button size="mini">删除</van-button>
        <van-button size="mini" style="color: #07c160">去付款</van-button>
      </view>
      </van-card>
    </van-tab>


    <van-tab title="待评价">
      <van-card num="3" price="2.00" desc="2019-3-29 15-30-30" title="韵达快递" :thumb="imageURL">
        <view slot="footer">
          <van-button size="mini">删除</van-button>
          <van-button size="mini" style="color: #07c160">去评价</van-button>
        </view>
      </van-card>

    </van-tab>

  </van-tabs>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        isDownLoading:true,
        active:1,
        imageURL:"/static/images/sf.jpg",
        orderlist: [
         /* {
            expressCompany: "圆通快递",
            expressCount: "1",
            orderPayment: "1.00",
            createTime: "2019-3-29 15-30-30",
            orderStatus: 0
          },  {
            expressCompany: "圆通快递",
            expressCount: "1",
            orderPayment: "1.00",
            createTime: "2019-3-29 15-30-30",
            orderStatus: 0
          },  {
            expressCompany: "圆通快递",
            expressCount: "1",
            orderPayment: "1.00",
            createTime: "2019-3-29 15-30-30",
            orderStatus: 0
          },  {
            expressCompany: "圆通快递",
            expressCount: "1",
            orderPayment: "1.00",
            createTime: "2019-3-29 15-30-30",
            orderStatus: 0
          },  {
            expressCompany: "圆通快递",
            expressCount: "1",
            orderPayment: "1.00",
            createTime: "2019-3-29 15-30-30",
            orderStatus: 0
          },  {
            expressCompany: "圆通快递",
            expressCount: "1",
            orderPayment: "1.00",
            createTime: "2019-3-29 15-30-30",
            orderStatus: 0
          },  {
            expressCompany: "圆通快递",
            expressCount: "1",
            orderPayment: "1.00",
            createTime: "2019-3-29 15-30-30",
            orderStatus: 0
          },  {
            expressCompany: "圆通快递",
            expressCount: "1",
            orderPayment: "1.00",
            createTime: "2019-3-29 15-30-30",
            orderStatus: 0
          },  {
            expressCompany: "圆通快递",
            expressCount: "1",
            orderPayment: "1.00",
            createTime: "2019-3-29 15-30-30",
            orderStatus: 0
          },  {
            expressCompany: "圆通快递",
            expressCount: "1",
            orderPayment: "1.00",
            createTime: "2019-3-29 15-30-30",
            orderStatus: 0
          },  {
            expressCompany: "圆通快递",
            expressCount: "1",
            orderPayment: "1.00",
            createTime: "2019-3-29 15-30-30",
            orderStatus: 0
          },  {
            expressCompany: "圆通快递",
            expressCount: "1",
            orderPayment: "1.00",
            createTime: "2019-3-29 15-30-30",
            orderStatus: 0
          },  {
            expressCompany: "圆通快递",
            expressCount: "1",
            orderPayment: "1.00",
            createTime: "2019-3-29 15-30-30",
            orderStatus: 0
          },  {
            expressCompany: "圆通快递",
            expressCount: "1",
            orderPayment: "1.00",
            createTime: "2019-3-29 15-30-30",
            orderStatus: 0
          },  {
            expressCompany: "天天快递",
            expressCount: "1",
            orderPayment: "1.00",
            createTime: "2019-3-29 15-30-30",
            orderStatus: 0
          },*/

        ],
        pageIndex:1,
        isLoadedAll:false,
        storageKeyName:"newOrder"
      };
    },
    onShow(){
      console.log('onShow')
      //console.log(this.orderlist);
      let newOrderFlag = this.hasNewOrder();
      if(newOrderFlag||this.orderlist.length==0){
        this.onPullDownRefresh();
        this.pageIndex=1;
        this.getOrderList();
        this.execSetStorageSync(false)//更新标志位
      }

      /*wx.getStorage({
        key: "openid",
        success:(res)=> {
          //console.log(res.data)
          let entity = {
            "page": this.pageIndex,
            "size": 15,
            "sort": "string",
            "userOpenId": res.data
          }
          wx.request({
              url:"https://api.ypaot.com/api/v1/assist-get/order/list",
              data: entity,
              method: "POST",
              header: {
                'content-type': 'application/json'
              },
              success:(res)=> {
                console.log(res);
                this.orderlist = res.data.data.content;
              }
        })
        }
      })*/

    },
    onReachBottom(){
      console.log('ssss')
      this.pageIndex++;
      if(!this.isLoadedAll){
        console.log(this.pageIndex)
        this.getOrderList()
      }


    },


    /*getOrderList(){
      wx.getStorage({
        key: "openid",
        success:(res)=> {
          //console.log(res.data)
          let entity = {
            "page": this.pageIndex,
            "size": 15,
            "sort": "string",
            "userOpenId": res.data
          }
          wx.request({
            url:"https://api.ypaot.com/api/v1/assist-get/order/list",
            data: entity,
            method: "POST",
            header: {
              'content-type': 'application/json'
            },
            success:(res)=> {
              console.log(res);
              this.orderlist = this.orderlist.concat(res.data.data.content);
            }
          })
        }
      })
    },*/

    methods:{
      getOrderList(){
        wx.getStorage({
          key: "openid",
          success:(res)=> {
            //console.log(res.data)
            let entity = {
              "page": this.pageIndex,
              "size": 15,
              "userOpenId": res.data
            }
            wx.request({
              url:"https://api.ypaot.com/api/v1/assist-get/order/list",
              data: entity,
              method: "POST",
              header: {
                'content-type': 'application/json'
              },
              success:(res)=> {
                console.log(res);

                console.log(res.data.data.content.length)
                if(res.data.data.content.length>0){
                this.orderlist = this.orderlist.concat(res.data.data.content);
                }else{
                  this.isLoadedAll = true;
                }
              }
            })
          }
        })
      },
      execSetStorageSync(data){
        wx.setStorageSync(this.storageKeyName,data);
      },
      hasNewOrder(){
        var flag = wx.getStorageSync(this.storageKeyName);
        return flag == true;
      },
      /*下拉刷新页面*/
      onPullDownRefresh(){
        //let that=this;
        this.isLoadedAll = false;
        this.orderlist=[];  //订单初始化
      /*  this._getOrders(()=>{
          that.data.isLoadedAll=false;  //是否加载完全
          that.data.pageIndex=1;
          wx.stopPullDownRefresh();
          order.execSetStorageSync(false);  //更新标志位
        });*/
      },
      onChange(event){
        /*console.log()
        wx.showToast({
          title:'切换到标签${event.detail.index+1}',
          icon:'none'
        })*/
        console.log('切换')
      },
      selectItem(item){
        console.log('************')
        console.log(item)
        wx.navigateTo({
          //url:"/pages/payinfo/main?data="+JSON.stringify(item)
          url:"/pages/payinfo/main?id="+item.id
        })
      },
      renderTime(date) {
        var dateee = new Date(date).toJSON();
        return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
      },
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
  .panel-class{
    margin-bottom: 10px;
    border-bottom: 1rpx solid #ECECEC;
  }



</style>
