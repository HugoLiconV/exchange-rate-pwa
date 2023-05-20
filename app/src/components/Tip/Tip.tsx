"use client";
import { Card, Spacer, Text } from "@components/ui";
import { TipSelector } from "./components";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useQueryString } from "@hooks";
import { formatCurrency, isNullish } from "app/src/utils";
import { DEFAULT_TIP_RATE } from "app/src/constants";

type TipProps = {
  localAmount: number;
  transactionAmount: number;
};

function Tip({ localAmount, transactionAmount }: TipProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { createQueryString } = useQueryString();

  const handleOnChange = (value: string) => {
    router.push(pathname + "?" + createQueryString("tip", value));
  };

  return (
    <Card>
      <span>💁‍♂️</span>
      <Spacer size={3} />
      <Text variant="small">Tip</Text>
      <Spacer size={2} />
      <TipSelector
        onChange={handleOnChange}
        defaultOption={
          isNullish(searchParams.get("tip"))
            ? `${DEFAULT_TIP_RATE}`
            : searchParams.get("tip")
        }
      />
      <Spacer size={2} />
      <Text>
        {formatCurrency({
          value: transactionAmount,
          currency: "CAD"
        })}
      </Text>
      <div className="h-0.5" />
      <Text variant="small">
        {formatCurrency({
          value: localAmount,
          currency: "MXN",
          currencyDisplay: "code"
        })}
      </Text>
    </Card>
  );
}

export default Tip;
