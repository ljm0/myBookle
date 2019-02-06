import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Customer } from '../types/customer.type';

@Injectable()
export class CustomerService {

  private apiRoot = environment.apiEndpoint;

  constructor(
    private http: HttpClient
  ) { }

  getCustomerById(customerId: string): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiRoot}/Customers/${customerId}?filter[fields][id]=true&filter[fields][nickname]=true&filter[fields][role]=true&filter[include]=collection`);
  }

}
