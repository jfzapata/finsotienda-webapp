import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Own
// Components
import { HomeComponent } from '@app/core/components/home/home.component';
import { SalesComponent } from '@app/core/components/sales/sales.component';

const routes: Routes = [{
  path: '',
  component: SalesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
