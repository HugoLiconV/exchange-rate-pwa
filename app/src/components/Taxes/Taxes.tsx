"use client";
import { Card, Option, RadioGroup, Text } from "@components/ui";
import { useQueryString } from "@hooks";
import { DEFAULT_TAX_RATE } from "app/src/constants";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type SubtotalProps = {
  rate: number;
  subtotal: number;
};

function Taxes({ rate, subtotal }: SubtotalProps) {
  const searchParams = useSearchParams();
  const [taxRate, setTaxRate] = useState(
    searchParams.get("tax-rate") || `${DEFAULT_TAX_RATE}`
  );
  const { pushQueryString } = useQueryString();

  const options: Option[] = useMemo(() => {
    return [
      {
        label: "0%",
        value: "0"
      },
      {
        label: "10%",
        value: "10",
        localAmount: subtotal * 0.1 * rate,
        transactionAmount: subtotal * 0.1
      },
      {
        label: "~15%",
        value: "14.975",
        localAmount: subtotal * 0.14975 * rate,
        transactionAmount: subtotal * 0.14975
      }
    ];
  }, [rate, subtotal]);

  useEffect(() => {
    pushQueryString("tax-rate", taxRate);
  }, [pushQueryString, taxRate]);

  return (
    <Card>
      <div className="flex gap-1">
        <span>🧾</span>
        <Text>Taxes</Text>
      </div>
      <div className="h-3" />
      <RadioGroup
        options={options}
        defaultOption={taxRate}
        onChange={setTaxRate}
        className="flex space-x-2 w-full"
      />
    </Card>
  );
}

export default Taxes;
