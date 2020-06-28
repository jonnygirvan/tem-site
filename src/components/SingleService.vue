<template>
  <article class="singleServiceWrapper">
    <div class="singleService">
      <h2>{{title}}</h2>
      <div class="singleServiceContent">
        <slot></slot>
      </div>
    </div>
    <div class="singleServiceImage" v-bind:style="{ backgroundImage: 'linear-gradient(111deg, rgba(219, 210, 245, 0.5), rgba(202, 224, 255, 0.5)), url(' + image + ')' }">
    <!-- <img v-bind:src="image"> -->
    <div class="block"></div>
    <div class="block"></div>
    <div class="block"></div>
    <div class="block"></div>
    <div class="block"></div>
    <div class="block"></div>
    <div class="block"></div>
    <div class="block"></div>
    <div class="block"></div>
    <div class="block"></div>
    <div class="block"></div>
    <div class="block"></div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'SingleService',
  props: {
    title: String,
    image: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .singleServiceWrapper {
    position: relative;
    flex-grow: 1;
    display: flex;
  }

  .singleService {
    position: relative;
    padding: 24px 64px;
    flex: 1 1 auto;
    text-align: left;
  }

  .singleService h2 {
    position: relative;
    color: #4c5b69ab;
    margin-bottom: 28px;
  }

  .singleService h2::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 12px;
    background: rgb(242, 97, 1);
    z-index: 0;
    transform: skewX(-20deg);
    top: 0;
    left: -28px;
    border-radius: 2px;
  }

  .singleServiceContent p {
    margin-bottom: 24px;
  }

  .singleServiceContent li {
    line-height: 1.5;
    margin-bottom: 16px;
  }

  .singleServiceContent h3 {
    color: #4c5b69ab;
    margin: 48px 0 24px;
  }

  .singleServiceImage {
    flex: 0 0 540px;
    position: relative;
    background-size: cover;
    background-position: center;
    clip-path: 
     polygon(
      0% 64px,
      64px 0%,
      100% 0%,
      100% 0,
      100% 100%,
      100% 100%,
      0 100%,
      0 100%
    )
  }

  .block {
    position: absolute;
    background: #122361;
    bottom: 0;
    right: 0;
    height: 128px;
    width: 128px;
  }

  .block:nth-of-type(2) {
    bottom: 0;
    background: #12236186;
    height: 64px;
    width: 64px;
    right: 128px;
  }

  .block:nth-of-type(3) {
    bottom: 64px;
    background: #1223613d;
    height: 64px;
    width: 64px;
    right: 128px;
  }

  .block:nth-of-type(4) {
    bottom: 0;
    background: #1223613d;
    height: 64px;
    width: 64px;
    right: 192px;
  }

  .block:nth-of-type(5) {
    bottom: 64px;
    background: #12236121;
    height: 32px;
    width: 32px;
    right: 192px;
  }

  .block:nth-of-type(6) {
    bottom: 0;
    background: #12236121;
    height: 32px;
    width: 32px;
    right: 256px;
  }

  .block:nth-of-type(7) {
    bottom: 128px;
    background: #1223613d;
    height: 64px;
    width: 64px;
    right: 0;
  }

  .block:nth-of-type(8) {
    bottom: 128px;
    background: #12236186;
    height: 64px;
    width: 64px;
    right: 64px;
  }

  .block:nth-of-type(9) {
    bottom: 192px;
    background: #12236186;
    height: 64px;
    width: 64px;
    right: 0;
  }

  .block:nth-of-type(10) {
    bottom: 256px;
    background: #1223613d;
    height: 32px;
    width: 32px;
    right: 0;
  }

  .block:nth-of-type(11) {
    bottom: 192px;
    background: #1223613d;
    height: 32px;
    width: 32px;
    right: 64px;
  }

  .block:nth-of-type(12) {
    bottom: 128px;
    background: #12236121;
    height: 32px;
    width: 32px;
    right: 192px;
  }

</style>
