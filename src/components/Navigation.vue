<template>
  <nav>
    <ul>
      <router-link to="/">Blocks</router-link> |
      <router-link to="/about">About</router-link>
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
