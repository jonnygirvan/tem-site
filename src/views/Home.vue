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
      <h2>Our Services</h2>
      <div id="servicesIntro">
        <div id="servicesIntro__text">
          <p>Founded 1976 in Southern Maine, TEM INC., is a well diversified precision shop for all your machined components. From multi-axis milling, turning, laser processing, fabrication and assembly, vertical and wire EDM, to metal forming, TEM can be your one-stop manufacturing facility.</p>
          <p>TEM specializes in long and short run production, prototyping and new product introduction. From design, to production, to quality, TEM is dedicated to customer satisfaction.</p>
        </div>
        <div id="servicesIntro__image">
          <img src="/img/smallparts.png" alt="CNC Parts">
        </div>
      </div>
      <div id="servicesContainer">
        <div class="servicesColumn">
          <service title="CNC Milling & Turning" image="/img/services/cnc.svg">
            <p>Given our competitive advantage of managing all precision CNC milling and turning services in-house, TEM has control over the entire manufacturing process, which allows for quality at each step-from selecting and purchasing the appropriate material to machining and welding the customized end product.</p>
            <a href="#" class="learnMore">Learn More</a>
          </service>
          <service title="Wire & Vertical EDM" image="/img/services/edm.svg">
            <p>Our engineering department utilizes CAD/CAM to design precision parts before it moves onto the production floor where our skilled machinists have access to the latest equipment used for electrical discharge machining or Sinker EDM.</p>
            <a href="#" class="learnMore">Learn More</a>
          </service>
        </div>

        <div class="servicesColumn servicesColumn--shift">
          <service title="Laser Cutting" image="/img/services/laser.svg">
            <p>For more than three decades, we have operated multi-axis laser technology for the most difficult aerospace, defense and power generation applications. Over the years we have developed hardware and software features which have become standards in the industry.</p>
            <a href="#" class="learnMore">Learn More</a>
          </service>
          <service title="Metal Forming" image="/img/services/forming.svg">
            <p>Qualified machinists who are highly skilled in working with our state-of-the-art metal forming machinery to produce metal formed parts and can work with a variety of materials, including stainless steel, aluminum, and high strength alloys.</p>
            <a href="#" class="learnMore">Learn More</a>
          </service>
        </div>

        <div class="servicesColumn">
          <service title="Fabrication" image="/img/services/fabrication.svg">
            <p>We offer in-house design/build services and can manufacture a wide range of products in any material for numerous industries-from building steel frames for special assembly equipment to parts for aluminum extruding companies, we continually deliver the highest level of customer service.</p>
            <a href="#" class="learnMore">Learn More</a>
          </service>
          <service title="Defense Parts" image="/img/services/defense.svg">
            <p>TEM INC. machines parts for the defense and aerospace industries and has been entrusted to machine quality components for highly sensitive applications for companies such as Pratt Whitney and General Dynamics.</p>
            <a href="#" class="learnMore">Learn More</a>
          </service>
        </div>

        <div class="servicesColumn servicesColumn--shift">
          <service title="Tool & Die" image="/img/services/tooldie.svg">
            <p>From simple wrenching tools to complex stamping dies, we can design and build tools to customers’ exact specifications. Our engineers work closely with customers during the tooling design process and consider all aspects that could potentially affect final product quality.</p>
            <a href="#" class="learnMore">Learn More</a>
          </service>
          <service title="Turbine Manufacturing" image="/img/services/turbine.svg">
            <p>Whether customers come to TEM INC. with a design or are relying upon our expertise to assist them in the development of a new turbine casting part, they can be assured that the level of service we provide rivals that of other turbine manufacturing companies.</p>
            <a href="#" class="learnMore">Learn More</a>
          </service>
        </div>
      </div>
    </section>
    <certs></certs>
    <contact></contact>
  </div>
</template>

<script>
// @ is an alias to /src
import Service from '@/components/Service'
import Certs from '@/components/Certs'
import Contact from '@/components/Contact'

export default {
  name: 'Home',
  components: {
    Service,
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
    padding: 24px;
    background: linear-gradient(111deg, #dbd2f5, #cae0ff);
    display: flex;
    align-items: center;
    border-radius: 3px;
  }

  #servicesContainer {
    padding: 100px 0 60px;
    display: flex;
    position: relative;
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


</style>