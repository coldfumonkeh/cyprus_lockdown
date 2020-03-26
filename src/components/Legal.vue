<template>

  <b-container style="margin-top: 40px;">
      
    <b-row>

      <b-col>

        <div v-html="replaceJSONLineBreaks"></div>

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
