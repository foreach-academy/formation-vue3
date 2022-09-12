import type { Produit } from "@/catalogue/catalogue";

export type ProduitPanier = {
  produit: Produit;
  quantite: number;
};
export type Panier = ProduitPanier[];

export function ajouterAuPanier(panier: Panier, produit: Produit) {
  let pp = panier.find((pp) => pp.produit.id == produit.id);

  if (pp) {
    pp.quantite += 1;
  } else {
    panier.push({ produit, quantite: 1 });
  }
}

export function supprimerDuPanier(
  panier: Panier,
  produitPanier: ProduitPanier
) {
  let i = panier.findIndex((pp) => pp.produit.id === produitPanier.produit.id);
  if (i != -1) {
    panier.splice(i, 1);
  }
}
