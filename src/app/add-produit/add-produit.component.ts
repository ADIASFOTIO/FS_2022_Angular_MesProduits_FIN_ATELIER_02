import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Categorie } from '../model/categorie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html'
})
export class AddProduitComponent implements OnInit {

  newProduit = new Produit();
  categories! : Categorie[];
  newIdCat! : number;
  newCategorie! : Categorie;
  constructor(private produitService: ProduitService,
              private router : Router) { }

  ngOnInit(): void {
    // this.categories = this.produitService.listeCategories();
    this.produitService.listeCategories().
    subscribe(cats => {this.categories = cats._embedded.categories;
    console.log(cats);
    });

  }

/*   addProduit() {
    //console.log(this.newProduit);
    // this.newCategorie = this.produitService.consulterCategorie(this.newIdCat);  // permet de prendre l'id de la categorie choisi sur l'ecran et de reourne cette cat pour pouvoir l'inserer dans l'objet
    // this.newProduit.categorie = this.newCategorie;
    this.produitService.ajouterProduit(this.newProduit);
    this.router.navigate(["produits"]);
  } */
  addProduit(){
    this.newProduit.categorie = this.categories.find(cat => cat.idCat == this.newIdCat)!;
    this.produitService.ajouterProduit(this.newProduit)
    .subscribe(prod => {
    console.log(prod);
    this.router.navigate(['produits']);
    });
    }

}
