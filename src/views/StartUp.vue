<template>
  <div class="cover">
    <span></span>
    <div class="logo">
      <h2>AM Model</h2>
      <router-link :to="{ name: 'Home' }">Enter&nbsp;&nbsp;&nbsp;&nbsp;➞</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'StartUp'
}
</script>
<style lang="scss" scoped>
.cover {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  background-image: url('../static/cover/bg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  span {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 6;
    background-color: #fff;
    opacity: 0.4;
  }
  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2rem;
    text-align: center;
    z-index: 7;
    transition: all 0.2s linear;
    overflow: hidden;
    cursor: pointer;
    h2 {
      font-size: 0.32rem;
      font-family: monospace;
      animation: down linear 1s;
    }
    a {
      display: block;
      color: #fff;
      opacity: 0.7;
      font-size: 0.24rem;
      text-decoration: none;
      transition: all 0.2s linear;
      animation: up linear 1s;
    }
    a:hover {
      color: #000;
    }
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

@keyframes down {
  0% {
    transform: translateY(-200%);
  }
  100% {
    transform: translateY(0%);
  }
}

@-webkit-keyframes down {
  0% {
    transform: translateY(-200%);
  }
  100% {
    transform: translateY(0%);
  }
}
</style>
