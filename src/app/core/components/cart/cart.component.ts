import { Component, OnInit } from '@angular/core';
import { CartService } from '@app/common/services/cart.service';
import { ProductI } from '@app/common/types/interfaces/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  total = 0;
  cartItems: ProductI[] = [];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  private getCartItems(): void {
    this.cartItems = this.cartService.getCartItems();
  }

}
