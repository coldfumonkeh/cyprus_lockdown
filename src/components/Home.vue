<template>

  <b-container>

    <b-jumbotron header="COVID-19 in Cyprus">

      <b-row v-if="stats_loaded" class="text-center" style="margin-top: 40px;">

        <b-col col-sm="4">
          <h1><span class="text-secondary">{{ currentStats.confirmed }}</span></h1>
          <p>Confirmed</p>
        </b-col>

        <b-col col-sm="4">
          <h1><span class="text-danger">{{ currentStats.deaths }}</span></h1>
          <p>Deaths</p>
        </b-col>

        <b-col col-sm="4">
          <h1><span class="text-success">{{ currentStats.recovered }}</span></h1>
          <p>Recovered</p>
        </b-col>

      </b-row>

    </b-jumbotron>
    
    <b-row class="text-center" style="margin-top: 40px;">

      <b-col col-sm="4">
        <h2>{{ $t( 'home.send_sms_header' ) }}</h2>
        <p>{{ $t( 'home.send_sms_para' ) }}</p>
        <b-button variant="primary" to="/sms">{{ $t( 'home.send_sms_header' ) }}</b-button>
      </b-col>

      <b-col col-sm="4">
        <h2>{{ $t( 'home.form_a_header' ) }}</h2>
        <p>{{ $t( 'home.form_a_para' ) }}</p>
        <b-button variant="primary" to="/forma">{{ $t( 'home.form_a_header' ) }}</b-button>
      </b-col>

      <b-col col-sm="4">
        <h2>{{ $t( 'home.form_b_header' ) }}</h2>
        <p>{{ $t( 'home.form_b_para' ) }}</p>
        <b-button variant="primary" to="/formb">{{ $t( 'home.form_b_header' ) }}</b-button>
      </b-col>

    </b-row>

  </b-container>

</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      stats_loaded: false,
      currentStats: {
        confirmed: 0,
        deaths   : 0,
        recovered: 0
      }
    }
  },
  created: function(){
    this.fetchTimeSeries();
  },
  methods: {
    fetchTimeSeries: function(){
      fetch( "https://pomber.github.io/covid19/timeseries.json" )
      .then( response => response.json() )
      .then( data => {
        data[ "Cyprus" ].forEach( ( { confirmed, recovered, deaths } ) =>
          // this.currentStats.confirmed = confirmed;
          this.currentStats = {
            confirmed,
            deaths,
            recovered
          }
        );
        this.stats_loaded = true;
      } );
    }
  }
}
</script>
