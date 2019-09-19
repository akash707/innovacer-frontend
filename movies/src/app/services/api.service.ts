import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  API_BASE_URL: string = 'https://raw.githubusercontent.com/FEND16/movie-json-data/master/json/movies-in-theaters.json';

  constructor(private httpClient: HttpClient) { }

  public getAllMovies() {
    return this.httpClient.get(`${this.API_BASE_URL}`);
  }
}
