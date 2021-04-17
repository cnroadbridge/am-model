<template>
  <div class="layout">
    <com-header></com-header>
    <transition name="fade">
      <router-view />
    </transition>
    <com-footer></com-footer>
  </div>
</template>

<script>
import ComHeader from '@components/common/Header.vue'
import ComFooter from '@components/common/Footer.vue'

export default {
  name: 'Layout',
  components: {
    ComHeader,
    ComFooter
  }
}
</script>
<style lang="scss" scoped>
.layout {
  width: 100%;
  min-height: 100%;
  position: relative;
  padding-bottom: 1rem;
  box-sizing: border-box;
}

.fade-enter {
  visibility: hidden;
  opacity: 0;
}
.fade-leave-to {
  display: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-to,
.fade-leave {
  visibility: visible;
  opacity: 1;
}
</style>
