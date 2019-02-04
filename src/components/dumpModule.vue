<template>
  <div class="modulewrapper">
    <span id="dumplbl"> Dump Fee</span>
   <div id="dumpbtns">
     <div v-for="(str,amt) in fees" :id="str">
       <input type="radio" name="dump" :value="amt" :id="amt" class="dumpradio" v-model="selecteddump">
       <label :for="amt" class="dumpbtn">{{str}} 
         <span v-if="amt>0">
          (${{amt}})
         </span>
         </label>
     </div>
  </div>
   <div id="customfee">
   Custom Fee: <span id="dollarwrapper">$<input type="number" min="0" step=".1" v-model="selecteddump"></span>
   </div>
  </div>
</template>

<script>
//https://alligator.io/vuejs/add-v-model-support/
export default {
  name: 'categoryModule',
  props: {
    msg: String,
    category:String
  },
  data(){
  return{
  selecteddump:0,
  fees:{0:"No Fee",20:"Small Fee",40:"Large Fee"}
  }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#dumpbtns{
  display:grid;
  grid-template-columns:100px 100px 100px;
}
.modulewrapper{
  display:grid;
  grid-template-rows:100px 100px;
}
.dumpradio{
  display:none;
  height:20px;
  width:20px;
  padding:10px;
}
.dumpbtn{
  padding:7px;
  border-radius:4px;
  display:inline-block;
  background-color:white;
}
.dumpradio:checked+label{
background-color:green;
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
