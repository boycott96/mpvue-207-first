import {Config} from './config.js'


export default class Token {
  constructor(){
    this.verifyUrl=Config.restUrl+'token/verify';
    this.tokenUrl=Config.restUrl+'token/user';
  }
  verify(){
    var token=wx.getStorageSync('token');
    if(!token){

    }
  }

  _verrifyFromServer(token){
    var that=this;
    wx.request({
      url:that.verifyUrl,
      method:'POST',
      data:{
        token:token
      },
      success(res) {
        var valid=res.data.isValid;
        if(!valid){
          that.getTokenFromServer();
        }

      }
    })
  }

  getTokenFromServer(callBack){
    var that=this;
    wx.login({
      success(res) {
        wx.request({
          url:that.tokenUrl,
          method:'POST',
          data:{
            code:res.code
          },
          success(res) {
            wx.setStorageSync('token',res.data.token);
            callBack&&callBack(res.data.token);
          }
        })
      }
    })
  }
}


