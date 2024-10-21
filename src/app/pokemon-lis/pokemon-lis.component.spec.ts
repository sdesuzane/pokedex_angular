import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonLisComponent } from './pokemon-lis.component';

describe('PokemonLisComponent', () => {
  let component: PokemonLisComponent;
  let fixture: ComponentFixture<PokemonLisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonLisComponent]
    });
    fixture = TestBed.createComponent(PokemonLisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
