import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../types/book.type';

@Component({
  selector: 'bkl-collectiondetail',
  templateUrl: './collectiondetail.component.html',
  styleUrls: ['./collectiondetail.component.css']
})
export class CollectiondetailComponent implements OnInit {

  @Input() collection: Book;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
    this.index += 1;
  }

}
