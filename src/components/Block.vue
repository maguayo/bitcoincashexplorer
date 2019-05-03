<template>
    <section class="block">
        <ul>
            <li class="block-number">
                <span>Block</span>
                145,674
            </li>
            <li class="block-transactions">
                <span>Transactions</span>
                105
            </li>
            <li class="block-avg">
                <span>Avg Tx</span>
                0.75$
            </li>
            <li class="block-size">
                <span>Size</span>
                502KB
            </li>
            <li class="block-date">
                <span>Created</span>
                23 minutes ago
            </li>
        </ul>
    </section>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
  name: 'Header',
  components: {
    Navigation
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
    .block{
        border: 1px solid #ccc;
        padding: 20px 30px;
        border-radius: 7px;
        text-align: left;
        margin-bottom: 15px;
    }

    .block ul{
        list-style-type: none;
        margin: 0px;
        padding: 0px;
    }

    .block ul li{
        display: inline-block;
        width: 20%;
        text-align: left;
        font-size: 18px;
    }

    .block ul li span{
        display: block;
        font-size: 11px;
        text-transform: uppercase;
    }
</style>
