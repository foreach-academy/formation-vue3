import type { Produit } from "@/catalogue/catalogue";

export type Panier = Produit[];

export function ajouterAuPanier(panier: Panier, produit: Produit) {
  panier.push(produit);
}
