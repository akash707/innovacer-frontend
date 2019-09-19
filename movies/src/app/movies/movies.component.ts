import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  public allMovies: any = [];
  // number of items to show per page pagination
  public pageSize:Number = 5;
  // starting page number of pagination
  public page:Number = 1;
  constructor(private router: Router, private spinner: NgxSpinnerService) { }
  ngOnInit() {
    // showing loader on component load
    this.spinner.show();
    // checking if movies property inside the state from home component
    if (window.history.state && 'movies' in window.history.state && window.history.state.movies && window.history.state.movies.length > 0) {
      console.log("Movies", window.history.state.movies);
      this.allMovies = window.history.state.movies;
      this.spinner.hide();
    } else {
      // if movies property is not present inside the state component then redirect to home
      this.router.navigate(['home']);
    }
  }

}
