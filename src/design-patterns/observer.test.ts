import { Ash, Pikachu, Charizard } from './observer';

describe('observer', () => {
  it('should notify Ash about attack', () => {
    const aoReceberAtaque = jest.fn();

    const pikachu = new Pikachu();
    const charizard = new Charizard();
    const ash = new Ash(pikachu, charizard, aoReceberAtaque);
    
    pikachu.receberGolpe();
    expect(aoReceberAtaque).toHaveBeenCalledWith('Pikachu foi golpeado e sua vida é: 90');
    expect(aoReceberAtaque).toHaveBeenCalledTimes(1);

    ash.pararDeObservarPokemon1();
    pikachu.receberGolpe();
    expect(aoReceberAtaque).toHaveBeenCalledTimes(1);
  });
});