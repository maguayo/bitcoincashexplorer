<template>
    <div id="app">
        <Header />
        <div class="container">
            <section class="transaction-widgets">
              <div class="row">
                <div class="widget col-md-6">
                  <div class="widget-inner" style="background-color: #d6535c;">
                    <p>Transactions</p>
                    <span>{{mempoolInfo.size}}</span>
                  </div>
                </div>
                <div class="widget col-md-6">
                  <div class="widget-inner" style="background-color: #9d8bf7;">
                    <p>Size</p>
                    <span>{{mempoolInfo.bytes}}</span>
                  </div>
                </div>
              </div>
            </section>
            <section class="raw-transaction-list">
              <h4 class="text-left">Mempool transactions: </h4>
              <table class="table table-striped table-bordered">
                <tbody>
                  <tr v-for="tx in mempool" :key="tx">
                    <td>{{ tx }}</td>
                  </tr>
                </tbody>
              </table>
            </section>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue'

const pretty = require('prettysize');
let BITBOXSDK = require('bitbox-sdk');
let BITBOX = new BITBOXSDK();

let mempool = [];
let mempoolInfo = {"size": "-", "bytes": "-"}

export default {
  name: 'Mempool',
  components: {
    Header,
  },
  data: function () {
    return {
      mempool: mempool,
      mempoolInfo: mempoolInfo
    }
  },
  methods: {
    getRawMempool: function () {
      BITBOX.Blockchain.getRawMempool(true).then(mempool => {
        this.mempool = mempool;
      });
    },
    getMempoolInfo: function() {
      BITBOX.Blockchain.getMempoolInfo().then(mempoolInfo => {
        this.mempoolInfo = mempoolInfo;
        this.mempoolInfo.bytes = pretty(this.mempoolInfo.bytes)
      });
    }
  },
  mounted: function () {
    this.getRawMempool();
    this.getMempoolInfo();
  }
}

</script>

<style>
.transaction-widgets{
  margin-bottom: 50px;
}
.widget-inner{
  border: 1px solid #ccc;
  padding: 35px 20px;
  color: #fff;
}
.widget-inner p{
  margin: 0px;
  font-size: 15px;
  text-transform: uppercase;
}
.widget-inner span{
  font-size: 22px;
  margin-top: 5px;
  display: block;
}
</style>
