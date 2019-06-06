import {Injectable} from '@angular/core';
// import {Product} from "./product";
// import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // httpOptions = {
  //   headers: new HttpHeaders({'Content-Type': 'application/json'})
  // };
  // apiUrl = 'api/products';

  constructor(private http: HttpClient, private fireStore: AngularFirestore) {
  }

  addProduct(product: Product) {
    return this.fireStore.collection('products').doc(String(product.id)).set(product);
  }

  deleteProduct(id: number) {
    return this.fireStore.doc<Product>(`products/${id}`).delete();
  }

  updateProduct(product: Product) {
    return this.fireStore.doc<Product>(`products/${product.id}`).update(product);
  }

  getProducts() {
    return this.fireStore.collection<Product[]>('products').valueChanges();
  }

  getProduct(id: number) {
    return this.fireStore.doc<Product>(`products/${id}`).valueChanges();
  }

  searchProduct(param: string) {
    return this.fireStore.collection<Product>('products', ref => ref.where('name', '<=', param)).snapshotChanges();
  }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(`${error}\n ${operation}`); // log to console instead
  //
  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }
}
