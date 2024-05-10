export function quantityLevel(quantity: number | undefined): string {
  const level = 'level';
  let grade = '';

  if (!quantity) {
    return level;
  }

  if (quantity! <= 10) {
    grade = 'low';
  }

  if (quantity! <= 20) {
    grade = 'medium';
  }

  if (quantity! > 20) {
    grade = 'high';
  }

  return `${level}-${grade}`;
}
