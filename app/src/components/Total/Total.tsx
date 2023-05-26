"use client";
import { Button, Text } from "@components/ui";
import { formatCurrency } from "app/src/utils";

type TotalProps = {
  rate: number;
  subtotal: number;
  taxRate: number;
  tipRate: number;
};

function Total({ rate, subtotal, taxRate, tipRate }: TotalProps) {
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
