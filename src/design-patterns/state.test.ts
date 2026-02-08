import { PlayerDeMusica } from './state';

describe('state', () => {
  it('should play music from stopped state', () => {
    const player = new PlayerDeMusica();
    const resultado = player.play("Bohemian Rhapsody");
    
    expect(resultado).toBe("Tocando: Bohemian Rhapsody");
    expect(player.obterEstadoAtual()).toBe("tocando");
  });

  it('should pause music', () => {
    const player = new PlayerDeMusica();
    player.play("Imagine");
    const resultado = player.pause();
    
    expect(resultado).toBe("Pausado: Imagine");
    expect(player.obterEstadoAtual()).toBe("pausado");
  });

  it('should resume from paused state', () => {
    const player = new PlayerDeMusica();
    player.play("Hotel California");
    player.pause();
    const resultado = player.play();
    
    expect(resultado).toBe("Retomando: Hotel California");
    expect(player.obterEstadoAtual()).toBe("tocando");
  });

  it('should stop music', () => {
    const player = new PlayerDeMusica();
    player.play("Stairway to Heaven");
    const resultado = player.stop();
    
    expect(resultado).toBe("Player parado");
    expect(player.obterEstadoAtual()).toBe("parado");
  });

  it('should handle play when already playing', () => {
    const player = new PlayerDeMusica();
    player.play("Yesterday");
    const resultado = player.play();
    
    expect(resultado).toBe("Já está tocando: Yesterday");
  });
});
