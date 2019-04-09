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
      <van-icon name="arrow-left" @click="addressShow = false" class="back-icon"></van-icon>
      <van-radio-group :value="1" @change="onChange">
        <van-cell-group>
          <van-cell title="张三, 13000000" label="浙江省杭州市西湖区文三路138号东方通信大厦7楼501室">
            <van-icon slot="right-icon" name="edit" class="custom-icon"></van-icon>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </van-popup>

  </div>
</template>

<script>

  export default {
    name: "index",
    data: () => {
      return {
        addressShow: false
      };
    },
    methods: {
      selectAddress() {
        this.addressShow = true;
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
    width: 100%;
  }

  .back-icon {
    margin-left: 10px;
  }
</style>
