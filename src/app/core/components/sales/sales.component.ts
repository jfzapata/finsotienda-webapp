import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CartService } from '@app/common/services/cart.service';
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
  constructor(private productsService: ProductsService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.searchBarControl.valueChanges.subscribe((val) => this.onSearchBarchValueChange(val));

    this.loadAllProducts();
    console.log(this.products);
  }

  private loadAllProducts(): void {
    this.products = this.productsService.findAll();
    this.products = this.products.map(prod => this.setProductExtraInfo(prod));
  }

  private onSearchBarchValueChange(value: string): void {
    this.products = this.productsService.findByName(value);
    this.products = this.products.map(this.setProductExtraInfo);
  }

  private setProductExtraInfo(product: ProductI): ProductI {
    const cartItem: ProductI | undefined = this.cartService.getCartItem(product.id);
    if (cartItem) {
      product.addedQuantity = cartItem.addedQuantity;
    } else {
      product.addedQuantity = 0;
    }
    return product;
  }

}
