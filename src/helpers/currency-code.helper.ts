import { ECurrencyCode, ECurrencyPrefix } from '../enums';

export function currencyCode(
  code: ECurrencyCode | undefined,
  price: string | undefined
): string {
  switch (code) {
    case ECurrencyCode.USD:
      return `${ECurrencyPrefix.USD}${price}`;
    case ECurrencyCode.EUR:
      return `${ECurrencyPrefix.EUR}${price}`;
    default:
      return `${price} ${ECurrencyPrefix.GBP}`;
  }
}
