<template>
  <div id="app">
    <div id="menu">
      <div id="name">
        <p>Harry Potter</p>
        <p>Quick Reference</p>
      </div>
      <div id="house">
        <p>Your house theme: </p>
        <p id="yourHouse">{{this.$root.$data.house}}</p>
        <button v-on:click=getHouse id="sortinghat" class="neuSmall">
          <img id="sortimg" src="/images/hat.png" alt="Find your house">
          <p id="sorttext">Sort</p>
        </button>
      </div>
      <div id="buttons">
        <div id="main">
          <router-link tag="but" to="/">
            <p>Home</p>
          </router-link>
          <router-link tag="but" to="/favorites">
            <p>Favorites</p>
          </router-link>
        </div>
        <div id="content">
          <router-link tag="but" to="/characters">
            <p>Characters</p>
          </router-link>
          <router-link tag="but" to="/spells">
            <p>Spells</p>
          </router-link>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'app',
    methods: {
      getHouse() {
        axios.get("https://www.potterapi.com/v1/sortingHat")
          .then(response => {
            this.$root.$data.house = response.data;
          })
      }
    }
  }
</script>

<style>
  @font-face {
    font-family: 'Harry Potter Regular';
    font-style: normal;
    font-weight: normal;
    src: local('Harry Potter Regular'), url('../public/HARRP___.woff') format('woff');
  }

  body {
    background-color: #d6d6d6;
    color: #060606;
    font-weight: bold;
    text-align: center;
    transition: 1s;
  }

  .router-link-exact-active {
    border-radius: 10px;
    color: #515151;
    background: linear-gradient(145deg, #c1c1c1, #e5e5e5);
    box-shadow: inset 7px 7px 14px #afafaf,
      inset -7px -7px 14px #fdfdfd;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #name,
  #buttons,
  #yourHouse,
  #sortinghat {
    font-family: 'Harry Potter Regular';
  }

  #menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    margin: 0 auto !important;

    margin: 25px;
    padding: 15px;
    border-radius: 45px;
    background: linear-gradient(145deg, #e5e5e5, #c1c1c1);
    box-shadow: 30px 30px 59px #adadad,
      -30px -30px 59px #ffffff;
  }

  #name {
    font-size: 1.5em;
  }

  #main,
  #content {
    display: flex;
    justify-content: center;
  }

  #house {
    display: flex;
    align-items: center;
  }

  #yourHouse {
    width: 100px;
    margin-right: 5px;
  }

  #house button {
    font-size: .85em;
    width: 4em;
    height: 4em;

    border-radius: 10px;
    color: #515151;
    background: linear-gradient(145deg, #e5e5e5, #c1c1c1);
    box-shadow: 7px 7px 14px #afafaf,
      -7px -7px 14px #fdfdfd;
    transition: .2s;
  }

  #house button:hover {
    box-shadow: 10px 10px 17px #afafaf,
      -10px -10px 17px #fdfdfd;
  }

  #house img {
    width: 80%;
    max-height: 50%;
    margin-top: .25em;
  }

  #sorttext {
    position: relative;
    bottom: 5px;
    margin: 0;
    padding: 0;
  }

  #buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  but {
    margin: 15px;
    height: 50px;
    width: 80px;
    text-align: center;

    border-radius: 10px;
    color: #515151;
    background: linear-gradient(145deg, #e5e5e5, #c1c1c1);
    box-shadow: 7px 7px 14px #afafaf,
      -7px -7px 14px #fdfdfd;
    transition: .5s;
  }

  but:hover {
    margin: 14px;
    height: 52px;
    width: 82px;
  }

  nav but.router-link-active,
  nav but.router-link-exact-active {
    background: linear-gradient(145deg, #e5e5e5, #c1c1c1);
    box-shadow: 7px 7px 14px #afafaf,
      -7px -7px 14px #fdfdfd;
  }
</style>
