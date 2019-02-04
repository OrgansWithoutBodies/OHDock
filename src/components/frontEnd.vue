<template>
  <div class="hello">
  <donor-module id="donor" :donors="dons"/> 
  <dump-module id="dump"/>
  <print-module id="print"/>
  <div id="categorywrapper">
   <category-module v-for="cat in cats" :category="cat"/>
   </div>
   </div>
  
</template>

<script>
import categoryModule from "./categoryModule.vue"
import donorModule from "./donorModule.vue"
import dumpModule from "./dumpModule.vue"
import printModule from "./printModule.vue"

export default {
  name: 'frontEnd',
  mounted(){
      this.$store.dispatch('loadDataFrom')
    },
  components:{categoryModule,donorModule,dumpModule,printModule},
  props: {
    msg: String
  },
  methods:{
    testfn:function(){console.log(this.$store._mutations)}
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
#donor{
grid-area:donor;
}
#dump{
  grid-area:dump;
}
#print{
  grid-area:print;
}
.hello{
  display:grid;
  grid-template:"donor cats cats"
                "dump cats cats"
                "print cats cats"
}
#categorywrapper{
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-area:cats;
  background-color:#f5f5f5;
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
