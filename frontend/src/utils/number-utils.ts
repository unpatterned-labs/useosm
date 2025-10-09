export function formatNumber(value: number): string {
  if (value < 1_000) return value.toString();
  const suffixes = ["K", "M", "B", "T"];
  let index = -1;
  let val = value;

  while (val >= 1000 && index < suffixes.length - 1) {
    val /= 1000;
    index++;
  }

  const rounded = val % 1 === 0 ? val.toString() : val.toFixed(1);

  return `${rounded}${suffixes[index]}+`;
}
