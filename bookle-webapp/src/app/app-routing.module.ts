import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BooklistComponent } from './booklist/booklist.component';
import { SearchComponent } from './search/search.component';
import { CollectionComponent } from './collection/collection.component';
import { AdminComponent } from './admin/admin.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminAddComponent } from './admin-add/admin-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/collection', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin-add', component: AdminAddComponent },
  { path: 'registration', component: RegistrationComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}

