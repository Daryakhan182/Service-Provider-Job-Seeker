
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  imageURL: string
  PostForm: FormGroup;

  constructor(private PostBuilder: FormBuilder,
    public http: Http) { }

  @ViewChild('filebtn', { static: false }) filebtn

  uploadFile() {
    this.filebtn.nativeElement.click()
  }
  ngOnInit() {
    this.formInitializer();
  }

  fileChanged(event)
  {
      const files= event.target.files
      const data= new FormData()
      data.append('file',files[0])
      data.append('UPLOADCARE_STORE','1')
      data.append('UPLOADCARE_PUB_KEY','7d8f8ea6d46da886b778')
      
      this.http.post('https://upload.uploadcare.com/base/',data ).
      subscribe(event =>
        {
            console.log(event)
            this.imageURL= event.json().file
        }
        )
  
  }

  formInitializer() {
    this.PostForm = this.PostBuilder.group({
      ItemName: [null, [Validators.required]],
      itemModel: [null, [Validators.required]],
      itemDiscription: [null, [Validators.required]]
    });
  }

}
