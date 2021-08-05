import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryListComponent } from './category-list/category-list.component';

/*
this path from routes variable is concatenated with path from routes variable in the app-routing.module.ts
*/
const routes: Routes = [
  {path: '', component: CategoryListComponent},
  {path: 'new', component: CategoryFormComponent},
  {path: ':id/edit', component: CategoryFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }

// nomesite.com/categories => list (master)
// nomesite.com/categories/new => form (detail)
// nomesite.com/categories/:id/edit => form (detail)
