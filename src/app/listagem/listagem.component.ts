import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html'
})
export class ListagemComponent implements OnInit {
  title = 'Bem-vindo ao CaelumPic!';
  fotos: FotoComponent[]

  constructor(service: AppService) {
    service.listar().subscribe(resposta => this.fotos = resposta, erro => console.error(erro))
  };

  ngOnInit() {
  }

}
