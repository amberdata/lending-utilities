import BigNumber from 'bignumber.js';
import { BigNumberValue, valueToZDBigNumber } from '../../bigNumber/bignumber';
import { SECONDS_PER_YEAR } from '../../constants/constants';
import { binomialApproximatedRayPow } from '../../ray-math/ray.math';

export interface CalculateCompoundedInterestRequest {
  rate: BigNumberValue;
  currentTimestamp: number;
  lastUpdateTimestamp: number;
}

export function calculateCompoundedInterest({
  rate,
  currentTimestamp,
  lastUpdateTimestamp,
}: CalculateCompoundedInterestRequest): BigNumber {
  const timeDelta = valueToZDBigNumber(currentTimestamp - lastUpdateTimestamp);
  const ratePerSecond = valueToZDBigNumber(rate).dividedBy(SECONDS_PER_YEAR);
  return binomialApproximatedRayPow(ratePerSecond, timeDelta);
}
