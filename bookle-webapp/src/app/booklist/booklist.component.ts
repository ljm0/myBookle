import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../types/book.type';

@Component({
  selector: 'bkl-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  @Input() books: Book[]; 

  constructor() { }

  ngOnInit() {
  }

}
