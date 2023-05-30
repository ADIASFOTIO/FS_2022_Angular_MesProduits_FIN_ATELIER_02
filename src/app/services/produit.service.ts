import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};



@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  apiURL: string = 'http://localhost:8080/produits/api';

  produits! : Produit[]; //un tableau de produits
  // categories : Categorie[];
  produit! : Produit; 
  
  constructor(private http : HttpClient) { 
/*     this.categories = [{idCat : 1, nomCat : "PC"},
                      {idCat : 2, nomCat : "Imprimante"}] */
/*     this.produits = [{idProduit : 1, nomProduit : "PC Asus", prixProduit : 3000.600, dateCreation : new Date("01/14/2011")},
                     {idProduit : 2, nomProduit : "Imprimante Epson", prixProduit : 450, dateCreation : new Date("12/17/2010")},
                     {idProduit : 3, nomProduit :"Tablette Samsung", prixProduit : 900.123, dateCreation : new Date("02/20/2020")}
                    ]; */
  }
  listeProduit(): Observable<Produit[]>{
    return this.http.get<Produit[]>(this.apiURL);
    }
    

/*   listeProduits():Produit[] {
    return this.produits;
    } */

    ajouterProduit( prod: Produit): Observable<Produit>{
      return this.http.post<Produit>(this.apiURL, prod, httpOptions);
      }

/*     supprimerProduit( prod: Produit){
      //supprimer le produit prod du tableau produits
      const index = this.produits.indexOf(prod, 0);
      if (index > -1) {
      this.produits.splice(index, 1);
      }
      //ou Bien
      /* this.produits.forEach((cur, index) => {
      if(prod.idProduit === cur.idProduit) {
      this.produits.splice(index, 1);
      }
      }); */
      // } */
      supprimerProduit(id : number) {
        const url = `${this.apiURL}/${id}`;
        return this.http.delete(url, httpOptions);
        }
        
      
/*    consulterProduit(id:number) : Produit{
        return this.produit = this.produits.find(p => p.idProduit == id)!;
      } */
      consulterProduit(id: number): Observable<Produit> {
        const url = `${this.apiURL}/${id}`;
        return this.http.get<Produit>(url);
      }

      trierProduits(){
        this.produits = this.produits.sort((n1,n2) => {
        if (n1.idProduit! > n2.idProduit!) {
        return 1;
        }
        if (n1.idProduit! < n2.idProduit!) {
        return -1;
        }
        return 0;
        });
        }
/*       updateProduit(p:Produit){
           // console.log(p);
        // this.supprimerProduit(p);
        this.ajouterProduit(p);
        this.trierProduits();
      } */
      updateProduit(prod :Produit) : Observable<Produit>{
         return this.http.put<Produit>(this.apiURL, prod, httpOptions);
      }

/*       listeCategories() : Categorie[] {
        return this.categories;
        }
      consulterCategorie(id: number) : Categorie{
          return this.categories.find(cat => cat.idCat == id)!;
          }   */

        

        
      
}
