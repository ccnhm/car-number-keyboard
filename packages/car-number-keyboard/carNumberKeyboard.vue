<template>
  <div class="contain" @click.stop>
    <div class="title" v-if="title || HkCarNoSupport">
      <div class="titleCon">{{ title }}</div>
      <div class="carTypeSwitch" v-if="HkCarNoSupport" @click="changeHKCarNO"><img :src="isHKCarNo?require('../../static/checked.png'):require('../../static/check.png')" class="check" alt=""> 港澳车牌</div>
    </div>
    <div class="keyboardBox">
      <div class="keyboardInputBox">
        <div class="keyboardInputItem" :class="{active:index==curIndex,ani:index==curIndex,HK:isHKCarNo,newSource:index==7&&!carNumber[7]}" v-for="(item,index) in carNumber.length"  @click="inputItemClick(index)">{{curIndexVal(index)}}</div>
      </div>
    </div>
      <div class="keyboard" :class="showKeyboard?'showKeyboard':''">
        <div class="keyboardHead">
          <div class="keyboardClose" @click="closeKeyboard">关闭</div>
        </div>
        <div class="keyboardContent">
            <div class="keyboardList">
              <div class="keyboardItem" :class="{disable:disable(item)}" @click="itemClick(item)" v-for="item in firstValue.slice(0,10)" :key="item">{{item}}</div>
            </div>
            <div class="keyboardList">
              <div class="keyboardItem" :class="{disable:disable(item)}" @click="itemClick(item)" v-for="item in firstValue.slice(10,20)" :key="item">{{item}}</div>
            </div>
            <div class="keyboardList">
              <div class="keyboardItem" :class="{disable:disable(item)}"  @click="itemClick(item)" v-for="item in secondValue" :key="item">{{item}}</div>
            </div>
            <div class="keyboardList">
              <div class="keyboardItem keyboardButton" :class="{disable:curIndex===0 || isHKCarNo}" @click="curIndex!==0 && !isHKCarNo?changeType(keyboardType=='ZH'?'EN':'ZH'):''">{{keyboardType=="ZH"?'ABC':'中文'}}</div>
              <div class="keyboardItem" :class="{disable:disable(item)}"  @click="itemClick(item)" v-for="item in thirdValue" :key="item">{{item}}</div>
              <div class="keyboardItem keyboardButton"  @click="removeItem()"><img src="../../static/Delete.png"></div>
            </div>
        </div>
      </div>
  </div>
</template>
<script>
const keyboardEnChar="1234567890QWERTYUIOPASDFGHJKLZXCVBNM"
const keyboardZhChar='京沪粤津冀晋蒙辽吉黑苏浙皖闽赣鲁豫鄂湘桂琼渝川贵云藏陕甘青宁新使领警学港澳'
export default /*#__PURE__*/{
  name: 'carNumberKeyboard', // vue component name
  props:{
    title: {
      // 默认回显值
      type: String,
      default:()=> "请输入车牌号码"
    },
    firstFocus:{
      type:true,
      default:()=> true
    },
    value: {
      // 默认回显值
      type: [String, Array],
      default:()=> ["", "", "", "", "", "", "", ""]
    },
    HkCarNoSupport: {
      // 是否支持港澳车牌
      type: Boolean,
      default:()=>true
    },
    completeHideKeyboard:{
      //是否完成后自动收起键盘
      type: Boolean,
      default:()=>true
    },
    autoCarNoTypeMatch:{
      //是否根据车辆初始回填值自动识别为大陆车牌或港澳车牌 (此项设置需开启HkCarNoSupport:true)
      type: Boolean,
      default:()=>true
    },
  },
  data() {
    return {
      isInit:false,
      curIndex:-1,
      isHKCarNo:false,   //是否为港澳车牌
      carNumber:["","","","","","","",""],
      disableChar:["I","O"],
      keyboardType:'ZH',
      firstValue:[],
      secondValue:[],
      thirdValue:[],
      showKeyboard:false
    };
  },
  created() {
    this.changeType("ZH")
    if(this.firstFocus){
      this.showKeyboard=true
      this.curIndex=0
    }  
    document.addEventListener("click",this.bodyClickClose)

  },
  beforeDestroy(){
    document.removeEventListener("click",this.bodyClickClose)
  },
  watch: {
    value:{
      handler(newVal){
        if(!this.isInit && newVal){
          this.isInit=true
          // 做兼容处理 （港澳车牌小于7位且 首位为字母或数字  默认为港澳车牌）
          if(newVal.length<7 && /^[A-Z0-9]*$/.test(newVal) && this.HkCarNoSupport && this.autoCarNoTypeMatch){
            this.isHKCarNo=true
            this.changeType("EN");
            this.carNumber = ["","","","","",""].map((item,index)=>item=newVal[index]||"")
          }else{
            this.isHKCarNo=false
            this.changeType("ZH");
            this.carNumber = ["","","","","","","",""].map((item,index)=>item=newVal[index]||"")
          }
        }  
      },
      immediate:true
    },
  },
  methods: {
    bodyClickClose(){
      if(this.showKeyboard = true){
        // this.showKeyboard = false;
        this.closeKeyboard()
      }
    },
     // 切换港澳车牌
     changeHKCarNO(){
      this.isHKCarNo=!this.isHKCarNo
      this.curIndex = 0
      this.showKeyboard = true;
      if(this.isHKCarNo){
        this.changeType("EN");
        this.carNumber=["","","","","",""]
      }else{
        this.changeType("ZH");
        this.carNumber=["","","","","","","",""]
      }
      this.$emit("onChange", this.carNumber,this.isHKCarNo);

    },
    //关闭
    closeKeyboard(){
      this.showKeyboard=false
      this.curIndex=-1
      this.$emit("onClose")
    },
    //键盘字母点击
    itemClick(val) {
      this.isInit=true
      if (this.disableChar.includes(val)) return;
      this.carNumber[this.curIndex] = val;
      this.$emit("onChange", this.carNumber,this.isHKCarNo);
      if (this.carNumber.slice(this.curIndex + 1, this.carNumber.length).every(item => item)) {
        if (this.carNumber.slice(0, this.curIndex).every(item => item)) {
          if(this.completeHideKeyboard){
            this.closeKeyboard();
          }
        } else {
          for (let i = 0; i < this.curIndex; i++) {
            if (!this.carNumber[i]) {
              this.curIndex = Number(i);
              break;
            }
          }
        }
      } else {
        for (let i = this.curIndex + 1; i < this.carNumber.length; i++) {
          if (!this.carNumber[i]) {
            this.curIndex = Number(i);
            break;
          }
        }
      }
      this.changeType(this.curIndex === 0 && !this.isHKCarNo ? "ZH" : "EN");
    },
    
    //返回输入框每一项的值
    curIndexVal(index){
      return  index==7&&this.curIndex!=7&&!this.carNumber[7]?'新能源': this.carNumber[index]
    },
    //返回键盘每一项的值
    disable(item){
      return this.disableChar.includes(item)
    },
    //输入框点击
    inputItemClick(index){
      this.curIndex = index;
      this.changeType(this.curIndex === 0 && !this.isHKCarNo ? "ZH" : "EN");
      this.showKeyboard = true;
    },
    //切换中英文
    changeType(type){
      if(type=="ZH"){
        this.firstValue=keyboardZhChar.split("").slice(0,20)
        this.secondValue=keyboardZhChar.split("").slice(20,30)
        this.thirdValue=keyboardZhChar.split("").slice(30,37)
      }else{
        this.firstValue=keyboardEnChar.split("").slice(0,20)
        this.secondValue=keyboardEnChar.split("").slice(20,29)
        this.thirdValue=keyboardEnChar.split("").slice(29,36)
      }
      this.keyboardType=type
    },
    //删除
    removeItem(){
      this.carNumber[this.curIndex] = '';
      this.curIndex -= this.curIndex > 0 ? 1 : 0;
      this.changeType(this.curIndex === 0 && !this.isHKCarNo ? "ZH" : "EN");
      this.$emit('onChange', this.carNumber,this.isHKCarNo);
    }
  }
};
</script>

