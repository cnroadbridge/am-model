import Vue from 'vue'
import Vuex from 'vuex'
import { CHANGE_LANGUAGE } from './mutations-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: 'zh',
    navigations: [
      {
        id: 1,
        zh: '亚洲',
        en: 'Asian',
        name: 'ModelAsian',
        children: [
          {
            id: 11,
            zh: '男模',
            en: 'Male Models',
            name: 'ModelAsianMale'
          },
          {
            id: 12,
            zh: '女模',
            en: 'Female Models',
            name: 'ModelAsianFemale'
          }
        ]
      },
      {
        id: 2,
        zh: '国际',
        en: 'International',
        name: 'ModelInternational',
        children: [
          {
            id: 21,
            zh: '男模',
            en: 'Male Modles',
            name: 'ModelInternationalMale'
          },
          {
            id: 22,
            zh: '女模',
            en: 'Female Modles',
            name: 'ModelInternationalFemale'
          }
        ]
      },
      {
        id: 3,
        zh: '关于',
        en: 'About',
        name: 'About'
      }
    ],
    userinfo: {
      zh: {
        height: '身高',
        bust: '胸围',
        waist: '腰围',
        hips: '臀围',
        shoes: '鞋码'
        // eyes: '眼睛',
        // hair: '头发'
      },
      en: {
        height: 'Height',
        bust: 'Bust',
        waist: 'Waist',
        hips: 'Hips',
        shoes: 'Shoes'
        // eyes: 'Eyes',
        // hair: 'Hair'
      }
    }
  },
  getters: {
    isZh: state => {
      return state.language === 'zh'
    },
    getUserInfo: state => {
      const { language, userinfo } = state
      return userinfo[language]
    }
  },
  mutations: {
    [CHANGE_LANGUAGE](state, language) {
      state.language = language
    }
  },
  actions: {
    changeLanguage({ commit }, language) {
      commit('changeLanguage', language)
    }
  },
  modules: {}
})
