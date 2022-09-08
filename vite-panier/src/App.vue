<template>
  <header>
    <h1 class="text-3xl underline">Mon panier</h1>
  </header>
  <main>
      <vp-catalogue :catalogue="catalogue" @ajouter-au-panier="doAjouterAuPanier"></vp-catalogue>
      <vp-panier :panier="panier"></vp-panier>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { chercherDansCatalogueParIdProduit, type Catalogue } from '@/api/catalogue/catalogue'

import { defaultCatalogue } from '@/api/catalogue/catalogue'
import VPCatalogue from '@/components/catalogue/Catalogue.vue'
import VPPanier from '@/components/panier/Panier.vue'
import { ajouterAuPanier, type Panier } from '@/api/panier/panier'

let catalogue: Catalogue = defaultCatalogue
let panier: Panier = []

export default defineComponent({
    data() {
        return {
            catalogue: catalogue,
            panier: panier
        };
    },
    methods: {
      doAjouterAuPanier(id: number) {
        let produit = chercherDansCatalogueParIdProduit(this.catalogue,id);
        if(produit) {
          ajouterAuPanier(this.panier, produit)  
        }
      }
    },
    components: { 
      "vp-catalogue": VPCatalogue,
      "vp-panier": VPPanier 
    }
})
</script>

<style scoped>
</style>
