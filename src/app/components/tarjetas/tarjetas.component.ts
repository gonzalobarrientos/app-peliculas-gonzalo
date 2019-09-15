import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent implements OnInit {

  @Input() items: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    console.log(this.items);
  }

  buscarPelicula(id: number) {
    this.router.navigate(['pelicula', id]);
  }
}
