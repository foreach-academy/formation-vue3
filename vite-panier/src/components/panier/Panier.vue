<template>
  <h2>Panier</h2>
  <ul>
    <li v-for="produit in panier" :key="produit.id">
      <vp-produit :produit="produit"></vp-produit>
    </li>
  </ul>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VPProduit from "@/components/common/Produit.vue"

  export default defineComponent({
    props: ['panier'],
    components: {
      "vp-produit": VPProduit
    }
  })
</script>