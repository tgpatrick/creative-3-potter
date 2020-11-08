<template>
  <div class="container neuBig">
    <template v-if="!showDetail">
      <div class="characters">
        <h2>Select a name for detail</h2>
        <div class="characterContainer" v-for="character in characters" :key="character._id">
          <div class="character">
            <h3 class="name" v-on:click="toggleDetail(character)">{{character.name}}</h3>
            <div class="charButtonContainer">
              <button class="charButton neuSmall" v-on:click="toggleFavorite(character)">{{favoriteStatus(character)}}</button>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="detail">
        <div class="doneButtonContainer">
          <button class="doneButton neuSmall" v-on:click="toggleDetail(character)">Done</button>
        </div>
        <h1>{{character.name}}</h1>
        <div class=charData>
          <p class="key">House:</p>
          <p class="data">{{convert(character.house)}}</p>
        </div>
        <div class=charData>
          <p class="key">Death Eater:</p>
          <p class="data">{{convert(character.deathEater)}}</p>
        </div>
        <div class="charData">
          <p class="key">Dumbledore's Army:</p>
          <p class="data">{{convert(character.dumbledoresArmy)}}</p>
        </div>
        <div class="charData">
          <p class="key">Order of the Phoenix:</p>
          <p class="data">{{convert(character.orderOfThePhoenix)}}</p>
        </div>
        <div class="charData">
          <p class="key">Role:</p>
          <p class="data">{{convert(character.role)}}</p>
        </div>
        <div class="charData">
          <p class="key">School:</p>
          <p class="data">{{convert(character.school)}}</p>
        </div>
        <div class="charData">
          <p class="key">Species:</p>
          <p class="data">{{convert(character.species)}}</p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  let data = {
    showDetail: false,
    character: {}
  }
  export default {
    name: 'Characters',
    data: data,
    computed: {
      characters() {
        return this.$root.$data.characters;
      }
    },
    methods: {
      favoriteStatus(character) {
        if (this.$root.$data.favoriteChars.indexOf(character) == -1) {
          return "Favorite";
        } else {
          return "Unfavorite";
        }
      },
      toggleFavorite(character) {
        if (this.favoriteStatus(character) == "Favorite") {
          this.$root.$data.favoriteChars.push(character);
        } else {
          let index = this.$root.$data.favoriteChars.indexOf(character);
          this.$root.$data.favoriteChars.splice(index, 1);
        }
      },
      toggleDetail(character) {
        this.character = character;
        this.showDetail = !this.showDetail;
        this.$forceUpdate();
        console.log(character);
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
  .container {
    max-width: 450px;
    max-height: 500px;
    margin-top: 50px;
    overflow: scroll;
  }

  .characters {
    border-radius: 10px;
  }

  .character {
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

  .charButtonContainer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    grid-area: button;
    margin-right: 15px;
  }

  .charButton {
    height: 30px;
    width: 75px;
  }

  .doneButtonContainer {
    display: flex;
    justify-content: flex-end;
  }

  .doneButton {
    height: 25px;
    margin-top: 15px;
    margin-right: 15px;
  }

  .charData {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "key data";
  }

  .key {
    grid-area: key;
  }

  .data {
    grid-area: data;
  }
</style>