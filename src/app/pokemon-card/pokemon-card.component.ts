import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent {
  @Input()
  pokemon!: string;

  @Input()
  numero!: number;

  pegarImagemPokemon() {
    const numeroFormatado = this.leadingZero(this.numero);
    return `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${numeroFormatado}.png`;
    
  }
  // recebe uma string  e coloca '0' na rente de acordo com quantos '0' for pedido ou caracteres
  leadingZero(str: string | number, size = 3): string {
    let s = String(str);
    while(s.length < (size || 2)) {
      s = '0' + s;
    }
    return s;
  }
}
