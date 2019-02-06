import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { BookService } from '../services/book.service';

@Component({
  selector: 'bkl-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {

  book = {};
  tags_z: string = '';

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
  }

  onAdd() {
    this.book['tags'] = this.tags_z.split(',')
      .filter(tag => tag !== '')
      .map(tag => tag.trim());
    console.log(this.book);
    this.bookService.createBook(this.book)
      .subscribe(
        (result) => {
          // console.log('success');
        },
        (err) => {
          console.log(err);
        }
      );
  }

}
