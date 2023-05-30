import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: [
  ]
})
export class UpdateProduitComponent implements OnInit {
  
  currentProduit = new Produit();
  categories!: Categorie[];
  updateCatId!: number;
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private produitService: ProduitService){}

  ngOnInit(): void {
    // this.categories = this.produitService.listeCategories();
    // console.log(this.route.snapshot.params[id]);
    this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id'])
    .subscribe( prod =>{ this.currentProduit = prod; });
    //console.log(this.currentProduit);
    // this.updateCatId=this.currentProduit.categorie.idCat;
  }
/*   updateProduit(){
    // this.currentProduit.categorie=this.produitService.consulterCategorie(this.updateCatId);
    this.produitService.updateProduit(this.currentProduit);
    this.router.navigate(["produits"]);
  } */
  updateProduit() {
    this.produitService.updateProduit(this.currentProduit).subscribe(prod => {
    this.router.navigate(['produits']); }
    );
    }

}
