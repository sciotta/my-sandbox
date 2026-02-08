// Interface do produto
interface Transporte {
  entregar(): string;
}

// Produtos concretos
class Caminhao implements Transporte {
  entregar(): string {
    return "Entrega por terra em caminhão";
  }
}

class Navio implements Transporte {
  entregar(): string {
    return "Entrega por mar em navio";
  }
}

// Criador abstrato
export abstract class Logistica {
  abstract criarTransporte(): Transporte;

  planejarEntrega(): string {
    const transporte = this.criarTransporte();
    return `Logística planejada: ${transporte.entregar()}`;
  }
}

// Criadores concretos
export class LogisticaTerrestre extends Logistica {
  criarTransporte(): Transporte {
    return new Caminhao();
  }
}

export class LogisticaMaritima extends Logistica {
  criarTransporte(): Transporte {
    return new Navio();
  }
}
