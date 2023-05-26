import { PageProps } from ".next/types/app/page";
import { Rate, Subtotal, Taxes, Tip, Total } from "@components";
import { getCurrencyRate } from "@services/currencyRate";
import { getParsedSearchParams } from "./src/utils";

export default async function Home({ searchParams }: PageProps) {
  const { subtotal, taxRate, tipRate } = getParsedSearchParams({
    subtotal: searchParams.subtotal,
    taxRate: searchParams["tax-rate"],
    tipRate: searchParams["tip-rate"]
  });
  const ratePromise = getCurrencyRate({
    amount: 1
  });
  const usdRatePromise = getCurrencyRate({
    amount: 1,
    transCurr: "USD"
  });

  const [rate, usdRate] = await Promise.all([ratePromise, usdRatePromise]);

  return (
    <main className="min-h-screen flex flex-col items-center mx-auto max-w-lg">
      <Rate rate={rate.crdhldBillAmt} usdRate={usdRate.crdhldBillAmt} />
      <div className="w-full items-center justify-between px-4 pt-6">
        <Subtotal rate={rate.crdhldBillAmt} />
        <div className="h-4" />
        <Taxes rate={rate.crdhldBillAmt} subtotal={subtotal} />
        <div className="h-4" />
        <Tip rate={rate.crdhldBillAmt} subtotal={subtotal} />
        <div className="h-4" />
        <Total
          rate={rate.crdhldBillAmt}
          subtotal={subtotal}
          taxRate={taxRate}
          tipRate={tipRate}
        />
      </div>
    </main>
  );
}
