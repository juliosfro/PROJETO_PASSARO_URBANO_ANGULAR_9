import { HttpClient } from '@angular/common/http';
import { Oferta } from './../models/oferta.model';
import { Injectable } from '@angular/core';
import { URL_API_OFERTAS } from '../constants/app.api.constants';

@Injectable()
export class OfertasService {

    public ofertas: Oferta[] = [];
    private uri_api_ofertas = URL_API_OFERTAS;

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