import { Component, OnInit, Input } from '@angular/core';
import { Author } from '../types/author.type';

@Component({
  selector: 'bkl-authoritem',
  templateUrl: './authoritem.component.html',
  styleUrls: ['./authoritem.component.css']
})
export class AuthoritemComponent implements OnInit {

  @Input() author: Author;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
    this.index += 1;
  }

}
