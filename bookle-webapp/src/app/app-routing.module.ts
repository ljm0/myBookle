import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { CollectionComponent } from './collection/collection.component';
import { AuthordetailComponent } from './authordetail/authordetail.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { AdminComponent } from './admin/admin.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { CollectionViewComponent } from './collection-view/collection-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'u/:customerId/collection', component: CollectionViewComponent },
  { path: 'authors/:id', component: AuthordetailComponent },
  { path: 'books/:id', component: BookdetailComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin-add', component: AdminAddComponent },
  { path: 'registration', component: RegistrationComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}

