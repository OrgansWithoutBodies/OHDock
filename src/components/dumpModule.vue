<template>
  <div class="modulewrapper">
    <span id="dumplbl"> Dump Fee</span>
    <div id="dumpbtns">
     <div v-for="(str,amt) in fees" :id="str">
       <input type="radio" name="dump" :value="amt" :id="amt" class="dumpradio" v-model.number="selecteddump">
       <label :for="amt" class="dumpbtn">{{str}} 
         <span v-if="amt>0" class="btnamt">
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
  name: 'dumpModule',
  computed:{selecteddump:{get:function(){return this.$store.state.seldump},
  set:function(val){this.$store.dispatch("selDump",val)}}},
  props: {
    msg: String,
    category:String
  },
  data(){
  return{
  fees:{0:"No Fee",20:"Small Fee",40:"Large Fee"}
  }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#customfee{
  grid-area:cust;
}
#dumplbl{
  font-size:1.5em;
  grid-area:lbl;
}
#dumpbtns{
  display:grid;
  grid-area:btns;
  grid-template-columns:100px 100px 100px;
  grid-column-gap:20px;
}
.modulewrapper{
  align-contents:center;
  display:grid;
  grid-template:". lbl ."
                "btns btns btns"
                ". cust ."
}
.dumpradio{
  display:none;
  height:50px;
  width:50px;
  padding:10px;
}
.dumpbtn{
display:grid;
  padding:7px;
  border-radius:4px;
  background-color:white;
   user-select: none;
   width:100px;
   min-height:50px;
   align-items:center;
}
.dumpradio:checked+label{
background-color:green;
color:white;
}
</style>
