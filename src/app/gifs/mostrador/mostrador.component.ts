import { Component } from '@angular/core';
import { Gif } from '../interfaces/giphy.interface';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-mostrador',
  templateUrl: './mostrador.component.html',
  styleUrls: ['./mostrador.component.css']
})
export class MostradorComponent {

  constructor(private gifsService: GifsService){}

  get resultados(): Array<Gif>{
    return this.gifsService.resultados;
  }
}
