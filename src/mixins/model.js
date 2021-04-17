import ImgList from '@components/business/ImgList'

export default {
  components: {
    ImgList
  },
  data() {
    return {
      models: [],
      currentPage: 1
    }
  },
  computed: {
    totalPages() {
      const len = this.models.length
      const isZero = len % 6 === 0
      return isZero ? len / 6 : len / 6 + 1
    },
    images() {
      const index = (this.currentPage - 1) * 6
      return this.models.slice(index, index + 6)
    }
  },
  methods: {
    handleClick(id) {
      this.$router.push({ name: 'ModelProfile', params: { id } })
    },
    changePage(selectedPage) {
      this.currentPage = selectedPage
    }
  }
}
