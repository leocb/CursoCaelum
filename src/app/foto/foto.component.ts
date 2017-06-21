import { Component, Input } from '@angular/core';
@Component({
    selector: 'app-foto',
    templateUrl: './foto.component.html'
})
export class FotoComponent {
    @Input() titulo: string = '';
    @Input() url: string = '';
    descricao: string = '';
    _id: string = '';
}
