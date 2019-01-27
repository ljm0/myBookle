import { Component, OnInit, Input  } from '@angular/core';
import { Book } from '../types/book.type';

@Component({
  selector: 'bkl-collectionitem',
  templateUrl: './collectionitem.component.html',
  styleUrls: ['./collectionitem.component.css']
})
export class CollectionitemComponent implements OnInit {

  @Input() collection: Book;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
    this.index += 1;
  }

}
