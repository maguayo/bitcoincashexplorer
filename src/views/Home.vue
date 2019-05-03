<template>
  <div id="app">
    <Header />
    <div class="container">
      <Block />
      <Block />
      <Block />
      <Block />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Block from '../components/Block.vue'

let BITBOXSDK = require('bitbox-sdk');
let BITBOX = new BITBOXSDK();

(async () => {
  try {
    let details = await BITBOX.Address.details(['1MkzBVjGHiukcmht24EvArwrP6v2sviBnj']);
    console.log(details)
  } catch(error) {
   console.error(error)
  }
})()

export default {
  name: 'app',
  components: {
    Header,
    Block
  },
  data() {
    return {
      msg: "Hello World"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
