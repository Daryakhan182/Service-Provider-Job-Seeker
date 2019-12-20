import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeCategoriesPage } from './home-categories.page';

const routes: Routes = [
  {
    path: '',
    component: HomeCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeCategoriesPageRoutingModule {}
