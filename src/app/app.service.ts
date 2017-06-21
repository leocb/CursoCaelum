import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
import { FotoComponent } from './foto/foto.component';
import { Observable } from "rxjs";

@Injectable()

export class AppService {
    http: Http
    fotos: FotoComponent[] = []
    foto: FotoComponent = new FotoComponent();
    cabecalho: Headers = new Headers();

    constructor(http: Http) {
        this.http = http
        this.cabecalho.append('content-type', 'application/json');
    }

    listar(): Observable<FotoComponent[]> {
        return this.http.get('http://localhost:3000/v1/fotos')
            .map(response => response.json())
    }

    cadastrar(foto: FotoComponent) {
        this.http.post('http://localhost:3000/v1/fotos', JSON.stringify(foto), {headers: this.cabecalho})
                 .subscribe(response => console.log('Foto gravada com sucesso!'),
                            erro => console.log('Erro: ' + erro.status, erro))
    }

    deletar(foto: FotoComponent) {

    }

    atualizar(foto: FotoComponent) {

    }
}
