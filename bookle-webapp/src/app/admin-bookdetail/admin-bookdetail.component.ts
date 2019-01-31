import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../types/book.type';

@Component({
  selector: 'bkl-admin-bookdetail',
  templateUrl: './admin-bookdetail.component.html',
  styleUrls: ['./admin-bookdetail.component.css']
})
export class AdminBookdetailComponent implements OnInit {

  @Input() adminbook: Book;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
    this.index += 1;
  }

}
