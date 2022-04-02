/* eslint-disable class-methods-use-this */
import { IReceiptStrategy } from './types';

export class Boleto implements IReceiptStrategy {
  execute(transactionId: string): void {
    try {
      console.log('chamando service de boleto', transactionId);
    } catch (error) {
      console.log('falhou miseravelmente');
    }
  }
}
