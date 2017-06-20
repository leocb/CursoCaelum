import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
import { FotoComponent } from './foto/foto.component';

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

    listar(): FotoComponent[] {
        let fotos: FotoComponent[]
        this.http.get('http://localhost:3000/v1/fotos')
            .map(response => response.json())
            .subscribe(resposta => fotos = resposta, erro => console.error(erro)
        );
        return fotos;
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
