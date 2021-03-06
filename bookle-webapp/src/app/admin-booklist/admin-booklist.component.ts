import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../types/book.type';

@Component({
  selector: 'bkl-admin-booklist',
  templateUrl: './admin-booklist.component.html',
  styleUrls: ['./admin-booklist.component.css']
})
export class AdminBooklistComponent {

  private ITEM_PER_PAGE = 50;

  totalPage: number;
  currentPage: number;
  pageNumbers;
  displayedBooks: Book[];

  @Input() books: Book[];

  constructor() { }

  private calcPageNumber(itemsCount, itemsPerPage): number {
    return Math.floor((itemsCount - 1) / itemsPerPage) + 1;
  }

  private setPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.displayedBooks = 
      this.books.slice((pageNumber-1)*this.ITEM_PER_PAGE, pageNumber*this.ITEM_PER_PAGE);
  }

  getTotalIndex(pageNumber, pageIndex): number {
    return (pageNumber - 1) * this.ITEM_PER_PAGE + pageIndex + 1;
  }

  ngOnChanges() {
    this.totalPage = this.calcPageNumber(this.books.length, this.ITEM_PER_PAGE);
    this.pageNumbers = Array(this.totalPage).fill(0).map((x,i) => i+1);
    this.setPage(1);
  }

}
