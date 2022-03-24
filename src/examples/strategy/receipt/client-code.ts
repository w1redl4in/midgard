import { ReceiptContextStrategy } from './ReceiptContextStrategy';
import { StrategyTypes } from './types';

const strategy1 = new ReceiptContextStrategy(StrategyTypes.PAYMENT);
const boleto = strategy1.getCorrectService();

const strategy2 = new ReceiptContextStrategy(StrategyTypes.TED);
const ted = strategy2.getCorrectService();

boleto.execute('1234567890123');
ted.execute('1231321');
