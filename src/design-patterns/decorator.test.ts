import { PikachuBase, ComThunderbolt, ComIronTail, ComQuickAttack } from './decorator';

describe('decorator', () => {
  it('should add abilities to pikachu', () => {
    let pikachu = new PikachuBase();
    
    expect(pikachu.obterDescricao()).toBe('Pikachu');
    expect(pikachu.obterPoder()).toBe(50);

    pikachu = new ComThunderbolt(pikachu);
    expect(pikachu.obterDescricao()).toBe('Pikachu + Thunderbolt');
    expect(pikachu.obterPoder()).toBe(90);

    pikachu = new ComIronTail(pikachu);
    expect(pikachu.obterDescricao()).toBe('Pikachu + Thunderbolt + Iron Tail');
    expect(pikachu.obterPoder()).toBe(125);

    pikachu = new ComQuickAttack(pikachu);
    expect(pikachu.obterDescricao()).toBe('Pikachu + Thunderbolt + Iron Tail + Quick Attack');
    expect(pikachu.obterPoder()).toBe(145);
  });
});
