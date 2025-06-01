
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({ providedIn: 'root' })
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const clientes = [
            {
                id: 1,
                nome: 'Exemplo',
                email: 'exemplo@gmail.com',
                telefone: '(11) 99999-9999',
                endereco: {
                    rua: 'Rua das Flores',
                    numero: '123',
                    cidade: 'São Paulo',
                    estado: 'SP',
                    cep: '01234-567'
                }
            },
        ];
        return { clientes };
    }

    genId(clientes: any[]): number {
        return clientes.length > 0 ? Math.max(...clientes.map(c => c.id)) + 1 : 1;
    }
}

