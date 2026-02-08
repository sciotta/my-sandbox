import { GinasioEletrico, GinasioFogo, GinasioAgua } from './factory-method';

describe('factory-method', () => {
  it('should create electric pokemon in electric gym', () => {
    const ginasio = new GinasioEletrico();
    const resultado = ginasio.iniciarBatalha();
    
    expect(resultado).toBe('Ginásio de Elétrico: ⚡ Ataque elétrico: Thunderbolt!');
  });

  it('should create fire pokemon in fire gym', () => {
    const ginasio = new GinasioFogo();
    const resultado = ginasio.iniciarBatalha();
    
    expect(resultado).toBe('Ginásio de Fogo: 🔥 Ataque de fogo: Flamethrower!');
  });

  it('should create water pokemon in water gym', () => {
    const ginasio = new GinasioAgua();
    const resultado = ginasio.iniciarBatalha();
    
    expect(resultado).toBe('Ginásio de Água: 💧 Ataque de água: Hydro Pump!');
  });
});
