import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-painel',
    templateUrl: 'painel.component.html'
})

export class PainelComponent implements OnInit {
    @Input() titulo: string = '';
    tituloCompleto: string = ''

    constructor() {

    }

    ngOnInit() {
        this.tituloCompleto = this.titulo;
        if (this.titulo.length > 7) {this.titulo = this.titulo.substr(0, 7) + '...'}
    }
}
