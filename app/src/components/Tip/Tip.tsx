"use client";
import { Card, Option, RadioGroup, Text } from "@components/ui";
import { useMemo } from "react";

type TipProps = {
  rate: number;
  subtotal: number;
  tipRate: number;
  onTipRateChange: (tipRate: number) => void;
};

function Tip({ rate, subtotal, onTipRateChange, tipRate }: TipProps) {
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
        label: "15%",
        value: "15",
        localAmount: subtotal * 0.15 * rate,
        transactionAmount: subtotal * 0.15
      }
    ];
  }, [rate, subtotal]);

  const handleOnChange = (value: string) => {
    onTipRateChange(Number(value));
  };

  return (
    <Card>
      <div className="flex gap-1">
        <span>💁‍♂️</span>
        <Text>Tip</Text>
      </div>
      <div className="h-3" />
      <RadioGroup
        options={options}
        defaultOption={tipRate.toString()}
        onChange={handleOnChange}
        className="flex space-x-2 w-full"
      />
    </Card>
  );
}

export default Tip;
