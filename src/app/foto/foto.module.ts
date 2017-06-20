import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';
import { FiltrarPorTitulo } from './foto.pipe';
@NgModule({
    declarations: [FotoComponent, FiltrarPorTitulo],
    exports: [FotoComponent, FiltrarPorTitulo]
})
export class FotoModule {

}
