<template>
  <div id="app">

    <b-container fluid>

      <b-navbar class="cy-navbar" toggleable="sm">
        <b-navbar-brand to="/">Home</b-navbar-brand>
      
        <b-navbar-toggle target="navbar-toggle-collapse">
        </b-navbar-toggle>

        <b-collapse id="navbar-toggle-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item><router-link to="/sms">{{ $t( 'home.send_sms_header' ) }}</router-link></b-nav-item>
            <b-nav-item><router-link to="/forma">{{ $t( 'home.form_a_header' ) }}</router-link></b-nav-item>
            <b-nav-item><router-link to="/formb">{{ $t( 'home.form_b_header' ) }}</router-link></b-nav-item>
            <b-nav-item><router-link to="/legal">{{ $t( 'legal_header' ) }}</router-link></b-nav-item>
            <div class="pull-right">
              <b-form-select v-model="$i18n.locale">
                <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
              </b-form-select>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

    </b-container>

    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return { langs: ['en', 'el'] }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
.container-fluid {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.cy-navbar {
  background-color: #d57800;
}
a {
  color: #fff !important;
}
</style>
