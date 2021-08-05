import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
  path: path in the URL
  loadChildren: load the module
*/
const routes: Routes = [
  {path: 'categories', loadChildren: './pages/categories/categories.module#CategoriesModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
