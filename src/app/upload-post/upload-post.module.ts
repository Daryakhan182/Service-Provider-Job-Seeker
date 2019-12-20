import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UploadPostPageRoutingModule } from './upload-post-routing.module';

import { UploadPostPage } from './upload-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UploadPostPageRoutingModule
  ],
  declarations: [UploadPostPage]
})
export class UploadPostPageModule {}
