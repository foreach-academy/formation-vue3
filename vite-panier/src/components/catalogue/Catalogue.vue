<template>
  <h2>Catalogue</h2>
  <ul>
    <li class="m-2" v-for="produit in catalogue" :key="produit.id">
      <vp-produit :produit="produit"></vp-produit> 
      <button class="border-2 p-2 rounded hover:bg-gray-100" @click="ajouterAuPanier(produit.id)">Ajouter au panier</button>
    </li>
  </ul>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VPProduit from "@/components/common/Produit.vue"

  export default defineComponent({
    props: ['catalogue'],
    methods: {
      ajouterAuPanier(id: number) {
        this.$emit('ajouter-au-panier', id)
      }
    },
    components: {
      "vp-produit": VPProduit
    }  
  })
</script>