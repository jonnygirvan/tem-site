<template>
  <div id="serviceSingle">
     <ServiceList></ServiceList>
     <SingleService title="CNC Milling and Turning" image="/img/services/cnc.png" v-if="$route.params.service == 'cnc'">
      <p>Our highly skilled and knowledgeable staff of engineers and CNC milling and turning machinists will work with you throughout the design/build and production process to ensure that your product achieves the quality, reliability and durability according to your exact specifications.</p>
      <h3>Trust the expertise of TEM Inc.</h3>
      <p>
        Our precision CNC Vertical and Horizontal Milling Centers and CNC Turning Centers can offer the following:
      </p>
      <ul>
        <li>
          Capability to work with a wide variety of materials to include but are not limited to aluminum, stainless steel, sheet metal, copper, steel, brass, plastic, titanium and carbide.
        </li>
        <li>
          Our 26,000 sq .ft. CNC machining shop can handle 1-2 part prototypes to 100,000 piece production runs quickly, efficiently and at a competitive price.
        </li>
        <li>
          Customized product design engineering services to assist with either the redesign of an existing part or the development of a new CNC machined part.
        </li>
        <li>
          Skilled machinists using the latest techniques and state-of-the-art CNC milling and turning machines including both 3-axis CNC milling and 4-axis CNC machining.
        </li>
        <li>
          Quality control processes implemented throughout the entire CNC lathe and milling manufacturing process as governed by ISO 9001:2008 and AS9100 certification standards.
        </li>
      </ul>
      <h3>Reliable, precision CNC milling and turning machine shop</h3>
      <p>With the in-house expertise to handle a multitude of manufacturing projects, TEM. has become a reliable CNC milling and turning machine shop resource from large U.S. corporations to the small local shop. We have been entrusted to develop parts for combat gear made for high strength alloys required by the defense industry to precision CNC machining inspection equipment diaphragms for General Electric, and even producing specialty tooling fixtures requiring small CNC milling and turning for local shops.</p>
      <p>Our ability to respond to the diverse needs of our customers offers assurance that we can provide them with complete engineering and design solutions at our CNC milling and turning centers that will accommodate their specifications, regardless of the size of their project.</p>
      <p>Know that TEM is devoted to customer satisfaction and promises to continually provide your company with the highest quality of CNC machining services.</p>
     </SingleService>

     <SingleService title="Laser Cutting" image="/img/services/laser.jpg" v-if="$route.params.service == 'laser'">
      <p>Using the Laserdyne BeamDirector System with a KJ704 laser, we employ percussion, trepanning and drill-on-the-fly laser drilling techniques for effusion cooling holes as well as full five-axis laser cutting on pre-formed and machined parts. We can drill holes as small as 0.005 inch in diameter at angles from 15° to 90° degrees to the surface. We can process parts up to 60 inches in diameter and over 48 inches tall.</p>
      <ul>
        <li>Setup Time Reductions</li>
        <li>Faster laser parameter development</li>
        <li>Better control of recast and surface finish</li>
        <li>Reduction in production steps</li>
        <li>Delivers a cost-effective manufacturing solution</li>
      </ul>
      <p>At TEM, we deliver consistently smooth, burr-free edges. Accuracies are a tight 0.004 in true position total tolerance for airfoil shapes, cooling holes and trimmed surfaces. Using the Automatic Focus Control (AFC) allows us to maintaining critical focus position while following the contour of the part regardless of slight surface irregularities. With the AFC, all machine axes react to sensing of the part surface, creating unlimited axes corrections with high speed and unmatched sensitivity. AFC allows top machine speeds so productivity is maximized without downtime or scrapped parts.</p>
      <p>Percussion drilling delivers one or more pulses from the laser to a part while the laser beam and part are stationary. More than one pulse may be required depending on the material type and thickness. A variation of percussion drilling is drill-on-the fly, where pulses are delivered to the part by the stationary laser while the part is rotated. The hole placement is a function of rotational speed and laser pulse frequency. If multiple pulses are required, drill-on-the-fly software developed by LASERDYNE engineers is utilized to synchronize the movement of the part to the laser pulses and ensure that multiple pulses are delivered to the exact location required.</p>
     </SingleService>
  </div>
</template>

<script>
// @ is an alias to /src
import ServiceList from '@/components/serviceList'
import SingleService from '@/components/SingleService'
export default {
  name: 'Service',
  components: {
    ServiceList,
    SingleService
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
 #serviceSingle {
   display: flex;
   margin-top: 100px
 }

#serviceList {
  flex: 0 0 320px;
}

</style>