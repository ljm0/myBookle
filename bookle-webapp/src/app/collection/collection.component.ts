import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../services/collection.service';
import { Book } from '../types/book.type';
import { UserInfo } from '../types/user-info.type';
import { books_mock } from '../mock/book.mock';
import { BookService } from '../services/book.service';


@Component({
  selector: 'bkl-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  userInfo: UserInfo;
  nickname: string;
  collectionBooks = [];

  constructor(
    private collectionService: CollectionService
  ) { }

  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    this.nickname = this.userInfo.nickname;
    this.collectionService.getBooksInCollection(this.userInfo.collectionId)
      .subscribe(
        (books) => {
          this.collectionBooks = books;
        }
      );
  }

  outputShareableLink() {
    prompt('Link to view your collection:',
    `${window.location.protocol}//${window.location.host}/u/${this.userInfo.id}/collection`);
  }

}
