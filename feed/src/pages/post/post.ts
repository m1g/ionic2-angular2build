import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire } from 'angularfire2';

/*
  Generated class for the Post page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

class Post {
  title: string
  body: string
  id: string

  constructor() {}
}

@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})
export class PostPage {
  post: Post = new Post()
  constructor(public navCtrl: NavController, public af: AngularFire) {}
  
  submit() {
    this.af.database.list('/posts').push(this.post) // adds new post to data provider
    this.post = new Post() // clears out older post data
    this.navCtrl.parent.select(0) // returns us to the feed page
  }

}
