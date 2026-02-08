import { CafeSimples, ComLeite, ComChocolate, ComChantilly } from './decorator';

describe('decorator', () => {
  it('should add ingredients to coffee', () => {
    let meuCafe = new CafeSimples();
    
    expect(meuCafe.obterDescricao()).toBe('Café');
    expect(meuCafe.obterPreco()).toBe(5);

    meuCafe = new ComLeite(meuCafe);
    expect(meuCafe.obterDescricao()).toBe('Café + Leite');
    expect(meuCafe.obterPreco()).toBe(7);

    meuCafe = new ComChocolate(meuCafe);
    expect(meuCafe.obterDescricao()).toBe('Café + Leite + Chocolate');
    expect(meuCafe.obterPreco()).toBe(10.5);

    meuCafe = new ComChantilly(meuCafe);
    expect(meuCafe.obterDescricao()).toBe('Café + Leite + Chocolate + Chantilly');
    expect(meuCafe.obterPreco()).toBe(12);
  });
});
