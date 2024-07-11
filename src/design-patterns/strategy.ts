interface Imposto {
	calcular(valorBase: number): number;
}

export class ICMS implements Imposto {
	public calcular(valorBase: number): number {
		return valorBase * 0.2;
	}
}

export class CalculadoraDeImposto {
	calcular(imposto: Imposto, valorBase: number): number {
		return imposto.calcular(valorBase);
	}
}
