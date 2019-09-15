import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { HttpClient, HttpClientJsonpModule} from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey: string = "6d68d4eb69066bae072ef5a655ada682";
  private urlMoviedb: string = "https://api.themoviedb.org/3";

  constructor(private jsonp: HttpClientJsonpModule, private http: HttpClient, private datePipe: DatePipe ) { }

  // getPopulars() {
  //   let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
  //    return this.http.jsonp(url, 'callback');
  // }
  // getKids() {
  //   let url = `${ this.urlMoviedb }discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
  //    return this.http.jsonp(url, 'callback');
  // }
  // getTheatre() {
  //   let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
  //    return this.http.jsonp(url, 'callback');
  // }

  getCategory(cat: string) {
      if (cat === 'popular') {
        let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
        return this.http.jsonp(url, 'callback');
      }
      else if (cat === 'kids') {
        let url = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apikey }&language=es&sort_by=popularity.desc&certification_country=US&certification.lte=G&include_adult=false&include_video=false&page=1`;
        return this.http.jsonp(url, 'callback');
      }
      else if (cat === 'teatro') {
        let date: Date;
        date = new Date();
        date.setDate(date.getDate() - 30);
        let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${this.datePipe.transform(date, 'yyyy-MM-dd')}&primary_release_date.lte=${this.datePipe.transform(new Date(), 'yyyy-MM-dd')}&api_key=${ this.apikey }&language=es`;
        return this.http.jsonp(url, 'callback');
      }
  }
  getYear(year: string) {
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&year=${ year }`;
     return this.http.jsonp(url, 'callback');
  }
  getSearch(peli: string) {
    let url = `${ this.urlMoviedb }/search/movie?&api_key=${ this.apikey }&query=${ peli }&page=1&language=es`;
     return this.http.jsonp(url, 'callback');
  }
  getMovie(id: number) {
    let url = `${ this.urlMoviedb }/movie/${ id }?&api_key=${ this.apikey }&language=es`;
     return this.http.jsonp(url, 'callback');
  }
}
