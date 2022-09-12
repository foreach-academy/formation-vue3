<template>
  <div class="flex">
  <span class="m-2"> {{produit.id}}</span>
  <span class="m-2 flex-grow"> {{produit.nom}}</span>
  <img :src="produit.photo" alt="" class="m-2">
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    props:['produit']    
  })
</script>