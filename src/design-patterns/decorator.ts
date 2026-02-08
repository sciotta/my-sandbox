// Interface base
interface Pokemon {
  obterDescricao(): string;
  obterPoder(): number;
}

// Componente concreto
export class PikachuBase implements Pokemon {
  obterDescricao(): string {
    return "Pikachu";
  }

  obterPoder(): number {
    return 50;
  }
}

// Decorator base
abstract class HabilidadePokemon implements Pokemon {
  protected pokemon: Pokemon;

  constructor(pokemon: Pokemon) {
    this.pokemon = pokemon;
  }

  abstract obterDescricao(): string;
  abstract obterPoder(): number;
}

// Decoradores concretos
export class ComThunderbolt extends HabilidadePokemon {
  obterDescricao(): string {
    return `${this.pokemon.obterDescricao()} + Thunderbolt`;
  }

  obterPoder(): number {
    return this.pokemon.obterPoder() + 40;
  }
}

export class ComIronTail extends HabilidadePokemon {
  obterDescricao(): string {
    return `${this.pokemon.obterDescricao()} + Iron Tail`;
  }

  obterPoder(): number {
    return this.pokemon.obterPoder() + 35;
  }
}

export class ComQuickAttack extends HabilidadePokemon {
  obterDescricao(): string {
    return `${this.pokemon.obterDescricao()} + Quick Attack`;
  }

  obterPoder(): number {
    return this.pokemon.obterPoder() + 20;
  }
}
