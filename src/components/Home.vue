<template>

  <b-container>

    <b-jumbotron header="Cyprus Lockdown Forms" lead="#stayInside #stayhome"></b-jumbotron>

    <b-row class="text-center">

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
  name: 'Home'
}
</script>
