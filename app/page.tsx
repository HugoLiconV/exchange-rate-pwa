import { Breakdown, Subtotal, Taxes, Tip } from "@components";
import { Button } from "@ui";
import { getCurrencyRate } from "@services/currencyRate";
import { PageProps } from ".next/types/app/layout";
import { formatCurrency, isNullish } from "./src/utils";

export default async function Home({ searchParams }: PageProps) {
  const {
    subtotal: subtotalSearchParam,
    tax: taxSearchParam,
    tip: tipSearchParam
  } = searchParams;
  const parsedSubtotal = isNullish(subtotalSearchParam)
    ? 0
    : parseFloat(subtotalSearchParam);
  const parsedTax = isNullish(taxSearchParam)
    ? 14.975
    : parseFloat(taxSearchParam);
  const parsedTip = isNullish(tipSearchParam) ? 0 : parseFloat(tipSearchParam);

  const tax = parsedSubtotal * (parsedTax / 100);
  const tip = parsedSubtotal * (parsedTip / 100);

  const subTotalPromise = getCurrencyRate({
    amount: parsedSubtotal
  })
  const taxesPromise = getCurrencyRate({
    amount: tax
  });
  const tipPromise = getCurrencyRate({
    amount: tip
  });

  const [subtotal, taxes, tipAmount] = await Promise.all([
    subTotalPromise,
    taxesPromise,
    tipPromise
  ]);


  const totalLocalAmount =
    subtotal.crdhldBillAmt + taxes.crdhldBillAmt + tipAmount.crdhldBillAmt;

  const totalTransactionAmount =
    subtotal.transAmt + taxes.transAmt + tipAmount.transAmt;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full items-center justify-between px-4 pt-6">
        <Subtotal localAmountSubtotal={subtotal.crdhldBillAmt} />
        <div className="h-4" />
        <Taxes localAmountSubtotal={taxes.crdhldBillAmt} />
        <div className="h-4" />
        <Tip
          localAmount={tipAmount.crdhldBillAmt}
          transactionAmount={tipAmount.transAmt}
        />
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
            localAmount: tipAmount.crdhldBillAmt,
            transactionAmount: tipAmount.transAmt
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
        </Button>
      </div>
    </main>
  );
}
