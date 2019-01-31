import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../types/book.type';

@Component({
  selector: 'bkl-admin-booklist',
  templateUrl: './admin-booklist.component.html',
  styleUrls: ['./admin-booklist.component.css']
})
export class AdminBooklistComponent implements OnInit {

  @Input() adminbooks: Book[];

  constructor() { }

  ngOnInit() {
  }

}
