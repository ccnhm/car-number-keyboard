<template>
  <div class="keyboardInput">
    <!-- <div class="inputBox">
      <div class="inputItem" :class="{active:curIndex===index}" v-for="(item,index) in 8" :key="index"  @click="inputClick(index)">{{carNoChar(index)}}</div>  
    </div> -->
    <div class="box">
      <carNumberKeyboard  :value="carNo" :firstFocus="true"  @onChange="keyboardChange"></carNumberKeyboard>
    </div>
  
</div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      showInputBox:true,
      showKeyboardInputBox:true,
      car:["","","","","","","",""],
      curIndex:-1,
      carNo:''
    }
  },
  mounted(){
    setTimeout(() => {
      this.carNo="粤A898TV"
    }, 500);
  },
  methods:{
    keyboardChange(val,index){
      this.car=val
      this.curIndex=index
      console.log('get val',val,index)
    },
    inputClick(index){
      this.curIndex=index
      this.$refs.keyboard.inputItemClick(index)
    },
    carNoChar(index){
      return this.car[index]
    },
    keyboardChange(car,isHkCar){
       console.log(car,isHkCar)
      this.carNo=car.join("")
    //console.log(2222,this.carNo)

    }
  },
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.inputBox{
  display: flex;
  gap: 10px;
}
.inputItem{
  width: 40px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
}
.active{
  border: 1px solid #3f9ffd;
}
.box{
  padding: 20px ;
}
</style>
