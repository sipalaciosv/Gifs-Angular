import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../services/gifs.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService){};
  
  buscar(): void{
    let valor = this.txtBuscar.nativeElement.value.trim();
    if(valor.length>0){  
      this.gifsService.buscarGifs(valor);
      this.txtBuscar.nativeElement.value='';
    }
  }
}
