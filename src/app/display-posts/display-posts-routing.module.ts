import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayPostsPage } from './display-posts.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayPostsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayPostsPageRoutingModule {}
