import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home-categories', pathMatch: 'full' },
  {
    path: 'home-categories',
    loadChildren: () => import('./home-categories/home-categories.module').then( m => m.HomeCategoriesPageModule)
  },
  {
    path: 'display-posts',loadChildren: () => import('./display-posts/display-posts.module').then( m => m.DisplayPostsPageModule)
  },
  {
    path: 'upload-post',loadChildren: () => import('./upload-post/upload-post.module').then( m => m.UploadPostPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
