<template>
  <div id="app" class="watchpanel">
    

    <WatchPanel/>

    <!-- Template Footer -->
    <footer id="footer">
      <div class="container">
        <p>Price in IDR. Source by <a href="https://vip.bitcoin.co.id/chart/btcidr" target="_blank">Bitcoin.co.id</a></p>
      </div>
    </footer><!-- #footer -->
  </div>
</template>

<script>
import WatchPanel from './components/WatchPanel'

export default {
  name: 'app',
  components: {
    WatchPanel
  }
}

//GA
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-110463180-1');
</script>

<style scoped>

</style>
