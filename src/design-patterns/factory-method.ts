// Interface do produto
interface Pokemon {
  atacar(): string;
  tipo(): string;
}

// Produtos concretos
class PokemonEletrico implements Pokemon {
  atacar(): string {
    return "⚡ Ataque elétrico: Thunderbolt!";
  }

  tipo(): string {
    return "Elétrico";
  }
}

class PokemonFogo implements Pokemon {
  atacar(): string {
    return "🔥 Ataque de fogo: Flamethrower!";
  }

  tipo(): string {
    return "Fogo";
  }
}

class PokemonAgua implements Pokemon {
  atacar(): string {
    return "💧 Ataque de água: Hydro Pump!";
  }

  tipo(): string {
    return "Água";
  }
}

// Criador abstrato
export abstract class GinasioPokemon {
  abstract criarPokemon(): Pokemon;

  iniciarBatalha(): string {
    const pokemon = this.criarPokemon();
    return `Ginásio de ${pokemon.tipo()}: ${pokemon.atacar()}`;
  }
}

// Criadores concretos
export class GinasioEletrico extends GinasioPokemon {
  criarPokemon(): Pokemon {
    return new PokemonEletrico();
  }
}

export class GinasioFogo extends GinasioPokemon {
  criarPokemon(): Pokemon {
    return new PokemonFogo();
  }
}

export class GinasioAgua extends GinasioPokemon {
  criarPokemon(): Pokemon {
    return new PokemonAgua();
  }
}
