"use client";
import { Card, NumberInput, Spacer, Text } from "@components/ui";
import { useQueryString } from "@hooks";
import { formatCurrency } from "app/src/utils";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

type SubtotalProps = {
  localAmountSubtotal: number;
};

function Taxes({ localAmountSubtotal }: SubtotalProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { createQueryString } = useQueryString();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, "");
    router.push(pathname + "?" + createQueryString("tax", value));
  };

  return (
    <Card>
      <span>🧾</span>
      <Spacer size={3} />
      <div className="flex">
        <div className="flex-1">
          <Text variant="small">Taxes</Text>
          <div className="h-2" />
          <NumberInput
            id="taxes"
            name="taxes"
            className="w-full"
            mask="percent"
            defaultValue={searchParams.get("taxes") || "14.975"}
            onChange={handleOnChange}
          />
        </div>
        <div className="w-4" />
        <div className="border-r"></div>
        <div className="w-4" />
        <div className="flex-1">
          <Text variant="small">MXN</Text>
          <div className="h-2" />
          <Text>
            {formatCurrency({
              value: localAmountSubtotal,
              currency: "MXN"
            })}
          </Text>
        </div>
      </div>
    </Card>
  );
}

export default Taxes;
