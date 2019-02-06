import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../types/customer.type';
import { CollectionService } from '../services/collection.service';

@Component({
  selector: 'bkl-collection-view',
  templateUrl: './collection-view.component.html',
  styleUrls: ['./collection-view.component.css']
})
export class CollectionViewComponent implements OnInit {

  nickname: string;
  collectionBooks = [];

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private collectionService: CollectionService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const customerId = params['customerId'];
      this.customerService.getCustomerById(customerId)
        .subscribe(
          (customer: Customer) => {
            this.nickname = customer.nickname;
            this.collectionService.getBooksInCollection(customer.collection.id)
              .subscribe(
                (books) => {
                  this.collectionBooks = books;
                }
              );
          }
        );
    });
  }

}
