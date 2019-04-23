<template>
  <div class="edit-address-class">
    <van-cell-group class="address-cell-group-class">
      <van-field :value="add.name" clearable label="姓名" left-icon="user-o"
                 placeholder="收货人姓名" @change="changeName"></van-field>
      <van-field :value="add.phone" type="text" label="电话" placeholder="收货人手机号"
                 left-icon="phone-circle-o"
                 :border="false" @change="changePhone"></van-field>
      <van-field :value="add.area" type="text" label="地区" left-icon="home-o" readonly
                 placeholder="省/市/区"
                 :border="false" @click="activeArea"></van-field>
      <van-field :value="add.colleage" type="text" label="学校" placeholder="所在学校"
                 left-icon="phone-circle-o"
                 :border="false" @change="changeColleage"></van-field>


      <van-field :value="add.address" type="text" label="详细地址" placeholder="街道门牌号、楼层房间号等"
                 left-icon="aim"
                 :border="false" @change="changeAddress"></van-field>


      <!--区域弹出框-->
      <van-popup :show="show" position="bottom">
        <van-area :area-list="AreaList" @cancel="show = false" @confirm="onArea"></van-area>
      </van-popup>
    </van-cell-group>
    <div class="div1">
      <div class="div2"><van-button type="danger" size="large" class="inner-button-class" @click="addsubmit">保存</van-button></div>
    </div>

  </div>
</template>

<script>
  export default {
    data:()=>{
      return {
        show:false,
        AreaList: {
          province_list: {
            340000: "安徽省"
          },
          city_list: {
            340100: '合肥市',
            340200: '芜湖市',
            340300: '蚌埠市',
            340400: '淮南市',
            340500: '马鞍山市',
            340600: '淮北市',
            340700: '铜陵市',
            340800: '安庆市',
            341000: '黄山市',
            341100: '滁州市',
            341200: '阜阳市',
            341300: '宿州市',
            341500: '六安市',
            341600: '亳州市',
            341700: '池州市',
            341800: '宣城市',
          },
          county_list: {
            340102: '瑶海区',
            340103: '庐阳区',
            340104: '蜀山区',
            340111: '包河区',
            340121: '长丰县',
            340122: '肥东县',
            340123: '肥西县',
            340124: '庐江县',
            340181: '巢湖市',
            340190: '高新技术开发区',
            340191: '经济技术开发区',
            340202: '镜湖区',
            340203: '弋江区',
            340207: '鸠江区',
            340208: '三山区',
            340221: '芜湖县',
            340222: '繁昌县',
            340223: '南陵县',
            340225: '无为县',
            340302: '龙子湖区',
            340303: '蚌山区',
            340304: '禹会区',
            340311: '淮上区',
            340321: '怀远县',
            340322: '五河县',
            340323: '固镇县',
            340402: '大通区',
            340403: '田家庵区',
            340404: '谢家集区',
            340405: '八公山区',
            340406: '潘集区',
            340421: '凤台县',
            340422: '寿县',
            340503: '花山区',
            340504: '雨山区',
            340506: '博望区',
            340521: '当涂县',
            340522: '含山县',
            340523: '和县',
            340602: '杜集区',
            340603: '相山区',
            340604: '烈山区',
            340621: '濉溪县',
            340705: '铜官区',
            340706: '义安区',
            340711: '郊区',
            340722: '枞阳县',
            340802: '迎江区',
            340803: '大观区',
            340811: '宜秀区',
            340822: '怀宁县',
            340824: '潜山县',
            340825: '太湖县',
            340826: '宿松县',
            340827: '望江县',
            340828: '岳西县',
            340881: '桐城市',
            341002: '屯溪区',
            341003: '黄山区',
            341004: '徽州区',
            341021: '歙县',
            341022: '休宁县',
            341023: '黟县',
            341024: '祁门县',
            341102: '琅琊区',
            341103: '南谯区',
            341122: '来安县',
            341124: '全椒县',
            341125: '定远县',
            341126: '凤阳县',
            341181: '天长市',
            341182: '明光市',
            341202: '颍州区',
            341203: '颍东区',
            341204: '颍泉区',
            341221: '临泉县',
            341222: '太和县',
            341225: '阜南县',
            341226: '颍上县',
            341282: '界首市',
            341302: '埇桥区',
            341321: '砀山县',
            341322: '萧县',
            341323: '灵璧县',
            341324: '泗县',
            341390: '经济开发区',
            341502: '金安区',
            341503: '裕安区',
            341504: '叶集区',
            341522: '霍邱县',
            341523: '舒城县',
            341524: '金寨县',
            341525: '霍山县',
            341602: '谯城区',
            341621: '涡阳县',
            341622: '蒙城县',
            341623: '利辛县',
            341702: '贵池区',
            341721: '东至县',
            341722: '石台县',
            341723: '青阳县',
            341802: '宣州区',
            341821: '郎溪县',
            341822: '广德县',
            341823: '泾县',
            341824: '绩溪县',
            341825: '旌德县',
            341881: '宁国市',
          }
        },

        add: {
          userOpenId:"",
          name: "",
          phone: "",
          province:"",
          city: "",
          district:"",
          colleage:"",
          address: "",
          area:""
        }
      }
    },
    onLoad(){
      wx.getStorage({
        key:"openid",
        success:(res)=> {
          console.log(res.data);
          this.add.userOpenId=res.data;
        }
      })
    },
    methods: {
      changePhone(value) {
        let self = this;
        self.add.phone = value.mp.detail;
      },

      changeName(value) {
        let self = this;
        self.add.name = value.mp.detail;
      },

      changeAddress(value) {
        let self = this;
        self.add.address = value.mp.detail;
      },

      changeArea(value){
        let self = this;
        self.add.city = value.mp.detail;
      },

      changeColleage(value){
        let self = this;
        self.add.colleage = value.mp.detail;
      },
      //激活区域弹出框
      activeArea(){
        this.show = true;
      },
      //选中市区
      onArea(data) {
        this.show = false;
        this.add.area = data.mp.detail.values[0].name + data.mp.detail.values[1].name + data.mp.detail.values[2].name;
        this.add.province = data.mp.detail.values[0].name;
        this.add.city = data.mp.detail.values[1].name;
        this.add.district = data.mp.detail.values[2].name;

      },

      addsubmit(){
        let self = this;
        let entity={
          "userOpenId": self.add.userOpenId,
          "receiverName": self.add.name,
          "receiverCollegeName":self.add.colleage,
          "receiverMobile":self.add.phone,
          "receiverAddress":self.add.address,
          "receiverProvince": self.add.province,
          "receiverCity": self.add.city,
          "receiverDistrict": self.add.district
        };
        console.log(entity)
        wx.request({
          url:"https://api.ypaot.com/api/v1/service-user/receive-info",
          data: entity,
          method: "POST",
          header:{
            'content-type': 'application/json'
          },
          success(res) {
            console.log(res)
            wx.navigateTo({
              url:"/pages/address/main"
            })
          }
        })

      }
    }
  };
</script>

<style>
  .address-cell-group-class{
    margin-bottom: 20px;
  }
  .inner-button-class{


    height: 40px;
    line-height: 40px;

  }
  .edit-address-class{
    padding-top: 10px;
  }
  .div1{
    width: 80%;
    margin: 0 auto;
    margin-top: 20px;
  }
  .div3{
    margin-top: 20px;
  }
</style>
