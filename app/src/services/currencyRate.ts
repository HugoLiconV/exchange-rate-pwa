export type TransCurrency = "CAD" | "USD";

type CurrencyRate = {
  conversionRate: number;
  crdhldBillAmt: number;
  crdhldBillCurr: "MXN";
  fxDate: string;
  transAmt: number;
  transCurr: TransCurrency;
};

type GetCurrencyRateParams = {
  amount: number;
  transCurr?: TransCurrency;
};

export async function getCurrencyRate(
  params: GetCurrencyRateParams
): Promise<CurrencyRate> {
  const apiUrl = new URL(
    "https://www.mastercard.com.mx/settlement/currencyrate/conversion-rate"
  );
  const queryParams: Record<string, number | string> = {
    fxDate: "0000-00-00",
    transCurr: params?.transCurr || "CAD",
    crdhldBillCurr: "MXN",
    bankFee: 0,
    transAmt: params.amount
  };

  Object.keys(queryParams).forEach(key =>
    apiUrl.searchParams.append(key, queryParams[key].toString())
  );

  const res = await fetch(apiUrl, {
    next: {
      revalidate: 60 * 60 * 4 // 4 hours
    }
  });
  if (!res.ok) {
    throw new Error("error");
  }

  const parsedRes = (await res.json()) as { data: CurrencyRate };
  const { data } = parsedRes;
  return data;
}
