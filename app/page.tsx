import { Breakdown, Subtotal, Taxes, Tip } from "@components";
import { Button } from "@ui";
import { getCurrencyRate } from "@services/currencyRate";
import { PageProps } from ".next/types/app/layout";
import { formatCurrency, isNullish, sumSafely } from "./src/utils";
import {
  DEFAULT_SUBTOTAL,
  DEFAULT_TAX_RATE,
  DEFAULT_TIP_RATE
} from "./src/constants";

type SearchParams = {
  subtotal: string;
  tax: string;
  tip: string;
};

export default async function Home({ searchParams }: PageProps) {
  const {
    subtotal: parsedSubtotal,
    tax: parsedTax,
    tip: parsedTip
  } = getParsedSearchParams(searchParams);
  const transactionTax = parsedSubtotal * (parsedTax / 100);
  const transactionTip = parsedSubtotal * (parsedTip / 100);

  const subTotalPromise = getCurrencyRate({
    amount: parsedSubtotal
  });
  const taxesPromise = getCurrencyRate({
    amount: transactionTax
  });
  const tipPromise = getCurrencyRate({
    amount: transactionTip
  });

  const [subtotal, taxes, tip] = await Promise.all([
    subTotalPromise,
    taxesPromise,
    tipPromise
  ]);

  const totalLocalAmount = sumSafely(
    subtotal.crdhldBillAmt,
    taxes.crdhldBillAmt,
    tip.crdhldBillAmt
  );

  const totalTransactionAmount = sumSafely(
    subtotal.transAmt,
    taxes.transAmt,
    tip.transAmt
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full items-center justify-between px-4 pt-6">
        <Subtotal localAmountSubtotal={subtotal.crdhldBillAmt} />
        <div className="h-4" />
        <Taxes localAmountSubtotal={taxes.crdhldBillAmt} />
        <div className="h-4" />
        <Tip localAmount={tip.crdhldBillAmt} transactionAmount={tip.transAmt} />
        <div className="h-4" />
        <Breakdown
          subtotal={{
            localAmount: subtotal.crdhldBillAmt,
            transactionAmount: subtotal.transAmt
          }}
          taxes={{
            localAmount: taxes.crdhldBillAmt,
            transactionAmount: taxes.transAmt
          }}
          tip={{
            localAmount: tip.crdhldBillAmt,
            transactionAmount: tip.transAmt
          }}
          total={{
            localAmount: totalLocalAmount,
            transactionAmount: totalTransactionAmount
          }}
        />
        <div className="h-4" />
        <Button>
          Total{" "}
          {formatCurrency({
            value: totalTransactionAmount,
            currency: "CAD"
          })}
          <div className="h-1" />
          <p className="text-xs text-gray-300">
            {formatCurrency({
              value: totalLocalAmount,
              currency: "MXN",
              currencyDisplay: "code"
            })}
          </p>
        </Button>
      </div>
    </main>
  );
}

function getParsedSearchParams(searchParams: SearchParams) {
  const {
    subtotal: subtotalSearchParam,
    tax: taxSearchParam,
    tip: tipSearchParam
  } = searchParams;

  const parsedSubtotal = isNullish(subtotalSearchParam)
    ? DEFAULT_SUBTOTAL
    : parseFloat(subtotalSearchParam);
  const parsedTax = isNullish(taxSearchParam)
    ? DEFAULT_TAX_RATE
    : parseFloat(taxSearchParam);
  const parsedTip = isNullish(tipSearchParam)
    ? DEFAULT_TIP_RATE
    : parseFloat(tipSearchParam);

  return {
    subtotal: parsedSubtotal,
    tax: parsedTax,
    tip: parsedTip
  };
}
