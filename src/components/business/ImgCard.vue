<template>
  <div class="box" @click="handleClick(value.modelId)">
    <div class="title">
      <span>{{ value.username }}</span>
    </div>
    <img :src="value.url" />
  </div>
</template>
<script>
export default {
  name: 'ImgCard',
  props: {
    value: {
      type: Object,
      default: () => ({
        id: 1,
        nickname: '--',
        cover: ''
      })
    }
  },
  methods: {
    handleClick(id) {
      this.$emit('input', id)
    }
  }
}
</script>
<style lang="scss" scoped>
.box {
  position: relative;
  flex-basis: 32.5%;
  margin-top: 0.1rem;
  margin-right: 0.1rem;
  min-height: 6rem;
  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 95%;
    height: 95%;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 0.32rem;
    display: none;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.box:hover {
  cursor: pointer;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      transition: all 0.2s linear;
      animation: up linear 1s;
    }
  }
}
@media screen and(max-width: 414px) {
  .box {
    flex-basis: 100% !important;
    margin-right: 0;
  }
}

@keyframes up {
  0% {
    transform: translateY(200%);
  }
  100% {
    transform: translateY(0%);
  }
}

@-webkit-keyframes up {
  0% {
    transform: translateY(200%);
  }
  100% {
    transform: translateY(0%);
  }
}
</style>
