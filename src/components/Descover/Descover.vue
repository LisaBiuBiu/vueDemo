<template>
    <div>
        <mt-header fixed title="发现"></mt-header>
        <ul>
            <li v-for="item in list">
            <router-link :to="'/details/'+item.aid">{{item.title}}</router-link>
            </li>
        </ul>
        <v-tab location="descover"></v-tab>
    </div>
</template>
<script>
import Tabbar from '../../common/Tabbar.vue';
import store from '../../store/store.js';//引入组件；
export default {
  data(){
      return {
          list:[]
      }
  },
  components:{
     "v-tab":Tabbar,
  },
  methods:{
    requireData(){
        var self = this;
        var url='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
        this.$http.jsonp(url).then((res)=>{
            self.list=res.body.result;

            store.commit('addNewsList',res.body.result);  /*修改store里面的数据*/


        },(err)=>{

        })
    }
  },
  mounted(){
    if(store.state.newList.length>0){
        this.list = store.state.newList;  /*有数据把store的数据给list*/
    }else{
       this.requireData();  /*请求数据*/

    }
  },
  store
}
</script>
<style scoped lang="less">
    ul{
        margin-top:2rem;
        li{
            height:2rem;
            width:100%;
            padding:0 0.5rem;
            line-height:2rem;
            font-size:0.6rem;
        }
    }
</style>
    

