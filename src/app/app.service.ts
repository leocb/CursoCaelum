import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
import { FotoComponent } from './foto/foto.component';
import { Observable } from 'rxjs';

@Injectable()

export class AppService {
    http: Http
    fotos: FotoComponent[] = []
    foto: FotoComponent = new FotoComponent()
    cabecalho: Headers = new Headers()
    url: string = 'http://localhost:3000/v1/fotos';

    constructor(http: Http) {
        this.http = http
        this.cabecalho.append('content-type', 'application/json');
    }

    listar(): Observable<FotoComponent[]> {
        return this.http.get(this.url)
            .map(response => response.json())
    }

    cadastrar(foto: FotoComponent): any {
        return this.http.post(this.url, JSON.stringify(foto), {headers: this.cabecalho})
    }

    deletar(foto: FotoComponent) {

    }

    atualizar(foto: FotoComponent) {

    }
}
