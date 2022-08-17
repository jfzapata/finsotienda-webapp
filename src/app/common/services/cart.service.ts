import { Injectable } from '@angular/core';

// Own
// Types
// Interfaces
import { ProductI } from '@app/common/types/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  lsKey = 'cartItems';
  constructor() { }

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
