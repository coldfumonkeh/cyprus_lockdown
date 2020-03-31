<template>

  <b-container style="margin-top: 40px;">
      
    <b-row>

      <b-col v-if="under_curfew">
        <div class="alert alert-danger" role="alert">
          <h4 class="alert-heading">{{ $t( 'forms.curfew_active' ) }}</h4>
        </div>
      </b-col>

      <b-col v-if="!under_curfew">

        <h3>{{ $t( 'sms.sms_header' ) }}</h3>

        <b-form>

          <b-form-group style="margin-top: 40px;" :label="$t( 'sms.id_passport' )"> 
            <b-form-input id="undersigned_input" v-model="id_value" :placeholder="$t( 'sms.id_passport' )" />
          </b-form-group>

          <b-form-group :label="$t( 'sms.postcode' )">
            <b-form-input id="id_input" v-model="postcode_value" :placeholder="$t( 'sms.postcode' )" />
          </b-form-group>

          <b-form-group>
            <div v-for="( option, i ) in decree_options" :key="`Option${i+1}`">
              <b-form-radio v-model="selectedOption" name="selection" :value="i+1">{{ i+1 }}. {{ $t( `forms.b.options.${i+1}` ) }}</b-form-radio>
            </div>
          </b-form-group>

          <div v-if="selectedOption == 8">
            <b-form-textarea v-model="anyOtherReasonText" rows="3" max-rows="6" :placeholder="$t( 'forms.b.any_other_reason_placeholder' )"></b-form-textarea>
          </div>

          <b-button block variant="primary" @click="validateForm">{{ $t( 'sms.create_sms_button' ) }}</b-button>

        </b-form>

      </b-col>

    </b-row>

  </b-container>

</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  name: 'SMS',
  components: {},
  data () {
    return {
      decree_options    : 8,
      id_value          : null,
      postcode_value    : null,
      selectedOption    : null,
      anyOtherReasonText: null,
      under_curfew      : false
    }
  },
  created: function(){
    if( this.$parent.under_curfew ){
      this.under_curfew = true;
    }
  },
  validations: {
    id_value: {
      required
    },
    postcode_value: {
      required
    }
  },
  methods: {
    validateForm: function(){
      if( this.$v.$invalid ){
        this.$swal( {
          text: this.$t( 'forms.missing_info' ),
          icon: 'error',
          confirmButtonText: this.$t( 'forms.ok_modal_button' )
        } );
      } else {
        this.buildSMS();
      }
    },
    isApple: function(){
      var uagent = navigator.userAgent.toLowerCase();
      return uagent.search("iphone") > -1 || uagent.search("ipad") > -1 || uagent.search("macintosh") > -1 ;
    },
    buildSMS: function(){
      var divider = ( this.isApple() ) ? '&' : '?';
      const phone = '8998';
      let messageContent = this.selectedOption + ' ' + this.id_value + ' ' + this.postcode_value;
      // if( this.selectedOption == 8 ){
      //   messageContent = messageContent + ' ' + this.anyOtherReasonText;
      // }
      let smsURL = 'sms:' + phone + divider + "body=" + encodeURIComponent( messageContent );
      window.location.href = smsURL;
    }
  }
}
</script>
