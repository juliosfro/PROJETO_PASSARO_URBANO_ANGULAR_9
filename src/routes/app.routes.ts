import { OfertaComponent } from './../app/oferta/oferta.component';
import { HomeComponent } from './../app/home/home.component';
import { Routes } from '@angular/router';
import { DiversaoComponent } from 'src/app/diversao/diversao.component';
import { RestauranteComponent } from 'src/app/restaurante/restaurante.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'restaurante', component: RestauranteComponent },
    { path: 'diversao', component: DiversaoComponent },
    { path: 'oferta', component: OfertaComponent },
    { path: 'oferta/:id', component: OfertaComponent }
];