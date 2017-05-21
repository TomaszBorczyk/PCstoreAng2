import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'
import {SharedService} from '../services/shared.service'
import {ApiService} from '../services/api.service'
import {Subscription} from 'rxjs';
import {ProductModel} from '../models/product/product.model'


@Component({
  selector: 'container',
  templateUrl: 'container.component.html',
  styleUrls: ['container.component.scss']
})

export class ContainerComponent implements OnInit{
  name:string;
  subscribtion:Subscription;
  products:Array<ProductModel>;

  constructor(private sharedService:SharedService, private api:ApiService){}

  ngOnInit(){
    this.subscribtion = this.sharedService.getEmittedValue()
                      .subscribe(item => this.handleSearchQuery(item));
  }

  ngOnDestroy(){
    this.subscribtion.unsubscribe();
  }

  handleSearchQuery(searchQuery:string){
    this.api.fetchProducts(searchQuery)
            .then(object => this.products = object);
  }

}
