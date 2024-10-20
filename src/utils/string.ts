export function add(numbers: string): number {
  // If the input is an empty string, return 0
  if (numbers === "") return 0;

  // Check for custom delimiters
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const delimiter = parts[0].slice(2); // Get the delimiter
    const numArray = parts[1].split(delimiter).map(Number); // Split by custom delimiter
    return checkForNegatives(numArray);
  }

  // Split by both commas and new lines for standard cases
  const numArray = numbers.split(/[\n,]+/).map(Number);
  return checkForNegatives(numArray);
}

function checkForNegatives(numArray: number[]): number {
  const negatives = numArray.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error("negative numbers not allowed: " + negatives.join(", "));
  }
  return numArray.reduce((sum, num) => sum + num, 0);
}
