<template>
  <div class="list">
    <img-list :value="images" @input="handleClick"></img-list>
    <sliding-pagination
      class="pagination"
      :current="currentPage"
      :total="totalPages"
      @page-change="changePage"
    ></sliding-pagination>
  </div>
</template>
<script>
import modelMixin from '@mixins/model'
import { getModels } from '@api/models'

export default {
  name: 'ModelAsianMale',
  mixins: [modelMixin],
  async created() {
    const { data } = await getModels('asian-male-models')
    this.models = data
  }
}
</script>
<style lang="scss" scoped>
.list {
  max-width: 12rem;
  margin: 0 auto;
}

.pagination {
  margin: 0.2rem 0;
  font-size: 0.2rem;
  text-align: center;
}
</style>
