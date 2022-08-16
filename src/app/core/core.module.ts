import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Own
// Components
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SidenavComponent } from './layouts/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SidenavComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    SidenavComponent
  ]
})
export class CoreModule { }
