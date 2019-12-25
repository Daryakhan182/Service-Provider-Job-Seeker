import { AddnewbookComponent } from './addnewbook/addnewbook.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { BooksPageRoutingModule } from './books-routing.module';

import { BooksPage } from './books.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BooksPageRoutingModule
  ],
  declarations: [BooksPage, AddnewbookComponent],
  entryComponents: [AddnewbookComponent]
})
export class BooksPageModule {}
