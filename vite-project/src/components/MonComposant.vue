<template>
  <h1> {{ titre }} </h1>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

let monComposant = {
  props: ['titre']
}
export default defineComponent(monComposant)
</script>

<style scoped>
  h1 {
    color: red;
  }
</style>