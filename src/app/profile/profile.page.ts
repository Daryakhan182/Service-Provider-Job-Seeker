import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userPosts

  constructor(private afs: AngularFirestore)
  {
    const uid= "APkAlAbW0WRvYyM077ssIhrzUyG2";
    const posts = afs.doc(`users/${uid}`)
    this.userPosts=posts.valueChanges()
    console.log(this.userPosts)
  }

  ngOnInit() {
  }


}
