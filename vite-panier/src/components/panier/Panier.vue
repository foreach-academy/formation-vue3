<template>
  <vp-titre titre="Panier"/>
  <div v-if="panier.length == 0">
    Le panier est vide.</div>
  <div v-else>
    <div class="flex" v-for="pp in panier" :key="pp.produit.id">
      <vp-produit class="flex-grow" :produit="pp.produit"></vp-produit>
      <span>{{ pp.quantite }}</span>
      <button class="border-2 p-2 rounded hover:bg-gray-100" @click="supprimerDuPanier(pp)">Supprimer du panier</button>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VPProduit from "@/components/common/Produit.vue"
  import VPTitre from "@/components/common/Titre.vue"
  import type { ProduitPanier } from "@/api/panier/panier";

  export default defineComponent({
    props: ['panier'],
    methods: {
      supprimerDuPanier(pp: ProduitPanier) {
        this.$emit('supprimer-du-panier', pp)
      }
    },
    components: {
      "vp-produit": VPProduit,
      "vp-titre": VPTitre
    }
  })
</script>