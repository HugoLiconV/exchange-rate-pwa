"use client";
import { Button, Text } from "@components/ui";
import { formatCurrency, getParsedSearchParams } from "app/src/utils";
import { useSearchParams } from "next/navigation";

type TotalProps = {
  rate: number;
};

function Total({ rate }: TotalProps) {
  const searchParams = useSearchParams();
  const { subtotal, taxRate, tipRate } = getParsedSearchParams({
    subtotal: searchParams.get("subtotal"),
    taxRate: searchParams.get("tax-rate"),
    tipRate: searchParams.get("tip-rate")
  });

  const totalTransactionAmount =
    subtotal * (taxRate / 100) + subtotal * (tipRate / 100) + subtotal;
  const totalLocalAmount = totalTransactionAmount * rate;

  return (
    <Button>
      {formatCurrency({
        value: totalLocalAmount,
        currency: "MXN",
        currencyDisplay: "code"
      })}
      <div className="h-1" />
      <Text color="gray-300" variant="small">
        {formatCurrency({
          value: totalTransactionAmount,
          currency: "CAD"
        })}
      </Text>
    </Button>
  );
}

export default Total;
