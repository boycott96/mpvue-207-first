<template>
  <div class="div">

    <div class="div1">
      <text>请完成微信授权以继续使用</text>
    </div>

    <div class="div2">
      <img v-if="isShow" :src="userInfo.avatarUrl">
      <button v-else open-type="getUserInfo" @getuserinfo="getUserInfo">授权用户登录信息</button>
    </div>


  </div>

</template>

<script>


  export default {
   data(){
     return{
        userInfo:{},
       isShow:false,
       status:""
     }
   },
    created(){
      console.log('-----created-----')
      wx.getStorage({
        key:'can_getuserinfo',
        success(res) {
          console.log('kkkk')
          if(res.data){
            console.log(res.data)
            wx.switchTab({
              url:'/pages/index/main'
            })
          }
        }
      })
    },
    onLoad(){
     console.log('---onLoad----')
    },
    beforeMount(){
      console.log('---beforeMount----')

      this.handleGetUserInfo()


    },
    mounted(){
      console.log('---mounted----')
    },
    methods:{
     //获取用户登陆信息
      handleGetUserInfo(){
        wx.getUserInfo({
          success:(data)=>{
           // console.log(data)
            //更新data中的数据
            this.userInfo=data.userInfo
            this.isShow=true
            wx.login({
              success(res) {
                console.log(res)
              }
            })
          },
          fail:()=>{
            console.log('获取失败')
          }
        })
      },
     getUserInfo(data){
       //console.log(data)
       //判断用户是否授权
       if(data.mp.detail.rawData){
         //用户授权
         this.handleGetUserInfo()


         wx.switchTab({
           url:'/pages/index/main'
         })

         console.log('行不行')

         wx.getSetting({
           success(res) {
             console.log(res)
             if(res.authSetting['scope.userInfo']){
               //授权成功
               wx.setStorage({
                 key:'can_getuserinfo',
                 data:1,
               })
             }else{
               wx.setStorage({
                 key:'can_getuserinfo',
                 data:0,
               })
             }
           },
           fail(res) {
             console.log(res)
           }
         })
       }
     }
    }
  };
</script>

<style scoped>
  .div{
    display: flex;
    flex-direction: column;
    padding-top: 500rpx;
    align-items: center;
  }
  .div1 text{
    align-items: center;
    font-size: 26rpx;

  }
  .div2{
    padding: 10rpx;
  }
  button{
    width: 600rpx;
    background: #3CC43C;
    align-items: center;
  }
</style>
