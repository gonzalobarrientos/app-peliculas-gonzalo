import {Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { SearchComponent } from './components/search/search.component';


export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search/:peli', component: SearchComponent },
  { path: 'pelicula/:id', component: PeliculaComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];