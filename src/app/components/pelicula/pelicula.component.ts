import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  pelicula: any = {};
  idPeli: number;

  constructor(private activatedRoute: ActivatedRoute, private _peliculasService: PeliculasService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.idPeli = params['id'];
      this.ObtenerBusqueda(this.idPeli);
    });
  }
  ObtenerBusqueda(peli: number) {
    this._peliculasService.getMovie(peli).subscribe((data: any) => {
      this.pelicula = data;
      console.log(data);
    });
  }

}
