<template>
  <h2 class="text-xl p-4">{{ titre }}</h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

  export default defineComponent({
     props: ['titre']
  })
</script>