import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

// Own
// Types
// Interfaces
import { ProductI } from '@app/common/types/interfaces/product';
// Enums
import { EventEmitterEvent } from '@app/common/enums/event-emitter-event';
// Services
import { CartService } from '@app/common/services/cart.service';
import { EventEmitterService } from '@app/common/services/event-emitter.service';
import { ProductsService } from '@app/common/services/products.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  products: ProductI[] = [];
  searchBarControl: FormControl = new FormControl();
  constructor(private productsService: ProductsService,
    private cartService: CartService,
    private eventEmitterService: EventEmitterService) { }

  ngOnInit(): void {
    this.searchBarControl.valueChanges.subscribe((val) => this.onSearchBarchValueChange(val));
    this.eventEmitterService.on(EventEmitterEvent.CART_UPDATED.valueOf(), () => this.setProductsExtraInfo());
    this.loadAllProducts();
  }

  increseProductQuantity(product: ProductI): void {
    this.cartService.updateCartItem(product, 1);
  }

  decreaseProductQuantity(product: ProductI): void {
    this.cartService.updateCartItem(product, -1);
  }

  private loadAllProducts(): void {
    this.products = this.productsService.findAll();
    this.setProductsExtraInfo();
  }

  private onSearchBarchValueChange(value: string): void {
    this.products = this.productsService.findByName(value);
    this.setProductsExtraInfo();
  }

  private setProductsExtraInfo(): void {
    this.products = this.products.map(prod => this.setProductExtraInfo(prod));
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
