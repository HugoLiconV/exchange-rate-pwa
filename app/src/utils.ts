import {
  DEFAULT_SUBTOTAL,
  DEFAULT_TAX_RATE,
  DEFAULT_TIP_RATE
} from "./constants";

export const isNullish = (value: any) =>
  value === null || value === undefined || value === "" || Number.isNaN(value);

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

export function sumSafely(...values: number[]) {
  return values.reduce((acc, value) => acc + (isNullish(value) ? 0 : value), 0);
}

type SearchParams = {
  subtotal?: string | null;
  taxRate?: string | null;
  tipRate?: string | null;
};

export function getParsedSearchParams(searchParams: SearchParams) {
  const {
    subtotal: subtotalSearchParam,
    taxRate: taxSearchParam,
    tipRate: tipSearchParam
  } = searchParams;

  const parsedSubtotal = isNullish(subtotalSearchParam)
    ? DEFAULT_SUBTOTAL
    : parseFloat(subtotalSearchParam || "0");
  const parsedTaxes = isNullish(taxSearchParam)
    ? DEFAULT_TAX_RATE
    : parseFloat(taxSearchParam || "0");
  const parsedTip = isNullish(tipSearchParam)
    ? DEFAULT_TIP_RATE
    : parseFloat(tipSearchParam || "0");

  return {
    subtotal: parsedSubtotal,
    taxRate: parsedTaxes,
    tipRate: parsedTip
  };
}
