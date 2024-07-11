import { assert } from 'console';
import { CalculadoraDeImposto, ICMS } from './strategy';

describe('strategy example tests',  () => {
  it('should calculate correctly the tax', () => {
    const calculadora = new CalculadoraDeImposto();
    const tax = calculadora.calcular(new ICMS(), 300);
    expect(tax).toBe(60);
  })
});