<style scoped>
  .keyboardBox {
  color: #3f9ffd;
  text-align: center;
}
.title{
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
  padding: 14px 0 20px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: bold;
}
.carTypeSwitch{
  display: flex;
  align-items: center;
}
.check{
  width: 14px;
  display: block;
  margin-right: 6px;
}
.keyboardInputBox {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.keyboardInputItem {
  width: 35px;
  height: 48px;
  line-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ededed;
  color: rgba(0, 0, 0, 0.85);
  font-size: 15px;
  font-weight: 500;
  border-radius: 4px;
  position: relative;
  transition: border 0.2s ease-in, color 0.2s ease-in;
  box-sizing: border-box;
}
.HK.keyboardInputItem:nth-child(2):after,.HK.keyboardInputItem:nth-child(4):after{
  content: "";
  width: 14px;
  height: 4px;
  border-radius: 2px;
  background: #ededed;
  position: absolute;
  left: 44px;
}
.newSource {
  writing-mode: vertical-lr;
  font-size: 11px;
  color: rgba(0, 0, 0, 0.3);
  overflow: hidden;
}
.active {
  border: 1px solid #3f9ffd;
  color: rgba(0, 0, 0, 0.3)
}
.ani:before {
  content: "";
  position: absolute;
  width: 2px;
  height: 22px;
  border-radius: 2px;
  background: #3f9ffd;
  top: 50%;
  margin-top: -11px;
  left: 50%;
  margin-left: -1px;
  animation: inputAni 1.5s infinite steps(1, start)
}
.keyboard {
  position: fixed;
  z-index: 10000;
  bottom: -300px;
  width: 100%;
  left: 0;
  background: #f5f8fc;
  transition: all 0.4s ease-in-out;
}
.keyboardHead {
  height: 40px;
  display: flex;
  justify-content: flex-end;
  padding: 0 20px;
  line-height: 40px;
  border-top: 1px solid #ededed;
  background: #fff;
}
.keyboardClose {
  font-size: 16px;
}
.keyboardContent {
  background: #f5f8fc;
  padding: 20px 0;
}
.keyboardList {
  display: flex;
  justify-content: center;
  gap: 8px 4px;
  width: 100%;
  margin-top: 8px;
}
.keyboardList:first-child {
  margin-top: 0;
}
.keyboardItem {
  width: 32px;
  line-height: 36px;
  color: #212836;
  font-size: 16px;
  border-radius: 4px;
  background: #fff;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
}
.keyboardItem:active {
  background: #cdddff;
}
.keyboardButton {
  width: 50px;
  background: #e6ecf4;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.keyboardButton img{
  width: 24px
}
.disable {
  opacity: 0.5;
}
.showKeyboard{
    bottom: 0;
}
@keyframes inputAni {
  0% {
    opacity: 1;
    display: block;
  }
  50% {
    opacity: 0;
    display: none;
  }
  100% {
    opacity: 1;
    display: block;
  }
}
</style>
