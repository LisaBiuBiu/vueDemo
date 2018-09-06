<template>
  <div class="page-tabbar">
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="home" href="#/">
          <span slot="icon" class ="icon" :style="{backgroundImage:'url('+getType('home')+')',backgroundSize:'cover'}"></span>
          首页
        
        </mt-tab-item>
      <mt-tab-item id="descover" href="#/descover">
         <span slot="icon"  class ="icon"  :style="{backgroundImage:'url('+getType('descover')+')',backgroundSize:'cover'}"></span>
          发现
        </mt-tab-item>
     
      <mt-tab-item id="order" href="#/order">
       <span slot="icon"  class ="icon"  :style="{backgroundImage:'url('+getType('order')+')',backgroundSize:'cover'}"></span>
        订单
      </mt-tab-item>
      <mt-tab-item id="mine" href="#/mine">
        <span slot="icon"  class ="icon"  :style="{backgroundImage:'url('+getType('mine')+')',backgroundSize:'cover'}"></span>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import homeOn from '../assets/homeOn.png';
import homeOff from '../assets/homeOFF.png';
import descoverOn from '../assets/descoverOn.png';
import descoverOff from '../assets/descoverOff.png';
import orderOn from '../assets/orderOn.png';
import orderOff from '../assets/orderOff.png';
import mineOn from '../assets/mineOn.png';
import mineOff from '../assets/mineOff.png';

export default {
  name: 'page-tabbar',
  props: ['location'],
  data() {
    return {
      selected:this.location,
     };
  },
  methods:{
    getType(type){
      if(this.selected == type){
        return this.tabImg[type+'On']
      }else {
        return this.tabImg[type+'Off']
      }
    }
  },
  computed:{
    tabImg(){
      return {
        homeOn: homeOn,
        homeOff:homeOff,
        descoverOn : descoverOn,
        descoverOff :descoverOff,
        orderOn :orderOn,
        orderOff : orderOff,
        mineOn : mineOn,
        mineOff : mineOff
      }
    }
  }

};
</script>

<style lang="less">
  .page-tabbar {
    overflow: hidden;
    .page-wrap {
      overflow: auto;
      height: 100%;
      padding-bottom: 100px;
      .mint-tab-item-icon{
        span{
          background-size:cover;
        }
      }
      
    }
  }

  
</style>
