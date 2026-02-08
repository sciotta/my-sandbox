// Produtos abstratos
interface Botao {
  renderizar(): string;
}

interface Checkbox {
  renderizar(): string;
}

// Produtos concretos - Windows
class BotaoWindows implements Botao {
  renderizar(): string {
    return "[Botão Windows]";
  }
}

class CheckboxWindows implements Checkbox {
  renderizar(): string {
    return "[✓ Checkbox Windows]";
  }
}

// Produtos concretos - macOS
class BotaoMacOS implements Botao {
  renderizar(): string {
    return "( Botão macOS )";
  }
}

class CheckboxMacOS implements Checkbox {
  renderizar(): string {
    return "☑ Checkbox macOS";
  }
}

// Abstract Factory
export interface FabricaDeComponentes {
  criarBotao(): Botao;
  criarCheckbox(): Checkbox;
}

// Fábricas concretas
export class FabricaWindows implements FabricaDeComponentes {
  criarBotao(): Botao {
    return new BotaoWindows();
  }

  criarCheckbox(): Checkbox {
    return new CheckboxWindows();
  }
}

export class FabricaMacOS implements FabricaDeComponentes {
  criarBotao(): Botao {
    return new BotaoMacOS();
  }

  criarCheckbox(): Checkbox {
    return new CheckboxMacOS();
  }
}

// Cliente
export class Aplicacao {
  private botao: Botao;
  private checkbox: Checkbox;

  constructor(fabrica: FabricaDeComponentes) {
    this.botao = fabrica.criarBotao();
    this.checkbox = fabrica.criarCheckbox();
  }

  renderizar(): string {
    return `${this.botao.renderizar()} ${this.checkbox.renderizar()}`;
  }
}
