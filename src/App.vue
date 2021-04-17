<template>
  <div id="app">
    <start-up v-if="isFullPage"></start-up>
    <com-layout v-else></com-layout>
  </div>
</template>

<script>
import _ from 'lodash'
import title from '@config/title'
import StartUp from '@views/StartUp.vue'
import ComLayout from '@components/common/Layout.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    StartUp,
    ComLayout
  },
  data() {
    return {
      isFullPage: true
    }
  },
  created() {
    const debouncedComputeRootFontSize = _.debounce(this.computeRootFontSize, 1000)
    document.addEventListener('DOMContentLoaded', debouncedComputeRootFontSize)
    window.addEventListener(
      'orientationchange' in window ? 'orientationchange' : 'resize',
      debouncedComputeRootFontSize
    )
    this.computeRootFontSize()
  },
  computed: {
    ...mapState(['language']),
    languageTitle() {
      return title[this.language]
    }
  },
  methods: {
    computeRootFontSize() {
      const documentElement = document.documentElement
      let clientWidth = documentElement.clientWidth
      clientWidth = clientWidth < 750 ? clientWidth : 750
      documentElement.style.fontSize = clientWidth / 7.5 + 'px'
    }
  },
  watch: {
    $route(to, from) {
      const { name } = to
      document.title = this.languageTitle[name]
      this.isFullPage = name === 'StartUp'
    },
    language(newLanguage) {
      const { name } = this.$route
      document.title = this.languageTitle[name]
    }
  }
}
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
</style>
