"use client";
import { Card, NumberInput, Text } from "@components/ui";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useQueryString } from "@hooks";
import { formatCurrency } from "app/src/utils";
import { useState } from "react";

type SubtotalProps = {
  rate: number;
};

function Subtotal({ rate }: SubtotalProps) {
  const searchParams = useSearchParams();
  const [amount, setAmount] = useState(
    Number(searchParams.get("subtotal") ?? "")
  );
  const router = useRouter();
  const pathname = usePathname();
  const { createQueryString } = useQueryString();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, "");
    setAmount(Number(value));
    router.push(pathname + "?" + createQueryString("subtotal", value));
  };

  return (
    <Card>
      <div className="flex gap-1">
        <span>💸</span>
        <Text>Subtotal</Text>
      </div>
      <div className="h-3" />
      <div className="flex">
        <div className="flex-1 flex flex-col">
          <Text variant="xs" color="gray-600">
            CAD
          </Text>
          <div className="h-2" />
          <NumberInput
            id="subtotal"
            name="subtotal"
            className="w-full"
            placeholder="$0.00"
            defaultValue={searchParams.get("subtotal") ?? ""}
            mask="currency"
            onChange={handleOnChange}
          />
        </div>
        <div className="w-4" />
        <div className="border-r"></div>
        <div className="w-4" />
        <div className="flex-1">
          <Text variant="xs" color="gray-600">
            MXN
          </Text>
          <div className="h-2" />
          <Text>
            {formatCurrency({
              value: rate * amount,
              currency: "MXN"
            })}
          </Text>
        </div>
      </div>
    </Card>
  );
}

export default Subtotal;
