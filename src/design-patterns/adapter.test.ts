import { SistemaPokemonAntigo, AdapterSistemaPokemon } from './adapter';

describe('adapter', () => {
  it('should adapt old pokemon system to new interface', () => {
    const sistemaAntigo = new SistemaPokemonAntigo();
    const sistema = new AdapterSistemaPokemon(sistemaAntigo);

    const ataque = sistema.atacar('Pikachu', 'Thunderbolt');
    expect(ataque).toBe('[Sistema Antigo] Pikachu usou Thunderbolt!');

    const defesa = sistema.defender();
    expect(defesa).toBe('[Sistema Antigo] Pokémon protegido!');

    const status = sistema.obterStatus();
    expect(status).toBe('HP: 85% | Status: ativo');
  });
});
