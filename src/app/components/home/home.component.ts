import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  populares: any[] = [];
  //years = ['2019', '2018', '2017', '2016', '2015', '2014'];

  years: any[] = [
    { id: 2019 },
    { id: 2018 },
    { id: 2017 },
    { id: 2016 },
    { id: 2015 },
    { id: 2014 }
  ];

  constructor(public _moviesService: PeliculasService) { 
    this._moviesService.getCategory('popular').subscribe((data: any) => {
      this.populares = data.results.slice(0, 9);
      console.log(data.results);
    });
  }

  ngOnInit() {
  }

  ObtenerCategoria(cat: string) {
    this._moviesService.getCategory(cat).subscribe((data: any) => {
      this.populares = data.results.slice(0, 9);
      console.log(data.results);
    });
  }

  ObtenerPorAno(year: number) {
    this._moviesService.getYear(year.toString()).subscribe((data: any) => {
      this.populares = data.results.slice(0, 9);
      console.log(data.results);
    });
  }

}
