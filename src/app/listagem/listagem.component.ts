import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html'
})
export class ListagemComponent implements OnInit {
  title = 'Bem-vindo ao CaelumPic!';
  fotos: FotoComponent[] = [];
  service: AppService;

  constructor(service: AppService) {
    this.service = service
    service.listar().subscribe(resposta => this.fotos = resposta, erro => console.error(erro))
  };

  ngOnInit() {
  }

  deletar(foto: FotoComponent) {
    this.service.deletar(foto).subscribe(
      () => {
        console.log(`${foto.titulo} deletada com sucesso!`)
        let novaListaDeFotos: FotoComponent[] = this.fotos.slice(0)
        novaListaDeFotos.splice(novaListaDeFotos.indexOf(foto), 1)
        this.fotos = novaListaDeFotos
      },
      erro => console.log(erro)
    )
  }

}
