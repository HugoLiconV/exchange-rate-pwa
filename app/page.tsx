import { Container } from "@components";
import { getCurrencyRate } from "@services/currencyRate";

export default async function Home() {
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
      <Container rate={rate.conversionRate} usdRate={usdRate.conversionRate} />
    </main>
  );
}
