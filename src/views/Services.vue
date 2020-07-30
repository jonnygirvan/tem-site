<template>
  <div id="servicesContainer">
        <div class="servicesColumn">
          <service title="CNC Milling & Turning" slug="cnc" image="/img/services/cnc.svg">
            <p>Given our competitive advantage of managing all precision CNC milling and turning services in-house, TEM has control over the entire manufacturing process, which allows for quality at each step-from selecting and purchasing the appropriate material to machining and welding the customized end product.</p>
            <a href="#" class="learnMore">Learn More</a>
          </service>
          <service title="Wire & Vertical EDM" slug="edm" image="/img/services/edm.svg">
            <p>Our engineering department utilizes CAD/CAM to design precision parts before it moves onto the production floor where our skilled machinists have access to the latest equipment used for electrical discharge machining or Sinker EDM.</p>
            <a href="#" class="learnMore">Learn More</a>
          </service>
        </div>

        <div class="servicesColumn servicesColumn--shift">
          <service title="Laser Cutting" slug="laser" image="/img/services/laser.svg">
            <p>For more than three decades, we have operated multi-axis laser technology for the most difficult aerospace, defense and power generation applications. Over the years we have developed hardware and software features which have become standards in the industry.</p>
            <a href="#" class="learnMore">Learn More</a>
          </service>
          <service title="Metal Forming" slug="metal-forming" image="/img/services/forming.svg">
            <p>Qualified machinists who are highly skilled in working with our state-of-the-art metal forming machinery to produce metal formed parts and can work with a variety of materials, including stainless steel, aluminum, and high strength alloys.</p>
            <a href="#" class="learnMore">Learn More</a>
          </service>
        </div>

        <div class="servicesColumn">
          <service title="Fabrication" slug="fabrication" image="/img/services/fabrication.svg">
            <p>We offer in-house design/build services and can manufacture a wide range of products in any material for numerous industries-from building steel frames for special assembly equipment to parts for aluminum extruding companies, we continually deliver the highest level of customer service.</p>
            <a href="#" class="learnMore">Learn More</a>
          </service>
          <service title="Defense Parts" slug="defense-parts" image="/img/services/defense.svg">
            <p>TEM INC. machines parts for the defense and aerospace industries and has been entrusted to machine quality components for highly sensitive applications for companies such as Pratt Whitney and General Dynamics.</p>
            <a href="#" class="learnMore">Learn More</a>
          </service>
        </div>

        <div class="servicesColumn servicesColumn--shift">
          <service title="Tool & Die" slug="tool-die" image="/img/services/tooldie.svg">
            <p>From simple wrenching tools to complex stamping dies, we can design and build tools to customers’ exact specifications. Our engineers work closely with customers during the tooling design process and consider all aspects that could potentially affect final product quality.</p>
            <a href="#" class="learnMore">Learn More</a>
          </service>
          <service title="Turbine Manufacturing" slug="turbines" image="/img/services/turbine.svg">
            <p>Whether customers come to TEM INC. with a design or are relying upon our expertise to assist them in the development of a new turbine casting part, they can be assured that the level of service we provide rivals that of other turbine manufacturing companies.</p>
            <a href="#" class="learnMore">Learn More</a>
          </service>
        </div>
      </div>
</template>

<script>
// @ is an alias to /src
import Service from '@/components/Service'

export default {
  name: 'Services',
  components: {
    Service
  },
  data: function() {
    return {
    }
  },
  mounted() {
  },

}
</script>

<style>
 


</style>