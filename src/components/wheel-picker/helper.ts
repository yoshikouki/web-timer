export const isTiltableDigit = ({
  index,
  paddedLength,
  tiltDigits,
}: {
  index: number;
  paddedLength: number;
  tiltDigits: number;
}) => {
  if (tiltDigits === 1) {
    return index + 1 === paddedLength;
  }
  if (paddedLength === tiltDigits) {
    return index === 0;
  }
  return index + 1 === paddedLength;
};
