<template>
  <ul id="serviceList">
    <li><h3 class="serviceListTitle">Services</h3></li>
    <router-link to="/services/cnc" tag="li" class="serviceListItem">
      <img src="/img/services/cnc.svg"/>
      CNC Milling and Turning
    </router-link>
    <router-link to="/services/laser" tag="li" class="serviceListItem">
      <img src="/img/services/laser.svg"/>
      Laser Cutting
    </router-link>
    <router-link to="/services/fabrication" tag="li" class="serviceListItem">
      <img src="/img/services/fabrication.svg"/>
      Fabrication
    </router-link>
    <router-link to="/services/tool-die" tag="li" class="serviceListItem">
      <img src="/img/services/tooldie.svg"/>
      Tool & Die
    </router-link>
    <router-link to="/services/edm" tag="li" class="serviceListItem">
      <img src="/img/services/edm.svg"/>
      Wire & Vertical EDM
    </router-link>
    <router-link to="/services/metal-forming" tag="li" class="serviceListItem">
      <img src="/img/services/forming.svg"/>
      Metal Forming
    </router-link>
    <router-link to="/services/defense-parts" tag="li" class="serviceListItem">
      <img src="/img/services/defense.svg"/>
      Defense Parts
    </router-link>
    <router-link to="/services/turbines" tag="li" class="serviceListItem">
      <img src="/img/services/turbine.svg"/>
      Turbine Manufacturing
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'ServiceList',

}
</script>

<style>
  #serviceList {
    list-style: none;
    margin: 0;
    padding: 24px 0;
    text-align: left;
    font-size: 16px;
  }

  .serviceListTitle {
    position: relative;
    padding: 0 24px;
    margin-bottom: 12px;
  }


  .serviceListItem {
    padding: 16px 24px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 200ms ease-out;
  }

  .serviceListItem:hover {
    background: rgba(19, 79, 152, 0.08);
  }

  .serviceListItem.router-link-active {
    color: #F26101
  }

  .serviceListItem img {
    height: 24px;
    margin-right: 12px;
  }
</style>
