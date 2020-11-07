<template>
  <div id="app">
    <div id="menu">
      <div id="name">
        <p>Harry Potter</p>
        <p>Quick Reference</p>
      </div>
      <div id="house">
        <p>Your house: </p>
        <p id="yourHouse">None</p>
        <button id="sortinghat" class="neuSmall">
          <img id="sortimg" src="/hat.png" alt="Find your house">
          <p id="sorttext">Sort</p>
        </button>
      </div>
      <div id="buttons">
        <div id="main">
          <router-link to="/">
            <p>Home</p>
          </router-link>
          <router-link to="/favorites">
            <p>Favorites</p>
          </router-link>
        </div>
        <div id="content">
          <router-link to="/characters">
            <p>Characters</p>
          </router-link>
          <router-link to="/spells">
            <p>Spells</p>
          </router-link>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

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
    margin-left: 10px;
    margin-right: 15px;
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

  #buttons a {
    margin: 15px;
    height: 50px;
    width: 80px;

    border-radius: 10px;
    color: #515151;
    background: linear-gradient(145deg, #e5e5e5, #c1c1c1);
    box-shadow: 7px 7px 14px #afafaf,
      -7px -7px 14px #fdfdfd;
  }
</style>