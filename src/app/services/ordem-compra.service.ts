import { API_BASE_URL } from './../constants/app.api.constants';
import { Observable } from 'rxjs';
import { Pedido } from './../models/pedido.model';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OrdemCompraService {

    constructor(private http: HttpClient) { }

    public efetivarCompra(pedido: Pedido): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const options = { headers: headers }
        return this.http.post<Observable<any>>(`${API_BASE_URL}pedidos`, JSON.stringify(pedido), options);
    }

}