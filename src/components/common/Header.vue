<template>
  <div class="header">
    <div class="header-top">
      <h2 class="logo">
        <router-link :to="{ name: 'Home' }">
          <img src="@static/brands/brand-am-model-normal.jpeg" alt="logo" />
        </router-link>
      </h2>
      <div class="language">
        <span :class="{ 'language-active': isZh }" @click="changeLanguage('zh')">中</span>
        <span>|</span>
        <span :class="{ 'language-active': !isZh }" @click="changeLanguage('en')">EN</span>
      </div>
    </div>
    <div class="header-bottom">
      <ul class="nav-container">
        <li v-for="navigation in navigations" :key="navigation.id">
          <router-link :to="{ name: navigation.name }" active-class="link-active">
            {{ navigation[language] }}
          </router-link>
          <ul v-if="navigation.children" class="nav-dropdown">
            <li v-for="item in navigation.children" :key="item.id">
              <router-link :to="{ name: item.name }">{{ item[language] }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'Header',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      language: state => state.language,
      navigations: state => state.navigations
    }),
    ...mapGetters(['isZh'])
  },
  methods: {
    ...mapActions(['changeLanguage'])
  }
}
</script>
<style lang="scss" scoped>
a {
  color: #333;
  text-decoration: none;
}

a:hover {
  border-bottom: 2px solid #776f6f;
}

.link-active {
  border-bottom: 2px solid #776f6f;
}

.language-active {
  color: #000;
}

.header {
  width: 100%;
  // height: 1.6rem;
  box-sizing: border-box;
  border-bottom: 1px solid #d4d4d4;
  .header-top {
    position: relative;
    width: 100%;
    padding-top: 0.2rem;
    height: 0.8rem;
    .logo {
      font-size: 0.24rem;
      margin: 0;
      text-align: center;
      a {
        img {
          width: 1rem;
          height: 0.6rem;
        }
      }
    }
    .language {
      position: absolute;
      top: -0.5rem;
      right: 0.5rem;
      height: 100%;
      color: #999;
      span {
        font-size: 0.18rem;
        margin: 0.04rem;
        cursor: pointer;
      }
    }
  }
  .header-bottom {
    display: flex;
    justify-content: center;
    height: 0.8rem;
    font-size: 0.2rem;
    .nav-container {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-basis: 80%;
      height: 100%;
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        position: relative;
        display: block;
        padding: 0.05rem;
        ul.nav-dropdown {
          position: absolute;
          top: 0.34rem;
          display: none;
          width: 1.6rem;
          padding: 0;
          background-color: #333;
          opacity: 0.9;
          font-size: 0.16rem;
          list-style: none;
          z-index: 13;
          li {
            padding: 0.15rem 0.1rem 0;
            &:last-child {
              padding: 0.15rem 0.1rem;
            }
            a {
              color: #fff;
            }
            a:hover {
              border-bottom: 1px solid #fff;
            }
          }
        }
        &:hover ul {
          display: block;
        }
      }
    }
  }
}
</style>
