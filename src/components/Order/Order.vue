<template>
    <div>
        <mt-header fixed title="订单"></mt-header>
        <div class="content">
            <input type="text" v-model='username'> 
            <button @click="addData">增加数据+</button>
            <ul>
                <li v-for="item in list">
                    {{item}}
                </li>
            </ul>
        </div>
         <v-tab location="order"></v-tab>
    </div>
</template>
<script>
import Tabbar from '../../common/Tabbar.vue';
import store from '../../store/store.js';
export default {
  name: 'home',
  data(){
      return {
          username:""
      }
  },
  components:{
    "v-tab":Tabbar,
  },
  methods:{
      addData(){
        this.$store.commit('addList',this.username)
    }
  },
  computed:{
      list:function(){
        return store.state.list
    }
  },
  store
}
</script>
<style>
    .content{
        margin-top:2rem;
        text-align:center;
    }
</style>