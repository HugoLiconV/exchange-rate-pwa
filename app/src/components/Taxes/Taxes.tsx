"use client";
import { Card, Option, RadioGroup, Text } from "@components/ui";
import { useMemo } from "react";

type SubtotalProps = {
  rate: number;
  subtotal: number;
  taxRate: number;
  onTaxRateChange: (taxRate: number) => void;
};

function Taxes({ rate, subtotal, onTaxRateChange, taxRate }: SubtotalProps) {
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

  const handleOnChange = (value: string) => {
    onTaxRateChange(Number(value));
  };

  return (
    <Card>
      <div className="flex gap-1">
        <span>🧾</span>
        <Text>Taxes</Text>
      </div>
      <div className="h-3" />
      <RadioGroup
        options={options}
        defaultOption={taxRate.toString()}
        onChange={handleOnChange}
        className="flex space-x-2 w-full"
      />
    </Card>
  );
}

export default Taxes;
