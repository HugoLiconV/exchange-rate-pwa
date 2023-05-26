"use client";
import { Button } from "@components/ui";
import { formatCurrency, getParsedSearchParams } from "app/src/utils";
import { useSearchParams } from "next/navigation";

type TotalProps = {
  rate: number;
};

function Total({ rate }: TotalProps) {
  const searchParams = useSearchParams();
  const { subtotal, tax, tip } = getParsedSearchParams({
    subtotal: searchParams.get("subtotal"),
    tax: searchParams.get("tax"),
    tip: searchParams.get("tip")
  });

  const totalTransactionAmount = subtotal + tax + tip;
  const totalLocalAmount = totalTransactionAmount * rate;

  return (
    <Button>
      Total{" "}
      {formatCurrency({
        value: totalLocalAmount,
        currency: "MXN",
        currencyDisplay: "code"
      })}
      <div className="h-1" />
      <p className="text-sm text-gray-300">
        {formatCurrency({
          value: totalTransactionAmount,
          currency: "CAD"
        })}
      </p>
    </Button>
  );
}

export default Total;
