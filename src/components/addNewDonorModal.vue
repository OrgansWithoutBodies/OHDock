<template>
  <div class="modulewrapper">
  <div class="bg"></div>
  <div class="pagewrapper">
    <div class="page">
      New Donor Info
      <div v-for="(v,k) in fields">
        {{k}}:
        <input :name="k" v-model="fields[k]">
      </div>
      <div class="btndiv">
        <button @click="cancelfn">Cancel</button>
        <button @click="savefn">Save</button>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Autocomplete from './Autocomplete'
export default {
  name: 'addNewDonorModal',
  components:{Autocomplete},
  mounted: function () {
    document.addEventListener("keydown", (e) => {
      if (this.$parent.addingnew && e.keyCode == 27) {
        this.$parent.addingnew=false
      }
    });
  },
  props: {
    msg: String,
    category:String
  },
  methods:{
    cancelfn:function(){//see if fields are empty
      this.$emit('close')
    },
    validate:function(donor){
      return donor
    },
    savefn:function(){
      const sel = {'Firstname':this.fields['First Name'],'Lastname':this.fields['Last Name'],'Phone':this.fields['Phone Number'], 'Email':this.fields['Email'],  'Business':this.fields['Business']    }
      this.$emit('sel',sel)
    }
  },
  data(){return{
  test:5,
  query:'',
  fields:{'First Name':'','Last Name':'','Business':'','Phone Number':'','Email':''},
  selecteddonor:''}}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg{
  position:fixed;
  background-color:black;
  width:100%;
  height:100%;
  top:0;
  left:0;
  opacity:.4;
}
.pagewrapper{
  position:fixed;
   width: 60%;
    height: 80%;
    left: 20%;
    top: 10%;
}
.page{
  border:2px solid black;
  border-radius:50px;
  background-color:white;
  height:70%;
  display:grid;
  align-items:center;
  justify-content:center;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
