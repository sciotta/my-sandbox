// Interface esperada pelo cliente
interface PlayerDeMusica {
  tocar(musica: string): void;
  pausar(): void;
  obterStatus(): string;
}

// Classe legada com interface diferente
export class PlayerMP3Antigo {
  private reproduzindo: boolean = false;

  iniciarReproducao(arquivo: string): void {
    this.reproduzindo = true;
    console.log(`[MP3 Legado] Reproduzindo arquivo: ${arquivo}`);
  }

  pararReproducao(): void {
    this.reproduzindo = false;
    console.log(`[MP3 Legado] Reprodução parada`);
  }

  estaReproduzindo(): boolean {
    return this.reproduzindo;
  }
}

// Adapter que faz a ponte entre as interfaces
export class AdapterPlayerMP3 implements PlayerDeMusica {
  private playerAntigo: PlayerMP3Antigo;

  constructor(playerAntigo: PlayerMP3Antigo) {
    this.playerAntigo = playerAntigo;
  }

  tocar(musica: string): void {
    this.playerAntigo.iniciarReproducao(musica);
  }

  pausar(): void {
    this.playerAntigo.pararReproducao();
  }

  obterStatus(): string {
    return this.playerAntigo.estaReproduzindo() 
      ? "Reproduzindo" 
      : "Parado";
  }
}
