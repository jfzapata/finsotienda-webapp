import { Component, OnInit } from '@angular/core';

// Own
// Types
// Interfaces
import { CartItemI } from '@app/common/types/interfaces/cart-item';
// Enums
import { EventEmitterEvent } from '@app/common/enums/event-emitter-event';
// Services
import { CartService } from '@app/common/services/cart.service';
import { EventEmitterService } from '@app/common/services/event-emitter.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  total = 0;
  cartItems: CartItemI[] = [];
  phoneNumberControl: FormControl = new FormControl('',
    Validators.compose([
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(/^[0-9]*$/)
    ])
  );
  constructor(private cartService: CartService,
    private eventEmitterService: EventEmitterService) {
    }

  ngOnInit(): void {
    this.eventEmitterService.on(EventEmitterEvent.CART_UPDATED.valueOf(), () => this.getCartItems());
    this.getCartItems();
  }

  removeItemFromCart(cartItem: CartItemI): void {
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
      (partialSum, ci) => partialSum + ci.price * ci.addedQuantity,
      0
    );
    this.total = newTotal;
  }

}
