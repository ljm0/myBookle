import { Component, OnInit, Input } from '@angular/core';
import { Author } from '../types/author.type';
import { ActivatedRoute } from '@angular/router';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'bkl-authordetail',
  templateUrl: './authordetail.component.html',
  styleUrls: ['./authordetail.component.css']
})
export class AuthordetailComponent implements OnInit {

  private authorId: string;
  author: Author;

  constructor(
    private route: ActivatedRoute,
    private authorService: AuthorService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.authorId = params['id'];
      
      this.authorService.getAuthorById(this.authorId)
        .subscribe(
          author => this.author = author
        );
    });
  }

}
