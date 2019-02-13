// store.js 

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex) // only required if you're using modules.
              // We're using modules, so there you go.
Vue.use(VueAxios, axios)
const endpoint = " http://localhost:8000/"
const dataep = endpoint+'dock/api/'

const store = new Vuex.Store({
  
//
  state: {
    seldonor:null,
    seldump:0,
    seldons:{},
    donors:[],
    cats:["Books","Furniture","Electronics","Household","Kitchen","Clothes","Toys","Misc."],
    data: {
      "donors":[],
      "donations":[],
      "donationlines":[],
      "donationcategories":[],
      "categorymaps":[]
    }
  },
//
  getters:{
    donationobj(state){
      var dt = this.$store.state.seldons
      for(var i = 0;i<this.cats.length;i++){
        const c=this.cats[i]
        dt[c]=0
      }
      return dt
    }
  },
//
  mutations: {
    'ADD_DONOR'(state,emp){
      state.employees.push(emp)
    },
    'SET_DONORS'(state,dons){
      dons.map((don) => {
        state.donors.push(don);
        console.log(don)})
    },
    SET_SELDONS:function(t,e){t.seldons=e},
    SET_SELDUMP:function(t,e){t.seldump=e},
    SET_SELDONOR:function(t,e){t.seldonor=e},
    'ADD_DONATION'(state,don,lines){
      state.donations.push(don)
      state.donationlines.push(don)
    },
  },
//
  actions: {
    // addStop ({commit},store, stop) {
    //   axios.post(endpoint+'/stops',stop)
    //   .then(_ => {commit('ADD_STOP', stop)
    //   })
    //   .then(response => {})
    //   .catch(e => {
    //   })
    // },
clearSels({commit}){
    commit("SET_SELDUMP",0)
    commit("SET_SELDONS",{})
    commit("SET_SELDONOR",null)
},
  loadDataFrom({commit},format="REST")  {
    if(format=="REST"){
      axios.get(dataep+'donors/')
        .then((response)=> {
           commit('SET_DONORS',response.data)
                      }, (err) => {
        console.log(err)
      })
      }
    },

selDons:function(t,e){var n=t.commit;n("SET_SELDONS",e)},
selDump:function(t,e){var n=t.commit;n("SET_SELDUMP",e)},
selDonor:function(t,e){var n=t.commit;n("SET_SELDONOR",e)},
  // updateStopList({commit},stoplist){
  //   alert(stoplist)
  //   commit('UPDATE_STOPLIST_ORDER',stoplist)
  // },
  
  postData({commit},data,format="REST"){
    if(format=="REST"){
      //@todo include authentication
      //axios.post(endpoint,{""}) 
    }
  }
}})


export default store