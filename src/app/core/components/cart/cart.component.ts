import { Component, OnInit } from '@angular/core';

// Own
// Types
// Interfaces
import { ProductI } from '@app/common/types/interfaces/product';
// Enums
import { EventEmitterEvent } from '@app/common/enums/event-emitter-event';
// Services
import { CartService } from '@app/common/services/cart.service';
import { EventEmitterService } from '@app/common/services/event-emitter.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  total = 0;
  cartItems: ProductI[] = [];
  constructor(private cartService: CartService,
    private eventEmitterService: EventEmitterService) { }

  ngOnInit(): void {
    this.eventEmitterService.on(EventEmitterEvent.CART_UPDATED.valueOf(), () => this.getCartItems());
    this.getCartItems();
  }

  removeItemFromCart(cartItem: ProductI): void {
    if (cartItem.addedQuantity) {
      this.cartService.updateCartItem(cartItem, cartItem.addedQuantity * -1);
    }
  }

  private getCartItems(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  private calculateTotal(): void {
    let newTotal = this.cartItems.reduce(
      (partialSum, ci) => partialSum + (ci.addedQuantity ? ci.price * ci.addedQuantity : 0),
      0
    );
    this.total = newTotal;
  }

}
