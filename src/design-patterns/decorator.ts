// Interface base
interface Cafe {
  obterDescricao(): string;
  obterPreco(): number;
}

// Componente concreto
export class CafeSimples implements Cafe {
  obterDescricao(): string {
    return "Café";
  }

  obterPreco(): number {
    return 5.0;
  }
}

// Decorator base
abstract class DecoradorDeCafe implements Cafe {
  protected cafe: Cafe;

  constructor(cafe: Cafe) {
    this.cafe = cafe;
  }

  abstract obterDescricao(): string;
  abstract obterPreco(): number;
}

// Decoradores concretos
export class ComLeite extends DecoradorDeCafe {
  obterDescricao(): string {
    return `${this.cafe.obterDescricao()} + Leite`;
  }

  obterPreco(): number {
    return this.cafe.obterPreco() + 2.0;
  }
}

export class ComChocolate extends DecoradorDeCafe {
  obterDescricao(): string {
    return `${this.cafe.obterDescricao()} + Chocolate`;
  }

  obterPreco(): number {
    return this.cafe.obterPreco() + 3.5;
  }
}

export class ComChantilly extends DecoradorDeCafe {
  obterDescricao(): string {
    return `${this.cafe.obterDescricao()} + Chantilly`;
  }

  obterPreco(): number {
    return this.cafe.obterPreco() + 1.5;
  }
}
