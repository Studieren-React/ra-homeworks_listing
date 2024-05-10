export function truncateString(
  value: string | undefined,
  maxLength = 50
): string | undefined {
  if (value == null) {
    return;
  }

  return value!.length > maxLength ? value!.slice(0, maxLength - 3) : value;
}
