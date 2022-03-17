import { Boleto } from './Boleto';
import { TED } from './TED';
import { StrategyTypes } from './types';

export class ReceiptContextStrategy {
  private strategy: StrategyTypes;

  constructor(strategy: StrategyTypes) {
    this.strategy = strategy;
  }

  public getCorrectService() {
    switch (this.strategy) {
      case StrategyTypes.PAYMENT:
        return new Boleto();

      case StrategyTypes.TED:
        return new TED();

      default:
        return new Boleto();
    }
  }
}
