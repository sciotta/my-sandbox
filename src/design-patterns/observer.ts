interface IPokemon {
  registrarObservador(observador: IObservador): Function;
  notificarObservadores(): void;
  receberGolpe(): void;
  vida: number;
  nome: string
}

interface IObservador {
  avisar(pokemon: IPokemon): void;
}

abstract class Pokemon implements IPokemon {
  public vida: number;
  public readonly nome: string;

  constructor(
    nome: string,
    vidaInicial: number,
    private readonly observadores: IObservador[] = [],

  ) {
    this.vida = vidaInicial;
    this.nome = nome;
  }

  public registrarObservador(observador: IObservador): Function {
    this.observadores.push(observador);
    return () => {
      const posicaoObservador = this.observadores.indexOf(observador);
      this.observadores.splice(posicaoObservador, 1);
    };
  }

  public notificarObservadores(): void {
    this.observadores.forEach(observador => {
      observador.avisar(this);
    });
  }

  public abstract receberGolpe(): void;
}

export class Pikachu extends Pokemon {
  constructor() {
    super("Pikachu", 100);
  }

  public receberGolpe(): void {
    this.vida -= 10;
    this.notificarObservadores();
  }
}

export class Charizard extends Pokemon {
  constructor() {
    super("Charizard", 150);
  }

  public receberGolpe(): void {
    this.vida -= 20;
    this.notificarObservadores();
  }
}

export class Ash implements IObservador {
  private pararDeAvisarPokemon1: Function;
  private pararDeAvisarPokemon2: Function;
  private quandoAcontecerAtaque: Function;

  constructor(pokemon1: IPokemon, pokemon2: IPokemon, quandoAcontecerAtaque: Function) {
    this.pararDeAvisarPokemon1 = pokemon1.registrarObservador(this);
    this.pararDeAvisarPokemon2 = pokemon2.registrarObservador(this);
    this.quandoAcontecerAtaque = quandoAcontecerAtaque;
  }

  public avisar(pokemon: IPokemon): void {
    this.quandoAcontecerAtaque(
      `${pokemon.nome} foi golpeado e sua vida é: ${pokemon.vida}`
    );
  }

  public pararDeObservarPokemon1(): void {
    this.pararDeAvisarPokemon1();
  }

  public pararDeObservarPokemon2(): void {
    this.pararDeAvisarPokemon2();
  }
}
