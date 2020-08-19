<template>
  <div>
    <div class="timer-pos">
      <div class="timer">
        <div class="pie spinner"></div>
        <div class="pie filler"></div>
        <div class="mask"></div>
      </div>
    </div>
    <div class="container">
      <h2 class="btc">1 BTC</h2> 
      <h1 class="current">{{ pricenow }}</h1>
      <div class="row info">
        <div class="col-xs-5 col-sm-4">
          <span class="before">{{ pricelow }}</span>
          <span>Low</span>
        </div>
        <div class="col-xs-2 col-sm-4">
          <span></span>
          <span class="percent up">{{ pricepercent }}</span>
        </div>
        <div class="col-xs-5 col-sm-4">
          <span class="top">{{ pricehigh }}</span>
          <span>High</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import numeral from 'numeral';

var apiUrl = 'https://vip.bitcoin.co.id/api/btc_idr/ticker';

export default {
  name: 'WatchPanel',
  data: function () {
    return {
      pricenow : null,
      pricelow : null,
      pricehigh : null,
      pricepercent : null
    }
  },
  methods: {
    loadData: function () {
      var self = this;

      axios.get(apiUrl)
      .then(function(response){
        var content = response.data.ticker;
        // console.log(content);
        self.pricenow   = numeral(content.last).format('0,0');
        self.pricelow   = numeral(content.low).format('0,0');
        self.pricehigh  = numeral(content.high).format('0,0');
        self.pricepercent = numeral( ( ( (content.last/ content.low) *100 ) -100) /100 ).format('0.00%');
        document.title = self.pricenow + ' - ' + self.pricepercent;
      })
    }
  },
  mounted: function () {
    this.loadData();

    setInterval(function () {
      this.loadData();
    }.bind(this), 10000);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
