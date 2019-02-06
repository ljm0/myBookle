import { Component, OnInit, Input, DoCheck, OnChanges } from '@angular/core';
import { Book } from '../types/book.type';
import { UserInfo } from '../types/user-info.type';
import { CollectionService } from '../services/collection.service';

@Component({
  selector: 'bkl-bookitem',
  templateUrl: './bookitem.component.html',
  styleUrls: ['./bookitem.component.css']
})
export class BookitemComponent implements DoCheck, OnChanges {

  authorNames: string;
  userInfo: UserInfo;
  isUserLoggedIn: boolean;
  isAdmin: boolean;

  @Input() book: Book;
  @Input() index: number;
  
  constructor(
    private collectionService: CollectionService
  ) { }

  ngDoCheck() {
    this.isUserLoggedIn = !!localStorage.getItem('userInfo');
    if (this.isUserLoggedIn) {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
      this.isAdmin = this.userInfo.role == 'Admin';
    }
  }

  ngOnChanges() {
    if (this.book.authors)
      this.authorNames = this.book.authors.map(author => author.name).join(', ');
    else if (this.book.isolatedAuthorNames) {
      this.authorNames = this.book.isolatedAuthorNames;
    }
  }

  onAddToCollection() {
    const collectionId = this.userInfo.collectionId;
    this.collectionService.addBookToCollection(collectionId, this.book.id)
      .subscribe(
        (result) => {
          // success
          alert('book added to collection');
        },
        (err) => {
          console.log(err)
        }
      );
  }
}
