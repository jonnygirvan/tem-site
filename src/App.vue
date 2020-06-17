<template>
  <div id="app">
    <img src="/img/logo.svg" alt="TEM Logo" id="logo">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">Our Facilities</router-link>
      <router-link to="/about">About Us</router-link>
      <router-link to="/about">Contact Us</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default padding */
ul[class],
ol[class] {
  padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

#app {
  font-family: 'Nunito Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4c5b69;
}

h1,h2,h3,h4,h5,h6 {
  font-family: 'Ubuntu', sans-serif;
}

#nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(12, 13, 61, 1);
  z-index: 99;
  padding: 0 24px;
  box-shadow: 0 12px 24px rgba(0,0,0,0.2);
}

#nav a {
  display: inline-block;
  /* font-weight: bold; */
  color: rgba(255, 255, 255, 0.8);
  padding: 16px;
  text-decoration: none;
  font-size: 20px;
  transition: 180ms ease-out;
}

#nav a:hover {
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #F26101;
  /* text-decoration: underline; */
}

#logo {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  height: 28px;
  margin: 12px 24px;
}

p {
  line-height: 1.5;
}

.p--large {
  font-size: 24px;
  margin: 16px 0;
  line-height: 32px;
}
</style>
