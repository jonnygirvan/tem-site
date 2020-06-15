<template>
  <article class="serviceItem">
    <img v-bind:src="image">
    <div class="serviceItem__text">
      <h3>{{title}}</h3>
      <slot></slot>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Service',
  props: {
    title: String,
    image: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .serviceItem {
    position: relative;
    padding: 16px;
    margin-bottom: 68px;
    transition: 300ms ease-out;
    border-radius: 3px;
    background: linear-gradient(111deg, #fff, #fff);
    z-index: 0;
  }

  .serviceItem:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    background: linear-gradient(111deg, #dbd2f56a, #cae0ff5e);
    transition: 300ms ease-out;
    border-radius: 3px;
    opacity: 0;
  }

  .serviceItem:hover {
    transform: translateY(-12px);
  }

  .serviceItem:hover:before {
    opacity: 1;
    box-shadow: 0px 8px 35px rgba(53, 45, 111, 0.16);
  }

  .serviceItem__text {
    padding: 0 8px;
  }

  .serviceItem__text h3 {
    margin-bottom: 20px;
  }

  .serviceItem img {
    height: 72px;
    margin-bottom: 20px;
  }
</style>
