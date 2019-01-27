import { Component, OnInit, Input  } from '@angular/core';
import { Book } from '../types/book.type';

@Component({
  selector: 'bkl-collectionlist',
  templateUrl: './collectionlist.component.html',
  styleUrls: ['./collectionlist.component.css']
})
export class CollectionlistComponent implements OnInit {

  @Input() collections: Book[];

  constructor() { }

  ngOnInit() {
  }

}
