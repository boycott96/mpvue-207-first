<template>
  <div>
    <div class="img-photo-class">
      <div class="img-class">
        <img src='/static/images/user.png' alt="" class="photo-class">
      </div>
    </div>
    <van-cell-group>
      <van-cell title="云跑红包" icon="point-gift-o" is-link @click=""></van-cell>
      <van-cell title="我的收货地址" icon="location-o" is-link @click="selectAddress"></van-cell>
      <van-cell title="客服电话" icon="phone-o" is-link value="10086" @click=""></van-cell>
      <van-cell title="退出账号" icon="smile-o" is-link @click=""></van-cell>

    </van-cell-group>
    <van-popup :show="addressShow" position="right" class="right-popup">
      <div class="back-div-class">
        <van-icon name="arrow-left" @click="addressShow = false" class="back-icon"></van-icon>
      </div>
      <div class="edit-address-class">
        <van-cell-group v-for="(item, index) in addressData" :key="index">
          <van-cell :title="item.name + ',' + item.phone" :label="item.city + item.address">
            <van-icon slot="right-icon" name="edit" class="custom-icon" size="20px"
                      @click="editAddress(item)"></van-icon>
          </van-cell>
        </van-cell-group>
        <van-popup :show="editAddressShow" position="right" class="right-popup-inner">
          <div class="back-div-class">
            <van-icon name="arrow-left" @click="editAddressShow = false" class="back-icon"></van-icon>
          </div>
          <div class="edit-address-class">
            <van-cell-group class="address-cell-group-class">
              <van-field :value="name" required clearable label="姓名" left-icon="user-o" placeholder="收货人姓名"
                         @click-icon="onClickIcon"></van-field>
              <van-field :value="phone" type="password" label="电话" placeholder="收货人手机号" left-icon="phone-circle-o"
                         :border="false"></van-field>
              <van-field :value="city" type="password" label="地区" placeholder="选择省/市/区" left-icon="home-o"
                         :border="false"></van-field>
              <van-field :value="address" type="password" label="详细地址" placeholder="街道门牌号、楼层房间号等信息" left-icon="aim"
                         :border="false"></van-field>
            </van-cell-group>
            <div>
              <van-button type="danger" size="large" class="inner-button-class">保存</van-button>
              <van-button size="large" class="inner-button-class">删除</van-button>
            </div>
          </div>
        </van-popup>
      </div>
    </van-popup>

  </div>
</template>

<script>

  export default {
    name: "index",
    data: () => {
      return {
        addressShow: false,
        editAddressShow: false,
        addressData: [{
          name: '张三',
          phone: '13855036835',
          city: '浙江省杭州市西湖区',
          address: '文三路138号东方通信大厦7楼501室',
        }, {
          name: '李四',
          phone: '13855036835',
          city: '浙江省杭州市西湖区',
          address: '文三路138号东方通信大厦7楼501室',
        }]
      };
    },
    methods: {
      selectAddress() {
        this.addressShow = true;
      },

      editAddress(value) {
        console.log(value);
        this.editAddressShow = true;
      }
    },
    created() {

    }
  };
</script>

<style>
  .img-photo-class {
    background: #ECECEC;
    height: 120px;
    padding: 40px;
  }

  .photo-class {
    height: 100px;
    width: 100px;
    border-radius: 50%;
  }

  .img-class {
    height: 100px;
    text-align: center;
  }

  .right-popup .van-popup--right {
    height: 100%;
    width: 95%;
  }

  .right-popup-inner .van-popup--right {
    width: 90%;
    height: 100%;
  }

  .back-icon {
    margin-left: 10px;
    margin-top: 5px;
  }

  .edit-address-class {
    padding-top: 10px;
  }

  .back-div-class {
    height: 25px;
    line-height: 40px;
  }

  .address-cell-group-class .van-cell-group {
    margin-bottom: 20px;
  }

  .inner-button-class .van-button--large {
    width: 90%;
    margin: 15px;
    height: 40px;
    line-height: 40px;
  }

</style>
