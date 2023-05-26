import { Rate, Subtotal, Taxes, Tip, Total } from "@components";
import { getCurrencyRate } from "@services/currencyRate";

export default async function Home() {
  const rate = await getCurrencyRate({
    amount: 1
  });

  return (
    <main className="min-h-screen flex flex-col items-center mx-auto max-w-lg">
      <Rate rate={rate.crdhldBillAmt} />
      <div className="w-full items-center justify-between px-4 pt-6">
        <Subtotal rate={rate.crdhldBillAmt} />
        <div className="h-4" />
        <Taxes rate={rate.crdhldBillAmt} />
        <div className="h-4" />
        <Tip rate={rate.crdhldBillAmt} />
        <div className="h-4" />
        <div className="h-4" />
        <Total rate={rate.crdhldBillAmt} />
      </div>
    </main>
  );
}
