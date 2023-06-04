import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styles: [
  ]
})
export class RechercheParCategorieComponent implements OnInit {
  produits!: Produit[];
  IdCategorie!: number;
  categories!: Categorie[];


  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    // initialement cette methode me permet de remplir la liste avec toutes les categories
    // cette methode va me produire la variable cats que je mets dans categories et j'utiles dans le html pour derouler mes categories 
    this.produitService.listeCategories().
      subscribe(cats => {
        this.categories = cats._embedded.categories;
        //console.log(cats);
      });
  }
  onChange() {
    this.produitService.rechercherParCategorie(this.IdCategorie).
      subscribe(prods => { this.produits = prods });
      // ctte methode retoune pro que j'affecte a produits
  }

}


