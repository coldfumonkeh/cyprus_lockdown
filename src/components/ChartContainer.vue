<template>

    <b-container style="margin-top: 40px;">

        <b-row>

            <b-col>

                <h3>{{ $t( 'line_chart_header' ) }}</h3>

                

            </b-col>

        </b-row>

        <b-row>

            <b-col col-sm="6">

                <line-chart
                    v-if="loaded"
                    :chartdata="chartdata"
                    :options="options" />

            </b-col>

        </b-row>

    </b-container>
</template>

<script>
import LineChart from './LineChart.vue'

export default {
  name: 'LineChartContainer',
  components: { LineChart },
  data: () => ({
        arrChartLabels: [],
        arrDeaths     : [],
        arrConfirmed  : [],
        arrRecovered  : [],
        loaded        : false,
        chartdata     : null,
        options       : { responsive: true }
  }),
  async mounted () {
    this.loaded = false
    this.fetchTimeSeries();
  },
  methods: {
    fetchTimeSeries: function(){
        var _self = this;
        fetch( "https://pomber.github.io/covid19/timeseries.json" )
            .then( response => response.json() )
            .then( data => {
                data[ "Cyprus" ].forEach( function( item ){
                    if( item.confirmed > 0 ){
                        _self.arrConfirmed.push( item.confirmed );
                        _self.arrDeaths.push( item.deaths );
                        _self.arrRecovered.push( item.recovered );
                        _self.arrChartLabels.push( item.date );
                    }
                } );
                // this.loaded = true;
                this.manageDataSet();
            } );
    },
    manageDataSet: function(){
        var _self = this;
        var dataCollection = {
            labels: _self.arrChartLabels,
            datasets: [
                {
                    label: 'Deaths',
                    data: _self.arrDeaths,
                    backgroundColor: '#F32013',
                    fill: true
                },
                {
                    label: 'Recovered',
                    data: _self.arrRecovered,
                    backgroundColor: '#228B22',
                    fill: true
                },

                {
                    label: 'Confirmed',
                    data: _self.arrConfirmed,
                    backgroundColor: '#6c757d',
                    fill: true
                }
            ]
        };
        _self.chartdata = dataCollection;
        _self.loaded = true;
    }
  }
}
</script>