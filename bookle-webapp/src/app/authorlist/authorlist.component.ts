import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Author } from '../types/author.type';

@Component({
  selector: 'bkl-authorlist',
  templateUrl: './authorlist.component.html',
  styleUrls: ['./authorlist.component.css']
})
export class AuthorlistComponent implements OnChanges {

  private ITEM_PER_PAGE = 3;

  totalPage: number;
  currentPage: number;
  pageNumbers;
  displayedAuthors: Author[];

  @Input() authors: Author[];

  constructor() { }

  private calcPageNumber(itemsCount, itemsPerPage): number {
    return Math.floor((itemsCount - 1) / itemsPerPage) + 1;
  }

  private setPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.displayedAuthors = 
      this.authors.slice((pageNumber-1)*this.ITEM_PER_PAGE, pageNumber*this.ITEM_PER_PAGE);
  }

  ngOnChanges() {
    this.totalPage = this.calcPageNumber(this.authors.length, this.ITEM_PER_PAGE);
    this.pageNumbers = Array(this.totalPage).fill(0).map((x,i) => i+1);
    this.setPage(1);
  }

}
