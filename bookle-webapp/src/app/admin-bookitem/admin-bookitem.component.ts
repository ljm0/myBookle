import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../types/book.type';
import { BookService } from '../services/book.service';

@Component({
  selector: 'bkl-admin-bookitem',
  templateUrl: './admin-bookitem.component.html',
  styleUrls: ['./admin-bookitem.component.css']
})
export class AdminBookitemComponent {

  @Input() book: Book;
  @Input() index: number;

  constructor(
    private bookService: BookService
  ) { }

  onRemove() {
    if (confirm(`Are you sure to delete the book '${this.book.name}'?`)) {
      this.bookService.deleteBookById(this.book.id)
        .subscribe(
          (result) => {
            // console.log('successfully deleted book.')
            alert(`the book '${this.book.name}' is deleted`); 
            window.location.reload();
          },
          (err) => {
            console.log(err);
          }
        );
    }
  }
}
