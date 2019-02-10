<template>
  <div class="modulewrapper">
    <div id="categorywrapper">
      <category-module v-for="(val,cat) in catdata" :category="cat" @sel=""/>
    </div>
  </div>
</template>

<script>
import categoryModule from "./categoryModule.vue"
export default {
  name: 'donationModule',
  components:{categoryModule},
  props: {
    msg: String,
    cats:Array,
  },
  beforeMount:function(){
      var dt = this.$store.state.seldons
      for(var i = 0;i<this.cats.length;i++){
        const c=this.cats[i]
        dt[c]=0
      }
      console.log(dt)
      this.catdata=dt
    },
  methods:{
    selfn:function(val,cat){
      console.log(val)
      console.log(cat)
    }
  },
  computed:{
    seldons:{
      get:function(){return this.catdata},
      set:function(val){console.log(val)}
    },
    
  },
  data(){return{test:6,
  colors:['red','orange','yellow','green','blue','purple'],selected:0}}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#categorywrapper{
  display:grid;
  grid-template-columns: 1fr 1fr;
  border-radius:5px;
  box-shadow: inset 0 0 10px #000000;
  background-color:#f5f5f5;
}
.modulewrapper{
  padding:10px;
}
.category{
vertical-align:middle;
}
.categorylbl{
  color:red;
  font-size:1.5em;

}
.inputcustom{
  width:30px;
  height:10px;

}
.inputwrapper{
margin:10px;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(10px,1fr));
}
.inputbtn{
  display:none;
  height:20px;
  width:20px;
  padding:10px;
}
.inputlbl{
  width:90%;
  border-radius:4px;
  display:inline-block;
  background-color:white;
}
.inputbtn:hover+label{
  background-color:lightpink;
}
.inputbtn:checked+label{
background-color:red;
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
