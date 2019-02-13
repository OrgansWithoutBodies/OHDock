<template>
  <div class="modulewrapper">
    <div class="category">
    <input class="inputcustom" type="number" @change="selfn($event.target.value)" :value="selected">x 
      <span class="categorylbl">{{category}}</span>
    </div>
    <div class="inputwrapper">
      <div v-for="e in test">
      <input class="inputbtn" type='radio' 
        :name="category" 
        :value="e-1"  
        :id="category+e" 
        v-model="selected" 
        @click="selfn($event.target.value)"/>
      <label :for="category+e" class="inputlbl">
        {{e-1}}
      </label>
      </div>
   </div>
  </div>
</template>

<script>
//@todo put watcher or smth on v-for="e in test" div? 
//  
export default {
  name: 'categoryModule',
  props: {
    msg: String,
    category:String,
  },
  methods:{
    selfn:function(val){

      this.selected=val
      this.$emit("sel",val,this.category)
    }
  },
  data(){return{test:6,
  colors:['red','orange','yellow','green','blue','purple'],
  selected:0}}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modulewrapper{
  padding:10px;
}
.category{
vertical-align:middle;
}
.categorylbl{
  color:red;
   user-select: none;
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
