import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Book } from '../types/book.type';

@Component({
  selector: 'bkl-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminbooks: Book[] = [];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getBooksByAuthorId('1077326')
      .subscribe(data => this.adminbooks = data);
  }

}
