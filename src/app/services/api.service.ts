import {Injectable} from '@angular/core';
import {Inject} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {ProductModel} from '../models/product/product.model'
import 'rxjs/Rx';

@Injectable()
export class ApiService{
  apiServer:string = 'http://localhost:3000';

  constructor(private http:Http){}

  fetchProducts(searchQuery:string):Promise<Array<ProductModel>>{
    return this.http.get(this.apiServer+'/products?search_name='+searchQuery)
                    .toPromise()
                    .then((res:Response) => res.json()
                    .map(object => new ProductModel(object.id, object.name, object.price))
                  );
  }
}
