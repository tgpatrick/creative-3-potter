import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'

require('../public/neuStyles.css')

Vue.config.productionTip = false

let data = {
  house: "None",
  characters: [],
  spells: [],
  favoriteChars: [],
  favoriteSpells: []
}

new Vue({
  router,
  data,
  mounted() {
    axios.get("https://www.potterapi.com/v1/characters?key=$2a$10$QHwfAxhkCyCE2IT8m3AfkuVmKcYNg9TN.PXUeUSQv7W38Su0iIn5u")
      .then(response => {
        this.characters = response.data
        console.log(this.characters);
      })
    axios.get("https://www.potterapi.com/v1/spells?key=$2a$10$QHwfAxhkCyCE2IT8m3AfkuVmKcYNg9TN.PXUeUSQv7W38Su0iIn5u")
      .then(response => {
        this.spells = response.data
        console.log(this.spells);
      })
  },
  render: h => h(App)
}).$mount('#app')