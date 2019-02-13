<template>
  <div class="modulewrapper">
  <button @click='togglemodal'class="adddon">Add New Donor</button>
  <div class="boxwrapper">
    <input type="text" placeholder="Enter Existing Donor" v-model="query">
    <Autocomplete :query="query" v-if="query!=''" @selected="setsel" class="auto"/>
  </div>
  <p>

    <div v-if="selecteddonor!=null" class="seldon">
      <button class="seldel" @click="clearsel">x</button>
        {{selecteddonor.Firstname}}, {{selecteddonor.Lastname}} donated:
    </div>
  <add-new-donor-modal v-if="addingnew" @sel='confsel' @close='togglemodal' class="modal"/>
  </div>
</template>

<script>
//@todo if there's text in the autocompleter put that as default for modal
//@todo check if donor already exists in db
import Autocomplete from './Autocomplete'
import addNewDonorModal from './addNewDonorModal'
export default {
  name: 'donorModule',
  components:{Autocomplete,addNewDonorModal},
  props: {
    donors:Array,
    msg: String,
    category:String
  },
  computed:{selecteddonor:{get:function(){return this.$store.state.seldonor},
  set:function(val){this.$store.dispatch("selDonor",val)}}},
  
  methods:{
    clearsel:function(){
        this.selecteddonor=null
    },
    confsel:function(sel){//called on modal signal
      this.setsel(sel)
      this.togglemodal()
    },
    setsel:function(sel){
      this.selecteddonor=sel
      this.query=''
    },
    togglemodal:function(){
      this.addingnew=!this.addingnew;
    }
  },
  data(){return{
  test:5,
  query:'',
  addingnew:false,}}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.auto{
  z-index:99;
  }
.modal{
  z-index:999;
}
.adddon{grid-area:btn;}
.modulewrapper{
  display:grid;
  width:500px;
  grid-template:
  "boxes btn"
  "boxes sel";
}
input{
  width:200px;
}
.boxwrapper{
  width:200px;
  grid-area:boxes;
}
.seldon{
  grid-area:sel;
}
.seldel{
  position:relative;
  border-radius:50%;
  background-color:red;
  border:none;
  height:15px;
  width:15px;
  bottom:10px;
  left:5px;
}
</style>
