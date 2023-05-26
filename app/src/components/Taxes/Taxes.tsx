"use client";
import { Card, Option, RadioGroup, Text } from "@components/ui";
import { useQueryString } from "@hooks";
import { DEFAULT_TAX_RATE } from "app/src/constants";
import { getParsedSearchParams } from "app/src/utils";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type SubtotalProps = {
  rate: number;
};

function Taxes({ rate }: SubtotalProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [taxRate, setTaxRate] = useState(
    searchParams.get("taxes") || `${DEFAULT_TAX_RATE}`
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
        label: "~15%",
        value: "14.975",
        localAmount: subtotal * 0.14975 * rate,
        transactionAmount: subtotal * 0.14975
      }
    ];
  }, [rate, subtotal]);

  useEffect(() => {
    router.push(pathname + "?" + createQueryString("taxes", taxRate));
  }, [pathname, router, taxRate]);

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
