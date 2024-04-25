import { type CallSite } from 'callsite';

export function getCallSite(position: number = 2): CallSite {
  const oldPrepareStackTrace = Error.prepareStackTrace;

  Error.prepareStackTrace = (_, stack) => stack;

  const stack = new Error().stack;

  Error.prepareStackTrace = oldPrepareStackTrace;

  const callSites = stack as unknown as CallSite[];

  if (position >= callSites.length) {
    throw new Error(`Frame number ${position} exceeds total frames ${callSites.length}`);
  }

  return callSites[position];
}
