<template>
  <div id="app">

    <b-container fluid>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item href="/cypruslockdown">Home</b-nav-item>

          <b-nav-item><router-link to="/sms">{{ $t( 'home.send_sms_header' ) }}</router-link></b-nav-item>
          <b-nav-item><router-link to="/forma">{{ $t( 'home.form_a_header' ) }}</router-link></b-nav-item>
          <b-nav-item><router-link to="/formb">{{ $t( 'home.form_b_header' ) }}</router-link></b-nav-item>

          <div class="pull-right">
            <b-form-select v-model="$i18n.locale">
              <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
            </b-form-select>
          </div>

        </b-navbar-nav>
      </b-navbar>
    </b-container>

    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return { langs: ['en', 'gr'] }
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
</style>
