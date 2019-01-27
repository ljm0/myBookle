import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../services/collection.service';
import { Book } from '../types/book.type';


@Component({
  selector: 'bkl-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  collections: Book[] = [];

  constructor(private collectionService: CollectionService) { }

  ngOnInit() {
        this.collectionService.getBooksByAuthorId('1077326')
      .subscribe(data => this.collections = data);
  }

}
