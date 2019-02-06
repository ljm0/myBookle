import { Component, OnInit, Input, DoCheck  } from '@angular/core';
import { Book } from '../types/book.type';
import { UserInfo } from '../types/user-info.type';
import { CollectionService } from '../services/collection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bkl-collectionitem',
  templateUrl: './collectionitem.component.html',
  styleUrls: ['./collectionitem.component.css']
})
export class CollectionitemComponent implements OnInit, DoCheck {

  userInfo: UserInfo;
  isUserLoggedIn: boolean;
  isAdmin: boolean;

  @Input() book: Book;
  @Input() isOwnCollection: boolean;

  constructor(
    private collectionService: CollectionService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.isUserLoggedIn = !!localStorage.getItem('userInfo');
    if (this.isUserLoggedIn) {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
      this.isAdmin = this.userInfo.role == 'Admin';
    }
  }

  onRemove() {
    const userInfo: UserInfo = JSON.parse(localStorage.getItem('userInfo'));
    const collectionId = userInfo.collectionId;
    this.collectionService.removeBookFromCollection(collectionId, this.book.id)
      .subscribe(
        (result) => {
          window.location.reload();
        },
        (err) => {
          console.log(err)
        }
      );
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
