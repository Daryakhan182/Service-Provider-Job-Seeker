import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'

@Component({
  selector: 'app-display-posts',
  templateUrl: './display-posts.page.html',
  styleUrls: ['./display-posts.page.scss'],
})
export class DisplayPostsPage implements OnInit {

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
