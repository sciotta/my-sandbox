import { LogisticaTerrestre, LogisticaMaritima } from './factory-method';

describe('factory-method', () => {
  it('should create truck for land logistics', () => {
    const logistica = new LogisticaTerrestre();
    const resultado = logistica.planejarEntrega();
    
    expect(resultado).toBe('Logística planejada: Entrega por terra em caminhão');
  });

  it('should create ship for maritime logistics', () => {
    const logistica = new LogisticaMaritima();
    const resultado = logistica.planejarEntrega();
    
    expect(resultado).toBe('Logística planejada: Entrega por mar em navio');
  });
});
