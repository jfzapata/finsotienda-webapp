import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Own
// Modules
import { CoreModule } from '@app/core/core.module';
import { AppRoutingModule } from '@app/app-routing.module';
// Components
import { AppComponent } from '@app/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
