import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { StorageService } from '../services/storage-service.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public allMovies: any = [];
  public keyword = '';
  public showWatchlist = false;
  public watchListMovies: any = [];
  constructor(private apiService: ApiService, private storageService: StorageService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    // showing loader on component load 
    this.spinner.show();
    this.apiService.getAllMovies().subscribe((response) => {
      this.allMovies = response;
      // hide loader after getting the data from service
      this.spinner.hide();
    },(err)=>{
      // hide loader if service gets failed
      this.spinner.hide();
    });
  }

  // function to add movie to watchlist
  addToWatch(movie) {
    let temp = this.storageService.getItem(movie.title);
    if (!temp) {
      this.storageService.setItem(movie.title, movie);
    }
  }

  // function to redirect to movies route and pass allMovies data 
  navigateWithData() {
    this.router.navigateByUrl('/movies', { state: { movies: this.allMovies } });
  } 

  // function to show watchlist
  showWatchList() {
    this.showWatchlist = true;
    this.watchListMovies = this.storageService.allStorage();
  }

  // function to hide watchlist
  hideWatchList(){
    this.showWatchlist = false;
  }

}
