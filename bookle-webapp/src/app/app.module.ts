import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BookitemComponent } from './bookitem/bookitem.component';
import { BookService } from './services/book.service';
import { ApicInterceptor } from './auth/apicInterceptor';


@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    BookitemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    BookService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApicInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
