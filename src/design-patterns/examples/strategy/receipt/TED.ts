/* eslint-disable class-methods-use-this */
import { IReceiptStrategy } from './types';

export class TED implements IReceiptStrategy {
  execute(transactionId: string): void {
    try {
      console.log('chamando service de TED', transactionId);
    } catch (error) {
      console.log('falhou miseravelmente');
    }
  }
}
