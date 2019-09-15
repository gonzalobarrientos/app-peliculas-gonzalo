import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  populares: any[] = [];
  data: any;
  peli: string;

  constructor(private activatedRoute: ActivatedRoute, private _peliculasService: PeliculasService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.peli = params['peli'];
      this.ObtenerBusqueda(this.peli);
    });
  }

  ObtenerBusqueda(peli: string) {
    this._peliculasService.getSearch(peli).subscribe((data: any) => {
      this.populares = data.results;
      console.log(data.results);
    });
  }

}
