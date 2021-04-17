<template>
  <div class="footer">
    <div class="copyright">
      ©2021 AM Model design by ataola | All Rights Reserved
    </div>
    <div class="concact">
      <!-- <font-awesome-icon :icon="['fab', 'weixin']" /> -->
      <div class="concact-item">
        <a href="https://weibo.com/u/5604870199" target="_blank">
          <font-awesome-icon :icon="['fab', 'weibo']" />
        </a>
      </div>
      <div class="concact-item">
        <a href="https://www.instagram.com/ammodels.agency" target="_blank">
          <font-awesome-icon :icon="['fab', 'instagram-square']" />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 1rem;
  background-color: #eaeaea;
  color: #898989;
  .copyright {
    display: flex;
    font-size: 0.18rem;
  }
  .concact {
    display: flex;
    font-size: 0.3rem;
    .concact-item {
      display: flex;
      margin: 0 0.1rem;
    }
  }
}
</style>
