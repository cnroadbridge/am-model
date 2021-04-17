<template>
  <div class="home">
    <swiper :options="swiperOption">
      <swiper-slide v-for="banner in banners" :key="banner.id">
        <img class="carousel-img" :src="banner.url" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <ImgList :title="featuredModelsTitle" :value="featuredModelsData" @input="handleClick"></ImgList>
  </div>
</template>

<script>
// @ is an alias to /src
import { getModels } from '@api/models'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import ImgList from '@components/business/ImgList'
import 'swiper/dist/css/swiper.css'
import { mapGetters } from 'vuex'
const { swiper, swiperSlide } = VueAwesomeSwiper

export default {
  name: 'Home',
  components: {
    swiper,
    swiperSlide,
    ImgList
  },
  data() {
    return {
      banners: [],
      featuredModelsData: [],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
          disableOnInteraction: false,
          delay: 3000
        },
        speed: 1000,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  async created() {
    const { data: banners } = await getModels('carousel')
    this.banners = banners
    const { data } = await getModels('featured-models')
    this.featuredModelsData = data
  },
  computed: {
    ...mapGetters(['isZh']),
    featuredModelsTitle() {
      return this.isZh ? '特色模特' : 'Feature Models'
    }
  },
  methods: {
    handleClick(id) {
      this.$router.push({ name: 'ModelProfile', params: { id } })
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  margin: 0.1rem 0;
}

.swiper-container {
  max-width: 12rem;
  height: 7rem;
  .carousel-img {
    width: 100%;
    height: 100%;
  }
}

/deep/.swiper-pagination-bullet-active {
  background: #f0f0f0;
}

/deep/ .swiper-button-white {
  display: none;
}

/deep/ .swiper-container:hover .swiper-button-white {
  display: block;
}

/deep/ .waterfall {
  max-width: 12rem;
  margin: 0.2rem auto;
}

@media screen and(max-width: 414px) {
  .swiper-container {
    height: 5rem;
  }
}
</style>
