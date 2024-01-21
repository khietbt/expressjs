function toNumber(s: string) {
  const v = parseInt(s);

  if (isNaN(v)) {
    throw new Error(`'${s}' is not a valid number`);
  }

  return v;
}

export const ConversionUtils = {
  toNumber
};
