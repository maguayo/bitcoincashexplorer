<template>
    <header id="header">
        <div class="container">
            <img alt="Bitcoin Cash" src="../assets/logo.png" id="logo" />
            <Navigation />
        </div>
    </header>
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
    #logo{
        width: 250px;
        margin-top: 25px;
        margin-bottom: 25px;
        float: left;
    }

</style>
