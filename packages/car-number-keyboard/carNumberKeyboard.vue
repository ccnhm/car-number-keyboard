<template>
  <div class="keyboardBox">
    <div class="keyboardInputBox" v-if="showInputBox">
      <div class="keyboardInputItem" :class="{newSource:index==7&&!carNumber[7],active:index==curIndex,ani:index==curIndex&&!carNumber[curIndex]}" v-for="(item,index) in 8" :key="index" @click="inputItemClick(index)">{{curIndexVal(index)}}</div>
    </div>
    <div class="keyboard" :class="showKeyboard?'showKeyboard':''">
      <div class="keyboardInputBox" v-if="showKeyboardInputBox">
        <div class="keyboardInputItem" :class="{newSource:index==7&&!carNumber[7],active:index==curIndex,ani:index==curIndex&&!carNumber[curIndex]}" v-for="(item,index) in 8" :key="index" @click="inputItemClick(index)">{{curIndexVal(index)}}</div>
      </div>
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
            <div class="keyboardItem keyboardButton" :class="{disable:curIndex===0}" @click="curIndex!==0?changeType(keyboardType=='ZH'?'EN':'ZH'):''">{{keyboardType=="ZH"?'ABC':'中文'}}</div>
            <div class="keyboardItem" :class="{disable:disable(item)}"  @click="itemClick(item)" v-for="item in thirdValue" :key="item">{{item}}</div>
            <div class="keyboardItem keyboardButton"  @click="removeItem()">X</div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
const keyboardEnChar="1234567890QWERTYUIOPASDFGHJKLZXCVBNM"
const keyboardZhChar='京沪粤津冀晋蒙辽吉黑苏浙皖闽赣鲁豫鄂湘桂琼渝川贵云藏陕甘青宁新使领警学港澳'
export default {
  name: "carNumberKeyboard",
  props:{
    showInputBox:{  //是否显示车牌输入框
      type:Boolean,
      default:true
    },
    showKeyboardInputBox:{   //是否显示键盘上面的输入框
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      curIndex:-1,
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
  },
  methods: {
    //关闭
    closeKeyboard(){
      this.showKeyboard=false
      this.curIndex=-1
      this.$emit("onClose")
    },
    //键盘字母点击
    itemClick(val){
      if (this.disableChar.includes(val)) return;
      this.carNumber[this.curIndex] = val;
      if (this.carNumber.slice(this.curIndex + 1, 7).every((item) => item)) {
        if (this.carNumber.slice(0, this.curIndex).every((item) => item)) {
          if (this.carNumber[7]) {
            this.closeKeyboard();
          } else {
            this.curIndex = 7;
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
        for (let i = this.curIndex + 1; i < 7; i++) {
          if (!this.carNumber[i]) {
            this.curIndex = Number(i);
            break;
          }
        }
      }
      this.changeType(this.curIndex === 0 ? 'ZH' : 'EN');
      this.$emit('onChange', this.carNumber, this.curIndex);
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
      this.changeType(this.curIndex === 0 ? 'ZH' : 'EN');
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
      this.changeType(this.curIndex === 0 ? 'ZH' : 'EN');
      this.$emit('onChange', this.carNumber, this.curIndex);
    }
  }
};
</script>
<style scoped>
  @import "./index.css"
</style>
