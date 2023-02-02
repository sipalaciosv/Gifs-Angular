import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { MostradorComponent } from './mostrador/mostrador.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    BuscadorComponent,
    MostradorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [GifsPageComponent]
})
export class GifsModule { }
