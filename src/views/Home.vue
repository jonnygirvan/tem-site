<template>
  <div class="home">
    <section id="hero">
      <div id="heroContent">
        <div id="heroContent__text">
          <h1>From prototype</h1>
          <h1>to production</h1>
          <p class="p--large">For over 40 year, TEM has been providing cutting edge manufacturing services.</p>
          <button id="exploreButton" @click="scroll">Explore our services</button>
        </div>
        <div id="heroContent__image">
          <transition name="fadeOne">
            <img src="/img/hero/1.png" @load="one = true" v-show="one" class="responsiveItems">
          </transition>
          <transition name="fadeTwo">
            <img src="/img/hero/2.png" @load="two = true" v-show="two" class="responsiveItems">
          </transition>
          <transition name="fadeThree">
            <img src="/img/hero/3.png" @load="three = true" v-show="three" class="responsiveItems">
          </transition>
          <transition name="fadeFour">
            <img src="/img/hero/4.png" @load="four = true" v-show="four" class="responsiveItems">
          </transition>
          <transition name="fadeFive">
            <img src="/img/hero/5.png" @load="five = true" v-show="five" class="responsiveItems">
          </transition>
          <img src="/img/hero/comp.png" alt="CNC Items" id="responsiveComp">
        </div>
        <div id="vosbContent">
          <p>TEM Inc. is proud to be a Veteran Owned Small Business</p>
          <img src="/img/vosb.png" alt="Veteran Owned Small Business Logo">
        </div>
      </div>
    </section>
    <section id="services">
      <h2>Our Services</h2>
      <div id="servicesIntro">
        <div id="servicesIntro__text">
          <p>Founded 1976 in Southern Maine, TEM INC., is a well diversified precision shop for all your machined components. From multi-axis milling, turning, laser processing, fabrication and assembly, vertical and wire EDM, to metal forming, TEM can be your one-stop manufacturing facility.</p>
          <p>TEM specializes in long and short run production, prototyping and new product introduction. From design, to production, to quality, TEM is dedicated to customer satisfaction.</p>
        </div>
        <div id="servicesIntro__image">
          <img src="/img/smallparts.png" alt="Boesing 787, warships, and turbine">
        </div>
      </div>
    </section>
      <router-view/>
    <certs></certs>
    <contact></contact>
  </div>
</template>

<script>
// @ is an alias to /src
// import Service from '@/components/Service'
import Certs from '@/components/Certs'
import Contact from '@/components/Contact'

export default {
  name: 'Home',
  components: {
    Certs,
    Contact
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
  },
   methods: {
     scroll() {
       const services = document.getElementById('services');
       services.scrollIntoView({behavior: "smooth"});
     }
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

  #responsiveComp {
    display: none;
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

  #services {
    position: relative;
    padding: 140px 48px 0;
    text-align: left;
  }

  #services h2 {
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto 40px;
    color: #4c5b69ab;
  }

  #services h2:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 12px;
    background: rgb(242, 97, 1);
    z-index: -1;
    transform: skewX(-20deg);
    top: 0;
    left: -28px;
    border-radius: 2px;
  }

  #servicesIntro {
    position: relative;
    display: flex;
    width: 100%;
    max-width: 1200px;
    margin: auto;
  }

  #servicesIntro__text {
    font-size: 20px;
    line-height: 1.5;
    margin-right: 40px;
  }

  #servicesIntro__text p {
    margin-bottom: 24px;
  }

  #servicesIntro__image {
    position: relative;
    /* padding: 24px; */
    /* background: linear-gradient(111deg, #dbd2f5, #cae0ff); */
    display: flex;
    align-items: center;
    /* border-radius: 3px; */
  }

  #servicesIntro__image img {
    border-radius: 3px;
  }

  #servicesContainer {
    padding: 100px 48px 60px;
    display: flex;
    position: relative;
    text-align: left;
    flex-wrap: wrap;
  }

  .learnMore {
    color: #F26101;
    text-decoration: none;
    display: block;
    padding: 12px 0;
    font-weight: 600;
  }

  .servicesColumn {
    flex: 0 0 calc(25% - 72px);
    margin: 0 36px;
  }

  .servicesColumn--shift {
    padding-top: 48px;
  }

  @media screen and (max-width: 1300px) {
    .singleServiceImage {
      flex: 0 0 300px!important;
    }
  }

  @media screen and (max-width: 1200px) {
    #servicesContainer {
      padding: 100px 24px 60px;
    }

    .servicesColumn {
      flex: 0 0 calc(33% - 72px);
    }

    .certsInner {
      padding: 0 24px;
    }
  }

  @media screen and (max-width: 1140px) {
    #servicesIntro__image {
      flex: 0 0 40%
    }

    #servicesIntro__image img {
      width: 100%;
    }
  }

  @media screen and (max-width: 960px) {
    .servicesColumn {
      flex: 0 0 calc(50% - 72px);
    }

    #serviceList {
      display: none;
    }

    .singleServiceWrapper {
      flex-direction: column-reverse;
    }
  }

  @media screen and (max-width: 800px) {
    #heroContent__image {
      align-items: flex-start;
      padding-top: 80px;
    }

    .certsInner {
      flex-direction: column;
    }

    .softwareContainer {
      padding-right: 0;
    }

    .qualityContainer {
      padding-left: 0;
      padding-top: 48px;
    }
  }

  @media screen and (max-width: 600px) {
    #hero {
      height: auto;
    }
    #heroContent {
      flex-direction: column;
      padding-top: 90px;
    }
    #heroContent__text {
      padding: 12px 24px;
    }

    #heroContent__image {
      padding-top: 0;
      padding-bottom: 72px;
    }

    .responsiveItems {
      display: none!important;
    }

    #responsiveComp {
      display: inline;
      position: relative!important;
    }

    #heroContent__text h1 {
    font-size: 36px;
    line-height: 44px;
    }

    #heroContent__text .p--large {
      font-size: 18px;
    }

    #exploreButton {
      margin-top: 12px;
    }

    #vosbContent p {
      text-align: left;
    }

    #services {
      padding: 52px 24px 0;
    }
    #servicesIntro__image {
      display: none;
    }

    .servicesColumn {
      flex: 0 0 100%;
      margin: 0;
    }

    .serviceItem {
      margin-bottom: 24px!important;
    }
  }

</style>