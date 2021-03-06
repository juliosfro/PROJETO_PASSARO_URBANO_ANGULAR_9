import { OrdemCompraReactiveComponent } from './../app/ordem-compra-reactive/ordem-compra-reactive.component';
import { OrdemCompraSucessoComponent } from './../app/ordem-compra-sucesso/ordem-compra-sucesso.component';
import { OrdemCompraComponent } from './../app/ordem-compra/ordem-compra.component';
import { OndeFicaComponent } from './../app/onde-fica/onde-fica.component';
import { ComoUsarComponent } from './../app/como-usar/como-usar.component';
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
    { path: 'ordem-compra-sucesso', component: OrdemCompraSucessoComponent },
    { path: 'ordem-compra', component: OrdemCompraComponent },
    { path: 'ordem-compra-reactive', component: OrdemCompraReactiveComponent },
    {
        path: 'oferta/:id', component: OfertaComponent,
        children: [
            { path: '', component: ComoUsarComponent },
            { path: 'como-usar', component: ComoUsarComponent },
            { path: 'onde-fica', component: OndeFicaComponent }
        ]
    }
];