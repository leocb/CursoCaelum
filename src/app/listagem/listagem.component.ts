import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { Http } from '@angular/http';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html'
})
export class ListagemComponent implements OnInit {

  title = 'Bem-vindo ao CaelumPic!';
  fotos: FotoComponent[] = [];
  constructor(http: Http) {
    http.get('http://localhost:3000/v1/fotos')
        .map(response => response.json())
        .subscribe(fotos => this.fotos = fotos, erro => console.error(erro)
    );
  };

  ngOnInit() {
  }

}
