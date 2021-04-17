<template>
  <div class="profile">
    <div class="part left">
      <h2>{{ modelName }}</h2>
      <ul>
        <li v-for="(value, name) in getUserInfo" :key="name">
          <span>{{ value }}</span>
          <span>{{ modelInfo[name] }}</span>
        </li>
      </ul>
    </div>
    <div class="part right">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(picture, index) in modelInfo.pictures" :key="index">
          <img class="carousel-img" :src="picture" />
        </swiper-slide>
        <div class="swiper-button-white swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-white swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { getModelProfile } from '@api/models'
import { mapGetters } from 'vuex'
const { swiper, swiperSlide } = VueAwesomeSwiper

export default {
  name: 'ModelProfile',
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      modelInfo: {
        name: '--',
        username: '--',
        height: '--',
        bust: '--',
        waist: '--',
        hips: '--',
        shoes: '--',
        eyes: '--',
        hair: '--',
        pictures: []
      },
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 1000,
        loop: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  async created() {
    const { id } = this.$route.params
    const { data } = await getModelProfile(id)
    this.modelInfo = data
  },
  computed: {
    ...mapGetters(['isZh', 'getUserInfo']),
    modelName() {
      const { name, username } = this.modelInfo
      return this.isZh ? username : name
    }
  }
}
</script>
<style lang="scss" scoped>
.part {
  display: flex;
  flex: 1;
}

.profile {
  display: flex;
  margin: 0 auto;
  width: 80%;
  .left {
    flex-wrap: wrap;
    align-content: center;
    h2 {
      display: flex;
      flex-basis: 100%;
      align-items: center;
      margin: 0;
      font-size: 0.6rem;
      padding: 0.4rem;
    }
    ul {
      display: flex;
      flex-basis: 50%;
      flex-wrap: wrap;
      margin: 0;
      li {
        display: flex;
        flex-basis: 100%;
        padding: 0.08rem;
        list-style: none;
        span {
          display: flex;
          flex: 1;
          font-size: 0.2rem;
        }
      }
      & span:first-child {
        color: #999;
      }
    }
  }
  .right {
    height: 6.8rem;
    padding: 0.2rem;
  }
}

.swiper-container {
  max-width: 6rem;
  .carousel-img {
    width: 100%;
    height: 100%;
  }
}

@media screen and(max-width: 414px) {
  .profile {
    width: 100%;
    flex-wrap: wrap;
    .part {
      flex-basis: 100%;
    }
  }
}
</style>
