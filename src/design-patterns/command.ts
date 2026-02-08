// Receiver
class EditorDeTexto {
  private texto: string = "";

  escrever(palavras: string): void {
    this.texto += palavras;
  }

  apagar(quantidade: number): void {
    this.texto = this.texto.slice(0, -quantidade);
  }

  obterTexto(): string {
    return this.texto;
  }
}

// Interface Command
interface Comando {
  executar(): void;
  desfazer(): void;
}

// Comandos concretos
class ComandoEscrever implements Comando {
  private editor: EditorDeTexto;
  private texto: string;

  constructor(editor: EditorDeTexto, texto: string) {
    this.editor = editor;
    this.texto = texto;
  }

  executar(): void {
    this.editor.escrever(this.texto);
  }

  desfazer(): void {
    this.editor.apagar(this.texto.length);
  }
}

class ComandoApagar implements Comando {
  private editor: EditorDeTexto;
  private quantidade: number;
  private textoApagado: string = "";

  constructor(editor: EditorDeTexto, quantidade: number) {
    this.editor = editor;
    this.quantidade = quantidade;
  }

  executar(): void {
    const textoAtual = this.editor.obterTexto();
    this.textoApagado = textoAtual.slice(-this.quantidade);
    this.editor.apagar(this.quantidade);
  }

  desfazer(): void {
    this.editor.escrever(this.textoApagado);
  }
}

// Invoker
export class GerenciadorDeComandos {
  private historico: Comando[] = [];
  private indice: number = -1;

  executar(comando: Comando): void {
    // Remove comandos à frente do índice atual
    this.historico = this.historico.slice(0, this.indice + 1);
    
    comando.executar();
    this.historico.push(comando);
    this.indice++;
  }

  desfazer(): void {
    if (this.indice >= 0) {
      const comando = this.historico[this.indice];
      comando.desfazer();
      this.indice--;
    }
  }

  refazer(): void {
    if (this.indice < this.historico.length - 1) {
      this.indice++;
      const comando = this.historico[this.indice];
      comando.executar();
    }
  }
}

// Exports para uso
export { EditorDeTexto, ComandoEscrever, ComandoApagar };
