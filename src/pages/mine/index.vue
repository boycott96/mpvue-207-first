<template>
  <div class="div">
    <div class="img-photo-class">
      <div class="img-class">
        <img src='/static/images/user.png' alt="" class="photo-class">
      </div>
    </div>
    <div class="div2">
      <div class="div3">
        <text>云跑红包</text>
      </div>
      <div class="div4">
        <text>我的收货地址</text>
      </div>
      <div class="div5">
        <text>客服电话：10086</text>
      </div>
      <div class="div6">
        <text>退出账号</text>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "index",
    data: () => {
      return {};
    },
    methods: {},
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

  .div {
  }
</style>
