export type Produit = {
  id: number;
  nom: string;
  description: string;
  photo: string;
};

export type ProduitCatalgue = {
  produit: Produit;
  stock: number;
};

export type Catalogue = ProduitCatalgue[];

export async function chargeLeCatalogue() {
  return fetch("products.json");
}

export function chercherDansCatalogueParIdProduit(
  catalogue: Catalogue,
  id: number
): ProduitCatalgue | undefined {
  return catalogue.find((pc) => pc.produit.id === id);
}

export function modifierStock(
  catalogue: Catalogue,
  idProduit: number,
  nouveauStock: number
) {
  let pc = chercherDansCatalogueParIdProduit(catalogue, idProduit);
  if (pc) {
    pc.stock = nouveauStock;
  }
}
