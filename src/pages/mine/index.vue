<template>
  <div class="div">
    <div class="img-photo-class">
      <el-row>
        <el-col span="4" class="img-class">
          <img class="photo-class" src="/static/images/user.png" alt="">
        </el-col>
        <el-col span="20" class="name-class">
          <el-col>张三</el-col>
          <el-col>ID:123456</el-col>
        </el-col>
      </el-row>
    </div>
    <!--<div class="div2">
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
    </div>-->
  </div>
</template>

<script>

  export default {
    name: "index",
    data: () => {
      return {}
    },
    methods: {},
    created() {

    }
  };
</script>

<style>
  .img-photo-class {
    background: #ECECEC;
    height: 150px;
  }

  .photo-class {
    height: 100px;
    width: 100px;
  }

  .img-class {
    height: 100px;
  }

  .name-class {
    height: 100px;
  }

  .div {
    background: #ECECEC;
  }
</style>
