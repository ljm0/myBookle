import { Component, OnInit, Input } from '@angular/core';
import { Author } from '../types/author.type';

@Component({
  selector: 'bkl-authordetail',
  templateUrl: './authordetail.component.html',
  styleUrls: ['./authordetail.component.css']
})
export class AuthordetailComponent implements OnInit {

  @Input() author: Author;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
    this.index += 1;
  }

}
