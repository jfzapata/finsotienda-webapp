import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Own
// Components
import { NavbarComponent } from '@app/core/layouts/navbar/navbar.component';
import { SidenavComponent } from '@app/core/layouts/sidenav/sidenav.component';
import { HomeComponent } from '@app/core/components/home/home.component';
import { CartComponent } from '@app/core/components/cart/cart.component';
import { SalesComponent } from '@app/core/components/sales/sales.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SidenavComponent,
    HomeComponent,
    CartComponent,
    SalesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    SidenavComponent,
    CartComponent
  ]
})
export class CoreModule { }
