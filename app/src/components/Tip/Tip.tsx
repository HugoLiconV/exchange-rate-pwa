"use client";
import { Card, Option, RadioGroup, Text } from "@components/ui";
import { useSearchParams } from "next/navigation";
import { useQueryString } from "@hooks";
import { DEFAULT_TIP_RATE } from "app/src/constants";
import { useEffect, useMemo, useState } from "react";

type TipProps = {
  rate: number;
  subtotal: number;
};

function Tip({ rate, subtotal }: TipProps) {
  const searchParams = useSearchParams();
  const [tipRate, setTipRate] = useState(
    searchParams.get("tip-rate") || `${DEFAULT_TIP_RATE}`
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
        label: "15%",
        value: "15",
        localAmount: subtotal * 0.15 * rate,
        transactionAmount: subtotal * 0.15
      }
    ];
  }, [rate, subtotal]);

  useEffect(() => {
    pushQueryString("tip-rate", tipRate);
  }, [pushQueryString, tipRate]);

  return (
    <Card>
      <div className="flex gap-1">
        <span>💁‍♂️</span>
        <Text>Tip</Text>
      </div>
      <div className="h-3" />
      <RadioGroup
        options={options}
        defaultOption={tipRate}
        onChange={setTipRate}
        className="flex space-x-2 w-full"
      />
    </Card>
  );
}

export default Tip;
