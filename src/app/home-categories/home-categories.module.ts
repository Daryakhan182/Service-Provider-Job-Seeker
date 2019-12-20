import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeCategoriesPageRoutingModule } from './home-categories-routing.module';

import { HomeCategoriesPage } from './home-categories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeCategoriesPageRoutingModule
  ],
  declarations: [HomeCategoriesPage]
})
export class HomeCategoriesPageModule {}
