<template>

  <b-container style="margin-top: 40px;">
      
    <b-row>

      <b-col>

        <h3>{{ $t( 'legal_header' ) }}</h3>

        <div style="margin-top: 40px;" v-html="replaceJSONLineBreaks"></div>

      </b-col>

    </b-row>

    <b-row style="margin-top: 40px;">

      <b-col>

        <div class="alert alert-success" role="alert">
          <h4 class="alert-heading">{{ $t( 'home.privacy_policy' ) }}</h4>
          {{ $t( 'home.no_data_stored' ) }}
        </div>

      </b-col>

    </b-row>

  </b-container>

</template>

<script>
export default {
  name: 'Legal',
  components: {},
  data () {
    return {}
  },
  computed: {
    replaceJSONLineBreaks: function(){
      return this.$t( 'legal' ).replace( /(?:\r\n|\r|\n)/g, '<br />' );
    }
  }
}
</script>
