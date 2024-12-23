let globalCounter = 0;

export function generateFourCC(startLetter: string) {
  if (typeof startLetter !== 'string' || startLetter.length !== 1 || !/[A-Za-z]/.test(startLetter)) {
    throw new Error('The starting letter must be a single alphabetical character.');
  }

  const maxCounterValue = 1000; // Since we are using a 3-digit number, the max value is 999
  if (globalCounter >= maxCounterValue) {
    throw new Error('Exceeded the maximum increment range for three-digit values.');
  }

  const numericPart = globalCounter.toString().padStart(3, '0'); // 3-digit zero-padded number
  const codeString = startLetter.toUpperCase() + numericPart;
  const fourCC = codeString
    .split('')
    // eslint-disable-next-line no-bitwise
    .reduce((acc, char, index) => acc | (char.charCodeAt(0) << (8 * (3 - index))), 0);

  globalCounter++; // Increment the global counter for the next call

  return { codeString, fourCC };
}
