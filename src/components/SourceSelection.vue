<template lang="html">
    <div>
      <v-container style="">
        <v-layout>
          <v-flex xs12 md6 lg8 offset-md3 offset-lg2>
            <h1 class="display-2 text-xs-center pb-3 mb-4 mt-5">
              Your News Feed
            </h1>
            <h3 class="title text-xs-center">Select News Source</h3>
            <div>
              <v-select
                  v-model="source"
                  label="Source Name"
                  :items="sources"
                  single-line
                  item-text="name"
                  max-height="500"
                  prepend-icon="library_books"
                >
              </v-select>
            </div>
            <div v-if="source" class="text-xs-center">
              <p>{{source.description}}</p>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="toWebsite(source.url)">
                {{(source.name).replace(/ *\([^)]*\) */g, "")}} Website
              </v-btn>
              <v-btn @click="resetPage">reset</v-btn>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      source: null,
      sources: []
    }
  },
  watch: {
    source: function () {
      this.$store.dispatch('getArticles', this.source.id)
    }
  },
  methods: {
    toWebsite (url) {
      window.location.href = url
    },
    resetPage () {
      this.$store.dispatch('resetPage')
      this.source = ''
    }
  },
  created () {
    axios.get('https://newsapi.org/v1/sources?language=en')
      .then(res => {
        this.sources = res.data.sources
      })
      .catch(err => {
        console.log('Error in SourceSelection component', err)
      })
  }
}
</script>
