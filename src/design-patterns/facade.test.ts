import { HomeTheaterFacade } from './facade';

describe('facade', () => {
  it('should start movie with all systems', () => {
    const homeTheater = new HomeTheaterFacade();
    const acoes = homeTheater.assistirFilme("Matrix");
    
    expect(acoes).toEqual([
      "Luzes ajustadas para 10%",
      "Projetor ligado",
      "Modo widescreen ativado",
      "Sistema de áudio ligado",
      "Volume ajustado para 5",
      "DVD ligado",
      "Reproduzindo: Matrix"
    ]);
  });

  it('should end movie and turn off systems', () => {
    const homeTheater = new HomeTheaterFacade();
    const acoes = homeTheater.fimDoFilme();
    
    expect(acoes).toEqual([
      "DVD desligado",
      "Sistema de áudio desligado",
      "Projetor desligado",
      "Luzes acesas"
    ]);
  });
});
