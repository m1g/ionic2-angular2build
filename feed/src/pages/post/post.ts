import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data';

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
  constructor(public navCtrl: NavController, public _data: Data) {}
  
  submit() {
    this._data.addPost(this.post) // adds new post to data provider
    this.post = new Post() // clears out older post data
    this.navCtrl.parent.select(0) // returns us to the feed page
  }

}
