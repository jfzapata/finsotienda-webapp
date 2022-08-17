import { Injectable } from '@angular/core';

// Own
// Types
// Interfaces
import { ProductI } from '@app/common/types/interfaces/product';
// Enums
import { EventEmitterEvent } from '@app/common/enums/event-emitter-event';
// Services
import { EventEmitterService } from '@app/common/services/event-emitter.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  lsKey = 'cartItems';
  constructor(private eventEmitterService: EventEmitterService) { }

  updateCartItem(product: ProductI, quantity: number): void {
    try {
      const cartItems: ProductI[] = this.getCartItems();
      const cartItemFound: ProductI | undefined = cartItems.find(ci => ci.id === product.id);
      let cartItem: ProductI;
      if (!cartItemFound) {
        cartItem = Object.assign(product, { addedQuantity: 0 });
        cartItems.push(cartItem);
      } else {
        cartItem = cartItemFound;
      }
      if (cartItem && cartItem.addedQuantity != undefined) {
        if (cartItem.addedQuantity + quantity >= 0) {
          cartItem.addedQuantity = cartItem.addedQuantity + quantity;

          if (!cartItem.addedQuantity) {
            let cartItemIndexOf = cartItems.indexOf(cartItem);
            cartItems.splice(cartItemIndexOf, 1);
          }

          localStorage.setItem(this.lsKey, JSON.stringify(cartItems));
          this.eventEmitterService.emit({
            eventName: EventEmitterEvent.CART_UPDATED.valueOf()
          })
        } else {
          console.log('No se puede actualizar el producto con cantidad negativa!');
        }
      } else {}
    } catch (error) {
      
    }
  }

  getCartItems(): ProductI[] {
    try {
      const lsCartItems = localStorage.getItem(this.lsKey);
      if (lsCartItems) {
        return JSON.parse(lsCartItems);
      }
      return [];
    } catch (error) {
      throw error;
    }
  }

  getCartItem(productId: number): ProductI | undefined {
    try {
      const lsCartItems = this.getCartItems();
      return lsCartItems.find(product => product.id === productId);
    } catch (error) {
      throw error;
    }
  }
}
