import { Component, OnInit, Input } from '@angular/core';
import { Author } from '../types/author.type';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'bkl-authorlist',
  templateUrl: './authorlist.component.html',
  styleUrls: ['./authorlist.component.css']
})
export class AuthorlistComponent implements OnInit {

  @Input() authors: Author[];

  constructor(
    private authorService: AuthorService
  ) { }

  ngOnInit() {
    this.authorService.getAuthorsByBookId('1')
      .subscribe(data => this.authors = data);
  }

}
