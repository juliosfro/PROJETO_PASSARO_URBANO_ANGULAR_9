import { OndeFica } from './../models/onde-fica.model';
import { ComoUsar } from './../models/como-usar.model';
import { URL_API_COMO_USAR, URL_API_ONDE_FICA } from './../constants/app.api.constants';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Oferta } from './../models/oferta.model';
import { Injectable } from '@angular/core';
import { URL_API_OFERTAS } from '../constants/app.api.constants';
import { Observable } from 'rxjs';

@Injectable()
export class OfertasService {

    public ofertas: Oferta[] = [];
    private uri_api_ofertas = URL_API_OFERTAS;
    private uri_api_como_usar = URL_API_COMO_USAR;
    private uri_api_onde_fica = URL_API_ONDE_FICA;

    constructor(private http: HttpClient) {

    }

    public getOfertas(): Promise<Oferta[]> {
        /* Efetuar uma requisicao http e retornar uma promessa contendo um Oferta[] */
        return this.http.get<Oferta[]>(`${this.uri_api_ofertas}?destaque=true`).toPromise();
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get<Oferta[]>(`${this.uri_api_ofertas}?categoria=${categoria}`).toPromise();
    }

    public getOfertaPorId(id: number): Promise<Oferta[]> {
        return this.http.get<Oferta[]>(`${this.uri_api_ofertas}?id=${id}`).toPromise();
    }

    public getComoUsarOfertaPorId(id: number): Promise<ComoUsar[]> {
        return this.http.get<ComoUsar[]>(`${this.uri_api_como_usar}?id=${id}`).toPromise();
    }

    public getOndeFicaOfertaPorId(id: number): Promise<OndeFica[]> {
        return this.http.get<OndeFica[]>(`${this.uri_api_onde_fica}?id=${id}`).toPromise();
    }

    public getPesquisaOfertasPorNome(termo: string): Observable<HttpResponse<Oferta[]>> {
        return this.http.get<Oferta[]>(`${this.uri_api_ofertas}?descricao_oferta_like=${termo}`, { observe: 'response' });
    }

    /* 
        public getOfertasDois(): Promise<Oferta[]> {
           // Algum tipo de processamento que ao finalizar chama a funcao resolve ou reject 
            return new Promise((resolve, reject) => {
                let deu_certo = true;
                if (deu_certo) {
                    setTimeout(() => resolve(this.ofertas), 3000);
                }
                else reject({ codigo_erro: 404, mensagem: 'Server Not Found.' });
            });
        }
    
    */

}