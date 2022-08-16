import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Own
// Components
import { HomeComponent } from '@app/core/components/home/home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
