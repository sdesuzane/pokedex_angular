import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-lis',
  templateUrl: './pokemon-lis.component.html',
  styleUrls: ['./pokemon-lis.component.sass']
})
export class PokemonLisComponent {
  pokemons = ['bulbaasaur','Ivysaur', 'pikachu'];

}
