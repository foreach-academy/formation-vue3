export type Produit = {
  id: number;
  nom: string;
  description: string;
  photo: string;
};

export type Catalogue = Produit[];

export let defaultCatalogue: Catalogue = [
  {
    id: 1,
    nom: "test",
    description: "un produit de test",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    nom: "test 2",
    description: "un produit de test",
    photo: "https://via.placeholder.com/150",
  },
];

export function chercherDansCatalogueParIdProduit(
  catalogue: Catalogue,
  id: number
): Produit | undefined {
  return catalogue.find((p) => p.id === id);
}
