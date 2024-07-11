import { MercadoPago, Pagseguro, getPaymentGateway } from "./payment";

jest.useFakeTimers();

describe("Payment Gateway", () => {
  it("should return the fastest (MercadoPago) payment gateway", async () => {
    jest.spyOn(MercadoPago.prototype, "healthCheck").mockImplementation(() => {
      return new Promise((resolve) => {
        setTimeout(() => resolve("MercadoPago"), 1);
      });
    });
    
    jest.spyOn(Pagseguro.prototype, "healthCheck").mockImplementation(() => {
      return new Promise((resolve) => {
        setTimeout(() => resolve("PagSeguro"), 10);
      });
    });

    const result = getPaymentGateway();
    jest.advanceTimersByTime(5);
    expect(result).resolves.toBe("MercadoPago");
  });

  it("should return the fastest (PagSeguro) payment gateway", async () => {
    jest.spyOn(MercadoPago.prototype, "healthCheck").mockImplementation(() => {
      return new Promise((resolve) => {
        setTimeout(() => resolve("MercadoPago"), 10);
      });
    });
    
    jest.spyOn(Pagseguro.prototype, "healthCheck").mockImplementation(() => {
      return new Promise((resolve) => {
        setTimeout(() => resolve("PagSeguro"), 1);
      });
    });

    const result = getPaymentGateway();
    jest.advanceTimersByTime(5);
    expect(result).resolves.toBe("PagSeguro");
  });
});