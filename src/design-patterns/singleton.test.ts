import { ConfiguracoesDoJogo } from "./singleton";

describe('singleton', () => {
  it('should return the same instance', () => {
    const config = ConfiguracoesDoJogo.obterInstancia();
    config.configuracoes.volume = 100;

    const config2 = ConfiguracoesDoJogo.obterInstancia();
    expect(config2.configuracoes.volume).toBe(100);
    expect(config).toBe(config2);
  })
});