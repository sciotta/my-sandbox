// Subsistemas complexos
class DVD {
  ligar(): string {
    return "DVD ligado";
  }

  reproduzir(filme: string): string {
    return `Reproduzindo: ${filme}`;
  }

  desligar(): string {
    return "DVD desligado";
  }
}

class Projetor {
  ligar(): string {
    return "Projetor ligado";
  }

  modoWideScreen(): string {
    return "Modo widescreen ativado";
  }

  desligar(): string {
    return "Projetor desligado";
  }
}

class SistemaDeAudio {
  ligar(): string {
    return "Sistema de áudio ligado";
  }

  ajustarVolume(nivel: number): string {
    return `Volume ajustado para ${nivel}`;
  }

  desligar(): string {
    return "Sistema de áudio desligado";
  }
}

class Luzes {
  escurecer(nivel: number): string {
    return `Luzes ajustadas para ${nivel}%`;
  }

  acender(): string {
    return "Luzes acesas";
  }
}

// Facade
export class HomeTheaterFacade {
  private dvd: DVD;
  private projetor: Projetor;
  private audio: SistemaDeAudio;
  private luzes: Luzes;

  constructor() {
    this.dvd = new DVD();
    this.projetor = new Projetor();
    this.audio = new SistemaDeAudio();
    this.luzes = new Luzes();
  }

  assistirFilme(filme: string): string[] {
    const acoes = [];
    acoes.push(this.luzes.escurecer(10));
    acoes.push(this.projetor.ligar());
    acoes.push(this.projetor.modoWideScreen());
    acoes.push(this.audio.ligar());
    acoes.push(this.audio.ajustarVolume(5));
    acoes.push(this.dvd.ligar());
    acoes.push(this.dvd.reproduzir(filme));
    return acoes;
  }

  fimDoFilme(): string[] {
    const acoes = [];
    acoes.push(this.dvd.desligar());
    acoes.push(this.audio.desligar());
    acoes.push(this.projetor.desligar());
    acoes.push(this.luzes.acender());
    return acoes;
  }
}
