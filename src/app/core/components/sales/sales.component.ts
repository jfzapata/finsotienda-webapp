import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  searchBarControl: FormControl = new FormControl();
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.searchBarControl.valueChanges.subscribe((val) => this.onSearchBarchValueChange(val));

    this.loadAllProducts();
    console.log(this.products);
  }

  private loadAllProducts(): void {
    this.products = this.productsService.findAll();
    this.products = this.products.concat(this.products).concat(this.products);
  }

  private onSearchBarchValueChange(value: string): void {
    this.products = this.productsService.findByName(value);
  }

}
