import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SortPipe } from './pipes/sort.pipe';
import { MoviesComponent } from './movies/movies.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from "ngx-spinner";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SortPipe,
    MoviesComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
