<template lang="html">
    <div>
      <v-container>
        <h3 v-if="articles" class="text-xs-center display-1 mb-3">{{("News List").toUpperCase()}}</h3>
        <h3 v-else class="text-xs-center display-1 mb-3">{{("waiting on your choice...").toUpperCase()}}</h3>
        <v-layout>
          <v-flex xs12 md6 offset-md3>
            <v-card class="mb-4" v-for="(article, index) in articles" :key="index">
              <v-card-media
                  class="white--text"
                  height="300px"
                  :src="article.urlToImage"
                >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline moreVisable">{{article.title}}</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-title>
                  <div>
                    <span class="grey--text">
                      {{monthNames[new Date(article.publishedAt).getMonth()]}}
                      {{new Date(article.publishedAt).getDay()}},
                      {{new Date(article.publishedAt).getFullYear()}}
                    </span><br>
                    <span class="headline">{{article.description}}</span>
                  </div>
                </v-card-title>
                <v-card-actions align-end>
                  <v-spacer></v-spacer>
                  <v-btn flat right color="orange" @click="readMore(article.url)">read more</v-btn>
                </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
</template>

<script>
export default {
  data () {
    return {
      monthNames: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ]
    }
  },
  methods: {
    readMore (url) {
      window.location.href = url
    }
  },
  computed: {
    articles () {
      return this.$store.getters.getArticles
    }
  }
}
</script>

<style lang="scss" media="screen">
.moreVisable {
  text-shadow: 1px 1px 5px rgba(#000,0.8);
}
</style>
