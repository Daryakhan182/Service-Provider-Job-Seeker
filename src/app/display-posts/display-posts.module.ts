import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayPostsPageRoutingModule } from './display-posts-routing.module';

import { DisplayPostsPage } from './display-posts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayPostsPageRoutingModule
  ],
  declarations: [DisplayPostsPage]
})
export class DisplayPostsPageModule {}
