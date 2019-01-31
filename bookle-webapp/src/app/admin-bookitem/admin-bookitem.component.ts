import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../types/book.type';

@Component({
  selector: 'bkl-admin-bookitem',
  templateUrl: './admin-bookitem.component.html',
  styleUrls: ['./admin-bookitem.component.css']
})
export class AdminBookitemComponent implements OnInit {

  @Input() adminbook: Book;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
    this.index += 1;
  }

}
