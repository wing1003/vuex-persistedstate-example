<template>
  <div class="hello">
    <h1>main page</h1>
    <p>{{loadingTxt}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  computed:{
    isLoading(){
      return this.$store.state.isLoading
    },
    loadingTxt(){
      return this.$store.getters.loadingTxt
    }
  },
  mounted(){
    if(!this.isLoading){
      //模拟异步
      setTimeout(() =>{
        this.$store.commit('CHANGE_LOADING')
      },2e3)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
