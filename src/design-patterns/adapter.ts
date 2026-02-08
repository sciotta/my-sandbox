// Interface esperada pelo sistema novo
interface SistemaDeBatalha {
  atacar(pokemon: string, golpe: string): string;
  defender(): string;
  obterStatus(): string;
}

// Sistema legado com interface diferente
export class SistemaPokemonAntigo {
  iniciarAtaque(nomePokemon: string, nomeGolpe: string): string {
    return `[Sistema Antigo] ${nomePokemon} usou ${nomeGolpe}!`;
  }

  ativarDefesa(): string {
    return `[Sistema Antigo] Pokémon protegido!`;
  }

  verificarEstado(): { hp: number; status: string } {
    return { hp: 85, status: "ativo" };
  }
}

// Adapter que faz a ponte entre as interfaces
export class AdapterSistemaPokemon implements SistemaDeBatalha {
  private sistemaAntigo: SistemaPokemonAntigo;

  constructor(sistemaAntigo: SistemaPokemonAntigo) {
    this.sistemaAntigo = sistemaAntigo;
  }

  atacar(pokemon: string, golpe: string): string {
    return this.sistemaAntigo.iniciarAtaque(pokemon, golpe);
  }

  defender(): string {
    return this.sistemaAntigo.ativarDefesa();
  }

  obterStatus(): string {
    const estado = this.sistemaAntigo.verificarEstado();
    return `HP: ${estado.hp}% | Status: ${estado.status}`;
  }
}
