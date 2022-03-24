export interface IReceiptStrategy {
  execute(transactionId: string): void;
}
// eslint-disable-next-line no-shadow
export enum StrategyTypes {
  TED = 'TED',
  PAYMENT = 'PAYMENT',
}
