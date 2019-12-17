
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';

import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  imageURL: string
  PostForm: FormGroup;
  
  constructor(private PostBuilder: FormBuilder,
    public http: Http,
    public afstore:AngularFirestore,
    ) { }

  @ViewChild('filebtn', { static: false }) filebtn

  uploadFile() {
    this.filebtn.nativeElement.click()
  }

  ngOnInit() {
    this.formInitializer();
  }


  createPost()
  {
    const image=this.imageURL
    const uid= "APkAlAbW0WRvYyM077ssIhrzUyG2";

    // post information
   const Discription = {
      ItemName: this.PostForm.controls.ItemName.value,
      ItemModel: this.PostForm.controls.itemModel.value,
      itemDiscription: this.PostForm.controls.itemDiscription.value
    }

    this.afstore.doc(`users/${uid}`).update({
      posts: firestore.FieldValue.arrayUnion({
        image,
        Discription
      })
    })
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
