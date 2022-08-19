import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Own
// Modules
import { SharedModule } from '@app/shared/shared.module';
// Components
import { CartComponent } from '@app/sales/components/cart/cart.component';
import { SalesComponent } from '@app/sales/components/sales/sales.component';
import { SalesRoutingModule } from '@app/sales/sales-routing.module';

@NgModule({
  declarations: [
    SalesComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SalesRoutingModule
  ],
  exports: []
})
export class SalesModule { }
