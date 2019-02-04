<template>
  <ul class="autocomplete">
   <li class="match" v-for="match in matches" :id="'match-'+match.id" @click="selectmatch(match.id)">
   {{match.Firstname}} {{match.Lastname}} 
   <span v-if="match.Phone!=''">- {{match.Phone}}</span> 
   </li>
   </ul>
</template>

<script>

//https://alligator.io/vuejs/add-v-model-support/
//@todo make so up/down change highlight

export default {
  name: 'Autocomplete',
  props: {
    query:String,
  },
  methods:{
    selectmatch:function(selid){
      this.$emit('selected',this.donors.filter((donor) => donor['id']==selid)[0]);
    }
  },
  computed:{
    donors(){
      return this.$store.state.donors
    },
    matches(){
      if (this.query == ''){
        return [];
      }
      else{
        var filtered = this.donors.filter((donor) => 
            donor['Firstname'].toLowerCase().includes(this.query.toLowerCase()) || 
            donor['Lastname'].toLowerCase().includes(this.query.toLowerCase()) ||
            donor['Phone'].includes(this.query)

          );
        
        return filtered;
      }
    }
  },
  data(){
    return{
      highlightedsel:null,
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.autocomplete{
  display:grid;
  position:relative;
  width:100%;
  top:-18px;
  border:1px solid black;
  background-color:white;
  z-index:999;
}
.match{
  border-radius:3px;
}
.match:hover{
  background-color:green;
  color:white;
}
.match:active{
  background-color:lightgreen;
  color:white;
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
