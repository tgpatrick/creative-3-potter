<template>
  <div class="container neuBig">
    <template v-if="!showDetail">
      <div class="favorites">
        <div class="characters">
          <h2>Characters</h2>
          <div class="characterContainer" v-for="character in favoriteChars" :key="character._id">
            <div class="character">
              <h3 class="name" v-on:click="toggleDetail(character, 'char')">{{character.name}}</h3>
              <div class="charButtonContainer">
                <button class="charButton neuSmall" v-on:click="toggleCharFavorite(character)">{{favoriteCharStatus(character)}}</button>
              </div>
            </div>
          </div>
        </div>
        <div class="spells">
          <h2>Spells</h2>
          <div class="spellContainer" v-for="spell in favoriteSpells" :key="spell._id">
            <div class="spell">
              <h3 class="name" v-on:click="toggleDetail(spell, 'spell')">{{spell.spell}}</h3>
              <div class="spellButtonContainer">
                <button class="spellButton neuSmall" v-on:click="toggleSpellFavorite(spell)">{{favoriteSpellStatus(spell)}}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="detailType == 'char'">
      <div class="detail">
        <div class="doneButtonContainer">
          <button class="doneButton neuSmall" v-on:click="toggleDetail(character)">Done</button>
        </div>
        <h1>{{detailObject.name}}</h1>
        <div class=charData>
          <p class="key">House:</p>
          <p class="data">{{convert(detailObject.house)}}</p>
        </div>
        <div class=charData>
          <p class="key">Death Eater:</p>
          <p class="data">{{convert(detailObject.deathEater)}}</p>
        </div>
        <div class="charData">
          <p class="key">Dumbledore's Army:</p>
          <p class="data">{{convert(detailObject.dumbledoresArmy)}}</p>
        </div>
        <div class="charData">
          <p class="key">Order of the Phoenix:</p>
          <p class="data">{{convert(detailObject.orderOfThePhoenix)}}</p>
        </div>
        <div class="charData">
          <p class="key">Role:</p>
          <p class="data">{{convert(detailObject.role)}}</p>
        </div>
        <div class="charData">
          <p class="key">School:</p>
          <p class="data">{{convert(detailObject.school)}}</p>
        </div>
        <div class="charData">
          <p class="key">Species:</p>
          <p class="data">{{convert(detailObject.species)}}</p>
        </div>
      </div>
    </template>
    <template v-else-if="detailType == 'spell'">
      <div class="detail">
        <div class="doneButtonContainer">
          <button class="doneButton neuSmall" v-on:click="toggleDetail(spell)">Done</button>
        </div>
        <h1>{{detailObject.spell}}</h1>
        <div class=spellData>
          <p class="key">Type:</p>
          <p class="data">{{convert(detailObject.type)}}</p>
        </div>
        <div class=spellData>
          <p class="key">Effect:</p>
          <p class="data">{{convert(detailObject.effect)}}</p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  let data = {
    showDetail: false,
    detailObject: {},
    detailType: ""
  }
  export default {
    name: 'Favorites',
    data: data,
    computed: {
      favoriteChars() {
        return this.$root.$data.favoriteChars;
      },
      favoriteSpells() {
        return this.$root.$data.favoriteSpells;
      }
    },
    methods: {
      favoriteCharStatus(character) {
        if (this.$root.$data.favoriteChars.indexOf(character) == -1) {
          return "Favorite";
        } else {
          return "Unfavorite";
        }
      },
      favoriteSpellStatus(spell) {
        if (this.$root.$data.favoriteSpells.indexOf(spell) == -1) {
          return "Favorite";
        } else {
          return "Unfavorite";
        }
      },
      toggleCharFavorite(character) {
        if (this.favoriteCharStatus(character) == "Favorite") {
          this.$root.$data.favoriteChars.push(character);
        } else {
          let index = this.$root.$data.favoriteChars.indexOf(character);
          this.$root.$data.favoriteChars.splice(index, 1);
        }
        this.$forceUpdate();
      },
      toggleSpellFavorite(spell) {
        if (this.favoriteSpellStatus(spell) == "Favorite") {
          this.$root.$data.favoriteSpells.push(spell);
        } else {
          let index = this.$root.$data.favoriteSpells.indexOf(spell);
          this.$root.$data.favoriteSpells.splice(index, 1);
        }
        this.$forceUpdate();
      },
      toggleDetail(object, type) {
        this.detailObject = object;
        this.detailType = type;
        this.showDetail = !this.showDetail;
        this.$forceUpdate();
      },
      convert(data) {
        if (data == false) {
          return "No";
        } else if (data == true) {
          return "True";
        } else if (data == undefined) {
          return "N/A";
        } else {
          if (typeof data !== 'string') return data;
          return data.charAt(0).toUpperCase() + data.slice(1);
        }
      }
    }
  }
</script>

<style scoped>
.favorites {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.character,
.spell {
  height: 75px;
}
</style>
