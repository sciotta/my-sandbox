import { FabricaWindows, FabricaMacOS, Aplicacao } from './abstract-factory';

describe('abstract-factory', () => {
  it('should create Windows UI components', () => {
    const fabrica = new FabricaWindows();
    const app = new Aplicacao(fabrica);
    
    expect(app.renderizar()).toBe('[Botão Windows] [✓ Checkbox Windows]');
  });

  it('should create macOS UI components', () => {
    const fabrica = new FabricaMacOS();
    const app = new Aplicacao(fabrica);
    
    expect(app.renderizar()).toBe('( Botão macOS ) ☑ Checkbox macOS');
  });
});
