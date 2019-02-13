<template>
  <div class="modulewrapper">
  <button @click="print">Save & Print Receipt</button><p/>
  <button @click="save">Save without Printing</button>
  </div>
</template>

<script>
export default {
  name: 'printModule',
  props: {
    msg: String,
    category:String
  },
  methods:{
    validate:function(data){
      if (data['Donor']!=null){
        //var donsempty = [for (d of data['Donations'].keys) d]
        if (Object.values(data['Donations']).reduce((a, b) => a + b, 0)>0){
          return true
        }

      }
      return false
    },
    save:function(){
      var data = {
        'Donor':this.$store.state.seldonor,
        'Donations':this.$store.state.seldons,
        'Dump':this.$store.state.seldump
      }
      const valid = this.validate(data)
      if(valid){
        console.log("YOU ARE VALID")
        this.$emit('saved')
      }
      else{
        console.log("umm... y'know your request? yeah it was like,, problematic ://")
      }
      return valid
    },
    print:function(){
      this.save()
      console.log('printing!')
    },
  },
  data(){return{test:5}}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
