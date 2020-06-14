<template>
  <div class="home">
    <section id="hero">
      <div id="heroContent">
        <div id="heroContent__text">
          <h1>From prototype</h1>
          <h1>to production</h1>
          <p class="p--large">For over 40 year, TEM has been providing cutting edge manufacturing services.</p>
          <button id="exploreButton">Explore our services</button>
        </div>
        <div id="heroContent__image">
          <transition name="fadeOne">
            <img src="/img/hero/1.png" @load="one = true" v-show="one">
          </transition>
          <transition name="fadeTwo">
            <img src="/img/hero/2.png" @load="two = true" v-show="two">
          </transition>
          <transition name="fadeThree">
            <img src="/img/hero/3.png" @load="three = true" v-show="three">
          </transition>
          <transition name="fadeFour">
            <img src="/img/hero/4.png" @load="four = true" v-show="four">
          </transition>
          <transition name="fadeFive">
            <img src="/img/hero/5.png" @load="five = true" v-show="five">
          </transition>
        </div>
        <div id="vosbContent">
          <p>TEM Inc. is proud to be a Veteran Owned Small Business</p>
          <img src="/img/vosb.png" alt="Veteran Owned Small Business Logo">
        </div>
      </div>
    </section>
    <section id="services">
      <div id="test"></div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data: function() {
    return {
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
    }
  },
  mounted() {
    // this.one = true
    // this.two = true
    // this.three = true
    // this.four = true
    // this.five = true
  },
   methods: {
  }
}
</script>

<style>
  #hero {
    position: relative;
    width: 100%;
    height: 80vh;
    background: rgb(13,39,71);
    background: linear-gradient(331deg, rgb(19, 79, 152) 4%, rgb(17, 19, 78) 50%, rgba(5,3,34,1) 79%);
  }

  #heroContent {
    position: relative;
    display: flex;
    height: 100%;
    padding-top: 60px;
  }

  #heroContent__text {
    position: relative;
    flex: 1 0 40%;
    color: #fff;
    text-align: left;
    padding: 64px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  #heroContent__text h1 {
    font-size: 60px;
    text-transform: capitalize;
    line-height: 72px;
  }

  #heroContent__image {
    position: relative;
    flex: 0 1 60%;
    display: flex;
    height: 100%;
    align-items: center;
    pointer-events: none;
    padding-bottom: 36px;
  }

  #heroContent__image img {
    position: absolute;
    width: 100%;
  }

  #vosbContent {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    color: rgba(255,255,255,0.4);
  }

  #vosbContent img {
    opacity: 0.6;
  }

  #vosbContent p {
    margin-right: 16px;
  }

  #exploreButton {
    position: relative;
    background: none;
    border: none;
    box-shadow: none;
    font-family: 'Nunito Sans', sans-serif;
    color: #F26101;
    padding: 12px 24px;
    font-size: 20px;
    margin-top: 24px;
    transition: 200ms ease-out;
    cursor: pointer;
    z-index: 1;
    display: inline-block;
  }

  #exploreButton:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    border: 2px solid #F26101;
    top: 0;
    left: 0;
    transform: skewX(-12deg);
    border-radius: 2px;
    transition: 200ms ease-out;
    z-index: -1;
  }

  #exploreButton:hover {
    color: #fff;
  }

  #exploreButton:hover:before {
    background: #F26101
  }

  #exploreButton:active, #exploreButton:focus {
    outline: none;
    color: #fff;
  }

  #exploreButton:focus:before {
    border-color: #fff;
  }

  .fadeOne-enter-active {
    transition: opacity 1200ms ease-out 0.1s, transform 1.5s ease-out;
  }

  .fadeOne-enter-to {
    opacity: 1;
    transform: translateY(0);
  }

  .fadeOne-enter {
    opacity: 0;
    transform: translateY(-100px);
  }

  .fadeTwo-enter-active {
    transition: opacity 1.2s ease-out 0.6s, transform 1.4s ease-out 0.5s;
  }

  .fadeTwo-enter {
    opacity: 0;
    transform: translateY(130px);
  }

  .fadeTwo-enter-to {
    opacity: 1;
    transform: translateY(0);
  }

  .fadeThree-enter-active {
    transition: opacity 1s ease-out 0.4s, transform 1.5s ease-out 0.3s;
  }

  .fadeThree-enter {
    opacity: 0;
    transform: translateY(-120px);
  }

  .fadeThree-enter-to {
    opacity: 1;
    transform: translateY(0);
  }

  .fadeFour-enter-active {
    transition: opacity 1.3s ease-out;
  }

  .fadeFour-enter {
    opacity: 0;
  }

  .fadeFour-enter-to {
    opacity: 1;
  }

  .fadeFive-enter-active {
    transition: opacity 0.9s ease-out 0.8s, transform 1.1s ease-out 0.7s;
  }

  .fadeFive-enter {
    opacity: 0;
    transform: translateY(100px);
  }

  .fadeFive-enter-to {
    opacity: 1;
    transform: translateY(0);
  }

  #test {
    margin: 80px;
    height: 600px;
    width: 320px;
    background: #d5e4ff;
  }
</style>