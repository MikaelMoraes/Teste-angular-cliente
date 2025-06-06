import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';

@Injectable({ providedIn: 'root' })
export class ClienteService {
    private apiUrl = '/api/clientes';

    constructor(private http: HttpClient) { }

    getClientes(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(this.apiUrl);
    }

    getCliente(id: number): Observable<Cliente> {
        return this.http.get<Cliente>(`${this.apiUrl}/${id}`);
    }

    addCliente(cliente: Cliente): Observable<Cliente> {
        return this.http.post<Cliente>(this.apiUrl, cliente);
    }

    updateCliente(id:number, cliente: Cliente): Observable<any> {
        return this.http.put(`${this.apiUrl}/${id}`, cliente);
    }

    deleteCliente(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
