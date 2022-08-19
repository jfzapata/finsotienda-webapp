import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Own
// Modules
import { AppRoutingModule } from '@app/app-routing.module';
import { SharedModule } from '@app/shared/shared.module';
// Components
import { AppComponent } from '@app/app.component';
import { NavbarComponent } from '@app/sales/layouts/navbar/navbar.component';
import { SidenavComponent } from '@app/sales/layouts/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
