<template>
  <div id="app">
    <my-component></my-component>
    <other-component></other-component>
  </div>
</template>

<script>
import myComponentVue from './module/my-component.vue'
import otherComponentVue from './module/other-component.vue'
export default {
  name: 'app',
  components: {
    'my-component': myComponentVue,
    'other-component': otherComponentVue
  }
}
</script>

<style></style>
