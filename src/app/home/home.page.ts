import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  PostForm: FormGroup;
  constructor(private PostBuilder: FormBuilder) {}

  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.PostForm = this.PostBuilder.group({
      ItemName: [null, [Validators.required]],
      itemModel: [null, [Validators.required]],
      itemDiscription: [null, [Validators.required]]
    });
  }

}
