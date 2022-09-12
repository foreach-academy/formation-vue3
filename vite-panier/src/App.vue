<template>
  <header>
    <h1 class="text-3xl underline">Mon panier</h1>
  </header>
  <main>
      <vp-catalogue :catalogue="catalogue" @ajouter-au-panier="doAjouterAuPanier"></vp-catalogue>
      <vp-panier :panier="panier" @supprimer-du-panier="doSupprimerDuPanier"></vp-panier>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { chercherDansCatalogueParIdProduit, modifierStock, type Catalogue } from '@/api/catalogue/catalogue'

import { chargeLeCatalogue } from '@/api/catalogue/catalogue'
import VPCatalogue from '@/components/catalogue/Catalogue.vue'
import VPPanier from '@/components/panier/Panier.vue'
import { supprimerDuPanier, ajouterAuPanier, type Panier, type ProduitPanier } from '@/api/panier/panier'


let panier: Panier = []

export default defineComponent({
    data() {
        return {
            catalogue: [],
            panier: panier
        };
    },
    async mounted() {
      let response = await chargeLeCatalogue()
      this.catalogue = await response.json();
    },
    methods: {
      doAjouterAuPanier(id: number) {
        let pc = chercherDansCatalogueParIdProduit(this.catalogue,id);
        if(pc) {
          modifierStock(this.catalogue, pc.produit.id, pc.stock - 1)
          ajouterAuPanier(this.panier, pc.produit)  
        }
      },
      doSupprimerDuPanier(pp: ProduitPanier) {
        let pc = chercherDansCatalogueParIdProduit(this.catalogue,pp.produit.id);
        if(pc) {
          modifierStock(this.catalogue, pp.produit.id, pc.stock + pp.quantite)
          supprimerDuPanier(this.panier, pp)
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
