import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { AddProduitComponent } from '../add-produit/add-produit.component';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'
})
export class ProduitsComponent implements OnInit {

    produits? : Produit[]; //un tableau de produits

  constructor(private produitService: ProduitService) {
   //this.produits=[];
     }

  ngOnInit(): void {

    this.produits = this.produitService.listeProduits();
  }
  supprimerProduit(prod : Produit){
    let conf = confirm("Etes-vous sûr ?");
    if (conf)

    this.produitService.supprimerProduit(prod);
  }

}
