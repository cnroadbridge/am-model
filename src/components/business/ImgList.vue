<template>
  <div class="waterfall">
    <div class="title">{{ title }}</div>
    <template v-for="model in value">
      <img-card :value="model" :key="model.id" @input="handleClick"></img-card>
    </template>
  </div>
</template>
<script>
import ImgCard from '@components/business/ImgCard.vue'
export default {
  name: 'ImgList',
  components: {
    ImgCard
  },
  props: {
    title: { type: String, default: () => '' },
    value: { type: Array, default: () => [] }
  },
  methods: {
    handleClick(id) {
      this.$emit('input', id)
    }
  }
}
</script>
<style lang="scss" scoped>
.waterfall {
  display: flex;
  flex-wrap: wrap;
  .title {
    display: flex;
    flex-basis: 100%;
    align-items: center;
    height: 0.6rem;
    font-size: 0.32rem;
    font-weight: bold;
    padding: 0 0.1rem;
    box-sizing: border-box;
  }
}
</style>
