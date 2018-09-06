<template>
    <div id="datails">
      <div class="page-header-main">
      <mt-header title="详情" fixed>
        <router-link to="/descover" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      </div>
        <div class="content" v-html="content.content" :style="{'marginTop':'2rem'}"></div>
    </div>
</template>
<script>
export default {
  name: 'home',
  data(){
      return {
          content:""
      }
  },methods:{
      requsetData(aid){
        var _that=this;
        var url='http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+aid;
        this.$http.jsonp(url).then((res)=>{
            _that.content=res.body.result[0];

        },(err)=>{

        })
    }
  },
  mounted(){
       this.requsetData(this.$route.params.aid);
  }

}
</script>
<style scoped lang="less">
    #datails{
        overflow:hidden;
        padding:0.5rem;
        .content{
           width:100%;
           img{
               width:100%;
           }

        }
    }
</style>