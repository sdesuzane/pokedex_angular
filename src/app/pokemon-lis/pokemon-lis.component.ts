import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-lis',
  templateUrl: './pokemon-lis.component.html',
  styleUrls: ['./pokemon-lis.component.sass']
})
export class PokemonLisComponent {

  constructor(public pokemonService: PokemonService) {
  }
}
