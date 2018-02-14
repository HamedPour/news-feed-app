<template>
  <v-app>
    <div class="wrapper">
      <v-toolbar fixed dark color="primary">
        <v-toolbar-title class="white--text">iNews</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="reloadPage">
          <v-icon >refresh</v-icon>
        </v-btn>
      </v-toolbar>

      <v-container>
        <source-selection></source-selection>
        <v-divider></v-divider>
        <news-list></news-list>
      </v-container>
      <v-footer fixed class="pa-3">
        <v-spacer></v-spacer>
        <div><a href="https://github.com/HamedPour">HamedPour</a> &copy; {{ new Date().getFullYear() }}
          - Api courtesy of newsapi.org
        </div>
        <v-spacer></v-spacer>
      </v-footer>
    </div>
  </v-app>
</template>

<script>
import SourceSelection from './components/SourceSelection.vue'
import NewsList from './components/NewsList.vue'
export default {
  components: {
    'source-selection': SourceSelection,
    'news-list': NewsList
  },
  methods: {
    reloadPage () {
      location.reload()
    }
  },
  name: 'App'
}
</script>

<style scoped media="screen">
  a {
    text-decoration: none;
    color: #000 !important;
  }
</style>
