import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/product.service';
import {Product} from '../shared/product';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css'],
  providers:[ProductService]
})
export class MenComponent implements OnInit {

  constructor(private productservice: ProductService) { }

  ngOnInit() {
    this.refreshproductlist();
  }

  refreshproductlist(){
    this.productservice.getArticle().subscribe((res)=>{
      this.productservice.product = res as Product[];
    });
  }

}
