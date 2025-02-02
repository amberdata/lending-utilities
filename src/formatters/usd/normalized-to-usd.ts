import BigNumber from 'bignumber.js';
import { BigNumberValue } from '../../bigNumber/bignumber';

export function normalizedToUsd(
  value: BigNumber,
  marketReferencePriceInUsd: BigNumberValue,
  marketReferenceCurrencyDecimals: number,
): BigNumber {
  return value
    .multipliedBy(marketReferencePriceInUsd)
    .shiftedBy(marketReferenceCurrencyDecimals * -1);
}
