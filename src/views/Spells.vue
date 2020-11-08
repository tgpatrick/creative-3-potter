<template>
  <div class="container neuBig">
    <template v-if="!showDetail">
      <div class="spells">
        <h2>Select a spell for detail</h2>
        <div class="spellContainer" v-for="spell in spells" :key="spell._id">
          <div class="spell">
            <h3 class="name" v-on:click="toggleDetail(spell)">{{spell.spell}}</h3>
            <div class="spellButtonContainer">
              <button class="spellButton neuSmall" v-on:click="toggleFavorite(spell)">{{favoriteStatus(spell)}}</button>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="detail">
        <div class="doneButtonContainer">
          <button class="doneButton neuSmall" v-on:click="toggleDetail(spell)">Done</button>
        </div>
        <h1>{{spell.spell}}</h1>
        <div class=spellData>
          <p class="key">Type:</p>
          <p class="data">{{convert(spell.type)}}</p>
        </div>
        <div class=spellData>
          <p class="key">Effect:</p>
          <p class="data">{{convert(spell.effect)}}</p>
        </div>
      </div>
    </template>
  </div>
</template>


<script>
  let data = {
    showDetail: false,
    spell: {}
  }
  export default {
    name: 'Spells',
    data: data,
    computed: {
      spells() {
        return this.$root.$data.spells;
      }
    },
    methods: {
      favoriteStatus(spell) {
        if (this.$root.$data.favoriteSpells.indexOf(spell) == -1) {
          return "Favorite";
        } else {
          return "Unfavorite";
        }
      },
      toggleFavorite(spell) {
        if (this.favoriteStatus(spell) == "Favorite") {
          this.$root.$data.favoriteSpells.push(spell);
        } else {
          let index = this.$root.$data.favoriteSpells.indexOf(spell);
          this.$root.$data.favoriteSpells.splice(index, 1);
        }
      },
      toggleDetail(spell) {
        this.spell = spell;
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

<style>
  .spells {
    border-radius: 10px;
  }

  .spell {
    width: 100%;
    display: grid;
    grid-template-columns: 1.5fr .5fr 1fr;
    grid-template-areas: "name none button";
    min-height: 50px;
    border-bottom: 1px solid black;
  }

  .name {
    grid-area: name;
    text-align: left;
  }

  .spellButtonContainer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    grid-area: button;
    margin-right: 15px;
  }

  .spellButton {
    height: 30px;
    width: 75px;
  }

  .spellData {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "key data";
  }
</style>
