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

  const appid='wxd546444ad8aaaf05'
  const secret='e2f6eaecb76a6a8604d447b8ebfe5128'
  export default {
   data(){
     return{
        userInfo:{},
       isShow:false
     }
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
         console.log('fffwww')

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
