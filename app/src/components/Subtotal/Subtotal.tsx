"use client";
import { Card, NumberInput, Spacer, Text } from "@components/ui";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useQueryString } from "@hooks";
import { formatCurrency } from "app/src/utils";

type SubtotalProps = {
  localAmountSubtotal: number;
};

function Subtotal({ localAmountSubtotal }: SubtotalProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { createQueryString } = useQueryString();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, "");
    router.push(pathname + "?" + createQueryString("subtotal", value));
  };

  return (
    <Card>
      <span>💸</span>
      <Spacer size={3} />
      <div className="flex">
        <div className="flex-1 flex flex-col">
          <Text variant="small">CAD</Text>
          <div className="h-2" />
          <NumberInput
            id="subtotal"
            name="subtotal"
            className="w-full"
            defaultValue={searchParams.get("subtotal") ?? ""}
            mask="currency"
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

export default Subtotal;
