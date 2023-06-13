"use client";
import { Card, NumberInput, Text } from "@components/ui";
import { formatCurrency } from "app/src/utils";

type SubtotalProps = {
  rate: number;
  subtotal: number | undefined;
  onSubtotalChange: (subtotal: number | undefined) => void;
};

function Subtotal({ rate, onSubtotalChange, subtotal }: SubtotalProps) {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, "");
    onSubtotalChange(value ? Number(value) : undefined);
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
            value={subtotal?.toString()}
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
              value: rate * (subtotal || 0),
              currency: "MXN"
            })}
          </Text>
        </div>
      </div>
    </Card>
  );
}

export default Subtotal;
