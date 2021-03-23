<template>
  <div>
    <the-header @sidenavToggle="displaySidenav = !displaySidenav"/>
    <the-sidenav
    :show="displaySidenav"
    @close="displaySidenav = false"
    />
    <Nuxt />
  </div>
</template>

<script>
import TheHeader from '../components/Navigation/TheHeader.vue'
import TheSidenav from '../components/Navigation/TheSidenav.vue'
export default {
  components:{
    TheHeader,
    TheSidenav
  },
  data() {
    return {
      displaySidenav: false
    }
  },
}
</script>

<style >
  body{
    padding:0;
    margin: 0;
  }
</style>