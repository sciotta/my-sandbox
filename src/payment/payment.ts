interface IPaymentMethod {
  healthCheck: () => Promise<string>;
}

export class MercadoPago implements IPaymentMethod {
  async healthCheck(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => resolve('MercadoPago'), Math.random() * 10);  
    });
  }
}

export class Pagseguro implements IPaymentMethod {
  async healthCheck(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => resolve('PagSeguro'), Math.random() * 10);  
    });
  }
}

export const getPaymentGateway = async () => {
  const mercadoPago = new MercadoPago();
  const pagseguro = new Pagseguro();
  
  return Promise.race([
    mercadoPago.healthCheck(),
    pagseguro.healthCheck(),
  ]);
};