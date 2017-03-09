import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts: any = []
  constructor(public navCtrl: NavController, public _data: Data) {
    this._data.Posts.subscribe((post) => { this.posts.push(post)})
  }

}
