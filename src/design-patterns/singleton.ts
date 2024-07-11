export class ConfiguracoesDoJogo {
  private static instancia: ConfiguracoesDoJogo;
  public configuracoes: { [chave: string]: any };

  // O construtor é privado para impedir a criação de novas instâncias
  private constructor() {
      this.configuracoes = {
          volume: 50,
          brilho: 70,
          dificuldade: 'normal'
      };
  }

  // Método estático para acessar a única instância da classe
  public static obterInstancia(): ConfiguracoesDoJogo {
      if (!ConfiguracoesDoJogo.instancia) {
          ConfiguracoesDoJogo.instancia = new ConfiguracoesDoJogo();
      }
      return ConfiguracoesDoJogo.instancia;
  }
}

