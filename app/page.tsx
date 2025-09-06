import { Container } from "@components";
import { getCurrencyRate } from "@services/currencyRate";

export const dynamic = "force-dynamic";

export default async function Home() {
  const usdRatePromise = getCurrencyRate({
    amount: 1
  });
  const cadRatePromise = getCurrencyRate({
    amount: 1,
    transCurr: "CAD"
  });

  const [usdRate, cadRate] = await Promise.all([usdRatePromise, cadRatePromise]);

  return (
    <main className="min-h-screen flex flex-col items-center mx-auto max-w-lg">
      <Container usdRate={usdRate.conversionRate} cadRate={cadRate.conversionRate} />
    </main>
  );
}
