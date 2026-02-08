// Context
export class PlayerDeMusica {
  private estado: EstadoPlayer;
  private musicaAtual: string = "";

  constructor() {
    this.estado = new EstadoParado(this);
  }

  mudarEstado(estado: EstadoPlayer): void {
    this.estado = estado;
  }

  play(musica?: string): string {
    return this.estado.play(musica);
  }

  pause(): string {
    return this.estado.pause();
  }

  stop(): string {
    return this.estado.stop();
  }

  definirMusica(musica: string): void {
    this.musicaAtual = musica;
  }

  obterMusica(): string {
    return this.musicaAtual;
  }

  obterEstadoAtual(): string {
    if (this.estado instanceof EstadoTocando) return "tocando";
    if (this.estado instanceof EstadoPausado) return "pausado";
    return "parado";
  }
}

// Interface State
interface EstadoPlayer {
  play(musica?: string): string;
  pause(): string;
  stop(): string;
}

// Estados concretos
class EstadoParado implements EstadoPlayer {
  constructor(private player: PlayerDeMusica) {}

  play(musica?: string): string {
    if (musica) {
      this.player.definirMusica(musica);
    }
    if (!this.player.obterMusica()) {
      return "Nenhuma música selecionada";
    }
    this.player.mudarEstado(new EstadoTocando(this.player));
    return `Tocando: ${this.player.obterMusica()}`;
  }

  pause(): string {
    return "Player já está parado";
  }

  stop(): string {
    return "Player já está parado";
  }
}

class EstadoTocando implements EstadoPlayer {
  constructor(private player: PlayerDeMusica) {}

  play(musica?: string): string {
    if (musica && musica !== this.player.obterMusica()) {
      this.player.definirMusica(musica);
      return `Tocando: ${musica}`;
    }
    return `Já está tocando: ${this.player.obterMusica()}`;
  }

  pause(): string {
    this.player.mudarEstado(new EstadoPausado(this.player));
    return `Pausado: ${this.player.obterMusica()}`;
  }

  stop(): string {
    this.player.mudarEstado(new EstadoParado(this.player));
    return "Player parado";
  }
}

class EstadoPausado implements EstadoPlayer {
  constructor(private player: PlayerDeMusica) {}

  play(): string {
    this.player.mudarEstado(new EstadoTocando(this.player));
    return `Retomando: ${this.player.obterMusica()}`;
  }

  pause(): string {
    return `Já está pausado: ${this.player.obterMusica()}`;
  }

  stop(): string {
    this.player.mudarEstado(new EstadoParado(this.player));
    return "Player parado";
  }
}
