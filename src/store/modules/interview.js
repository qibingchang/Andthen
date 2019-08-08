import {addSign} from '@/service';
const state = {
    addStatus:false,
    currentCompany:"",
    currentMobile:"",
    note:""
}

const actions = {
    sendInterview({commit},payload){
       addSign(payload).then(res=>{
           if(res.code===0){
               wx.showModal({
                   title:"提示",
                   content:"添加面试成功",
                   success(res){
                       if(res.confirm){
                           wx.navgateTo({
                               url:"/pages/interview/main"
                           })
                       }
                   }
               })
           }
       })
    }
}

const mutations = {
    
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}