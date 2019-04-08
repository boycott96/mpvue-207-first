import { Token } from 'token.js';
import { Config } from 'config.js';


class Base {
  constructor(){
    "use strict";
    this.baseRestUrl=Config.restUrl;
    this.onPay=Config.onPay;
  }
  //http请求类 当noRefech为true时，不做未授权重试机制
  request(params,noRefetch){
    var that=this;
    url=this.baseRestUrl+params.url;
    if(!params.type){
      params.type='get'
    }
    //不需要再次 组装地址
    if(params.setUpUrl==false){
      url=params.url;
    }
    wx.request({
      url:url,
      data:params.data,
      method:params.type,
      header:{
        'content-type':'application/json',
        'token':wx.getStorageSync('token')
      },
      success(res) {
        //判断以2开头的状态吗为正确
        //异常不要返回到回调中，就在request中处理，记录日志并showToast一个统一的错误即可
        var code=res.statusCode.toString();
        var startChar=code.charAt(0);
        if(startChar=='2'){
          params.successCallback&&params.successCallback(res.data);
        }else{
          if(code=='401'){
            if(!noRefetch){
              that._refetch(params);
            }
          }
          that._processError(res);
          params.errorCallback&&params.errorCallback(res.data);
        }
      },
      fail(err){
        that._processError(err);
      }

    })
  }
  _processError(err){
    console.log(err)
  }

  _refetch(param){
    var token=new Token();
    token.getTokenFromServer((token)=>{
      this.request(param,true);
    });
  }

  //获得元素上绑定的值
  getDataSet(event,key){
    return event.currentTarget.dataset[key];
  }

};

export {Base};
