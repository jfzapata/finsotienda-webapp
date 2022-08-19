import { AfterViewInit, Component, OnInit } from '@angular/core';

// Own
// Constants
import { SALE_STEPS } from '@app/common/constants/sale-steps';
// Types
// Interfaces
import { CartItemI } from '@app/common/types/interfaces/cart-item';
// Enums
import { EventEmitterEvent } from '@app/common/enums/event-emitter-event';
// Utils
import { closeModal, openModal } from '@app/common/utils/modal';
// Services
import { CartService } from '@app/common/services/cart.service';
import { EventEmitterService } from '@app/common/services/event-emitter.service';
import { FormControl, Validators } from '@angular/forms';
import { closeCart } from '@app/common/utils/general';

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
  saleStepsGenerator: Generator | undefined;
  lastStep: string = SALE_STEPS[SALE_STEPS.length - 1];
  currentSaleStep: string | undefined;
  paymentMethodControl: FormControl = new FormControl('', Validators.required);
  costumerNameControl: FormControl = new FormControl('', Validators.required);
  constructor(private cartService: CartService,
    private eventEmitterService: EventEmitterService) {
    }

  ngOnInit(): void {
    this.eventEmitterService.on(EventEmitterEvent.CART_UPDATED.valueOf(), () => this.getCartItems());
    this.getCartItems();
  }

  close(): void {
    closeCart();
  }

  openSaleModal(): void {
    openModal('sale-modal');
    this.restarSaleStepsGenerator();
    this.nextSaleStep();
  }

  nextSaleStep(): void {
    if (this.saleStepsGenerator) {
      const nextStep = this.saleStepsGenerator.next();
      if (!nextStep.done) {
        this.currentSaleStep = nextStep.value as string;
        if (this.currentSaleStep === this.lastStep) {
          this.cartService.clearCart();
          this.restartFormControls();
        }
      } else {  
        this.close();
        closeModal('sale-modal');
      }
    } else {}
  }

  removeItemFromCart(cartItem: CartItemI): void {
    if (cartItem.addedQuantity) {
      this.cartService.updateCartItem(cartItem, cartItem.addedQuantity * -1);
    }
  }

  selectPaymentMethdo(paymentMethod: string): void  {
    this.paymentMethodControl.setValue(paymentMethod);
  }

  private restartFormControls(): void {
    this.phoneNumberControl.setValue(null);
    this.paymentMethodControl.setValue(null);
    this.costumerNameControl.setValue(null);
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

  private restarSaleStepsGenerator(): void {
    this.saleStepsGenerator = this.makeSaleStepsGenerator();
  }

  private *makeSaleStepsGenerator() {
    let index = 0;
    while (SALE_STEPS[index]) {
      yield SALE_STEPS[index++];
    }
  }

}
