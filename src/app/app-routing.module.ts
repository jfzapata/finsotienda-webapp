import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [{
  path: 'sales',
  loadChildren: () => import('./sales/sales.module').then(m => m.SalesModule)
},
{
  path: '',
  redirectTo: 'sales',
  pathMatch: 'full'
}, {
  path: '**',
  redirectTo: 'sales',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
