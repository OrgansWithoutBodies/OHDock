<template>
  <div class="hello">
  <div id="titlelbl">DOCK DONATION TAKER</div>
  <donor-module id="donor" :donors="dons"/> 
  <dump-module id="dump"/>
  <print-module id="print" @saved="resetsels"/>
  <donation-module id="dons" :cats="cats"/>
   </div>
  
</template>

<script>
import donationModule from "./donationModule.vue"
import donorModule from "./donorModule.vue"
import dumpModule from "./dumpModule.vue"
import printModule from "./printModule.vue"
export default {

  name: 'frontEnd',
  mounted(){
      this.$store.dispatch('loadDataFrom')
    },
  components:{donationModule,donorModule,dumpModule,printModule},
  props: {
    msg: String
  },
  methods:{
    testfn:function(){console.log(this.$store._mutations)},
    resetsels:function(){
      alert('test')
      this.$store.dispatch('clearSels')
//@todo - seldons not working as binding is only one way atm
    }
  },
  data(){
    return{
      cats:["Books","Furniture","Electronics","Household","Kitchen","Clothes","Toys","Misc."]
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  background-color:darkgrey;
  padding:20px;
  border-radius:15px;
}
#donor{
grid-area:donor;
}
#dump{
  grid-area:dump;
}
#print{
  grid-area:print;
}
#titlelbl{
  grid-area:title;
  font-size:2em;
}
#dons{
  grid-template-columns:1fr 1fr;
  grid-area:cats;
}
.hello{
  display:grid;
  grid-template:
    "title title ."
    "donor cats cats"
    "dump cats cats"
    "print cats cats"
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
