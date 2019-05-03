<template>
    <div id="app">
        <Header />
        <div class="container">
            <h4 class="text-left">Mempool transactions: </h4>
            <table class="table table-striped table-bordered">
              <tbody>
                <tr v-for="tx in mempool" :key="tx">
                  <td>{{ tx }}</td>
                </tr>
              </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue'

let BITBOXSDK = require('bitbox-sdk');
let BITBOX = new BITBOXSDK();

let mempool = [];

export default {
  name: 'Mempool',
  components: {
    Header,
  },
  data: function () {
    return {
      mempool: mempool
    }
  },
  methods: {
    getRawMempool: function () {
      BITBOX.Blockchain.getRawMempool(true).then( mempool => {
        this.mempool = mempool;
      });
    }
  },
  mounted: function () {
    this.getRawMempool()
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
