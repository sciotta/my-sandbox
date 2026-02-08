import { EditorDeTexto, ComandoEscrever, ComandoApagar, GerenciadorDeComandos } from './command';

describe('command', () => {
  it('should execute write commands', () => {
    const editor = new EditorDeTexto();
    const gerenciador = new GerenciadorDeComandos();

    gerenciador.executar(new ComandoEscrever(editor, "Olá "));
    gerenciador.executar(new ComandoEscrever(editor, "mundo!"));

    expect(editor.obterTexto()).toBe("Olá mundo!");
  });

  it('should undo commands', () => {
    const editor = new EditorDeTexto();
    const gerenciador = new GerenciadorDeComandos();

    gerenciador.executar(new ComandoEscrever(editor, "Olá "));
    gerenciador.executar(new ComandoEscrever(editor, "mundo!"));
    
    gerenciador.desfazer();
    expect(editor.obterTexto()).toBe("Olá ");

    gerenciador.desfazer();
    expect(editor.obterTexto()).toBe("");
  });

  it('should redo commands', () => {
    const editor = new EditorDeTexto();
    const gerenciador = new GerenciadorDeComandos();

    gerenciador.executar(new ComandoEscrever(editor, "Teste"));
    gerenciador.desfazer();
    gerenciador.refazer();

    expect(editor.obterTexto()).toBe("Teste");
  });

  it('should execute delete command', () => {
    const editor = new EditorDeTexto();
    const gerenciador = new GerenciadorDeComandos();

    gerenciador.executar(new ComandoEscrever(editor, "Olá mundo!"));
    gerenciador.executar(new ComandoApagar(editor, 6));

    expect(editor.obterTexto()).toBe("Olá ");
  });
});
