<template>
  <div id="home">
    <mt-header fixed title="首页"></mt-header>
    <div class="page-swipe" :style="{'height':'7rem','margin-top':'40px',}">
      <mt-swipe :auto="0">
        <mt-swipe-item class="slide1">
          <img src="../../assets/banner01.jpg"/>
        </mt-swipe-item>
        <mt-swipe-item class="slide2">
          <img src="../../assets/banner02.jpg"/>
        </mt-swipe-item>
        <mt-swipe-item class="slide3">
          <img src="../../assets/banner03.jpg"/>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="page-infinite">
    <div class="page-infinite-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
        <li v-for="item in list" class="page-infinite-listitem">{{ item }}</li>
      </ul>
      <p v-show="loading" class="page-infinite-loading" style='margin-bottom:55px'>
        <span :style="{'color':'red'}">{{txt}}</span>
      </p>
    </div>
  </div>
    <v-tab location="home"></v-tab>
  </div>
</template>

<script>
import Tabbar from '../../common/Tabbar.vue';
// import Infinite from './Infinite.vue';
export default {
  name: 'home',
  data(){
      return {
        list: [],
        count:0,
        loading: false,
        allLoaded: false,
        wrapperHeight: 0 ,
        txt:"加载中..."
      }
  },
  methods:{
    loadMore() {
        this.loading = true;
        ++this.count
        this.requireData()
      },
    requireData(){
    	 var self = this;
		    var url='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page='+ self.count;
		      this.$http.jsonp(url).then(response => {
		        for (let i = 0; i < response.body.result.length; i++) {
		         	if(response.body.result.length < 20){
		         		this.txt = "加载完成"
		         	}
		            this.list.push(response.body.result[i].title);
		            this.loading = false
		        }
		
		      }, response => {
		       
		      });
    }
  },
  mounted(){
    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    this.requireData;
   
   },
  components:{
    "v-tab":Tabbar,
    
  }
}
</script>
<style lang="less" scoped>
 .mint-swipe {
    height:100%;
    text-align: center;
    .mint-swipe-item {
      img{
        height:100%;
        width:100%;
      }
  }
} 
.page-infinite{
        .page-infinite-list{
           overflow:hidden;
            .page-infinite-listitem {
                font-size:0.9rem;
                border-bottom:1px solid #000;
                height:2rem;
                line-height:2rem;
                text-align:center;
                overflow:hidden;
                padding:0 0.5rem;
            }
        }
        .page-infinite-loading{
          text-align:center;
          height: 30px;
          line-height: 30px;
        	font-size:0.9rem;
          margin:0
          div{
          margin-right: 5px;
          position:absolute;
          left:50%;

          }
        }
    }
</style>