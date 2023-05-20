export const isNullish = (value: any) => value === null || value === undefined || value === "" || Number.isNaN(value);

export function formatCurrency({
  value,
  currency,
  currencyDisplay = "symbol"
}: {
  value: number;
  currency: string;
  currencyDisplay?: "symbol" | "code" | "name";
}) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: currency,
    maximumFractionDigits: 2,
    currencyDisplay
  }).format(isNullish(value) ? 0 : value);
}
