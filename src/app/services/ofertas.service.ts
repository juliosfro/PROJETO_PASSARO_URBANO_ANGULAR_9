import { HttpClient } from '@angular/common/http';
import { Oferta } from './../models/oferta.model';
import { Injectable } from '@angular/core';

@Injectable()
export class OfertasService {

    public ofertas: Oferta[] = [];

    constructor(private http: HttpClient) {

    }

    public getOfertas(): Promise<Oferta[]> {
        /* Efetuar uma requisicao http e retornar uma promessa contendo um Oferta[] */
        return this.http.get<Oferta[]>('http://localhost:3000/ofertas?destaque=true').toPromise();
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