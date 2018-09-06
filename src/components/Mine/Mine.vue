<template>
    <div>
        <mt-header fixed title="我的"></mt-header>
        <ul :style="{marginTop:'2rem'}">
            <li v-for="item in list">
                {{item}}
            </li>
        </ul>
        <v-tab location="mine"></v-tab>
    </div>
</template>
<script>
import Tabbar from '../../common/Tabbar.vue';
import store from '../../store/store.js';
export default {
  name: 'home',
  data(){
      return {
          msg:"订单"
      }
  },
  components:{
     "v-tab":Tabbar,
  },
  computed:{
      list:function(){
        return store.state.list
    }
  },
  store
}
</script>