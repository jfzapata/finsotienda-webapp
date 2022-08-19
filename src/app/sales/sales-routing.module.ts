import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Own
// Components
import { SalesComponent } from '@app/sales/components/sales/sales.component';

const routes: Routes = [{
  path: '',
  component: SalesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
