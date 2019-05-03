<template>
  <nav>
    <ul>
      <li><router-link to="/">Blocks</router-link></li>
      <li><router-link to="/mempool">Mempool</router-link></li>
      <li><router-link to="/statistics">Statistics</router-link></li>
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
