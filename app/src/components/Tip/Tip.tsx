"use client";
import { Card, Option, RadioGroup, Text } from "@components/ui";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useQueryString } from "@hooks";
import { getParsedSearchParams } from "app/src/utils";
import { DEFAULT_TIP_RATE } from "app/src/constants";
import { useEffect, useMemo, useState } from "react";

type TipProps = {
  rate: number;
};

function Tip({ rate }: TipProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [tipRate, setTipRate] = useState(
    searchParams.get("tip") || `${DEFAULT_TIP_RATE}`
  );
  const { createQueryString } = useQueryString();
  const { subtotal } = getParsedSearchParams({
    subtotal: searchParams.get("subtotal")
  });

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
    router.push(pathname + "?" + createQueryString("tip", tipRate));
  }, [pathname, router, tipRate]);

  return (
    <Card>
      <div className="flex gap-1">
        <span>💁‍♂️</span>
        <Text>Tip</Text>
      </div>
      <div className="h-2" />
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
