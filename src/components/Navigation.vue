<template>
  <nav>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">Blocks</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">Mempool</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">Statistics</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
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
nav{
    margin-bottom: 50px;
    margin-top: 40px;
    float: right;
}
</style>
