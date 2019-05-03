<template>
    <div id="app">
        <Header />
        <div class="mempool">
            <h1>This is the mempool page</h1>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue'

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
  name: 'Mempool',
  components: {
    Header,
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
