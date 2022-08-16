import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@app/common/services/products.service';

// Own
// Types
// Interfaces
import { ProductI } from '@app/common/types/interfaces/product';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  products: ProductI[] = [];
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.loadAllProducts();
    console.log(this.products);
  }

  private loadAllProducts(): void {
    this.products = this.productsService.findAll();
  }

}
