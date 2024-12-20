import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../models/pedidos.model';

@Injectable({
    providedIn: 'root'
})
export class PedidoService {

    private apiUrl = 'http://localhost:8080/api/pedidos';

    constructor(private http: HttpClient) { }

    getAll(): Observable<Pedido[]> {
        return this.http.get<Pedido[]>(this.apiUrl);
    }

    getById(id: number): Observable<Pedido> {
        return this.http.get<Pedido>(`${this.apiUrl}/${id}`);
    }

    create(pedido: Pedido): Observable<Pedido> {
        return this.http.post<Pedido>(this.apiUrl, pedido);
    }

    update(id: number, pedido: Pedido): Observable<Pedido> {
        return this.http.put<Pedido>(`${this.apiUrl}/${id}`, pedido);
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
