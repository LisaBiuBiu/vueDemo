import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

var state ={ /*所有的数据放在这里面*/
    newList :[],
    list :[]
}
var mutations = {   /*所有的方法放在这个里面*/
    
    addNewsList:function(state,data){   /*让新闻持久化*/

        state.newList=data;
    },
    addList:function(state,data){
        state.list.push(data)
    }
}

export default new Vuex.Store({  /*注意*/
    state,
    mutations

})