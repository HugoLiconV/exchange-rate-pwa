"use client";
import { Text } from "@ui";
import { formatCurrency } from "app/src/utils";
import { useState } from "react";

type RateProps = {
  rate: number;
  usdRate: number;
};

function Rate({ rate, usdRate }: RateProps) {
  const [selectedRate, setSelectedRate] = useState<"CAD" | "USD">("CAD");
  const [longPressTimeout, setLongPressTimeout] =
    useState<NodeJS.Timeout | null>(null);

  const handleStart = () => {
    const timeout = setTimeout(() => {
      setSelectedRate(selectedRate === "CAD" ? "USD" : "CAD");
    }, 500);
    setLongPressTimeout(timeout);
  };

  const handleEnd = () => {
    if (longPressTimeout) {
      clearTimeout(longPressTimeout);
      setLongPressTimeout(null);
    }
  };

  return (
    <div
      className="bg-black w-full px-4 pb-4 pt-6 disable-select"
      onMouseDown={handleStart}
      onMouseUp={handleEnd}
      onTouchStart={handleStart}
      onTouchEnd={handleEnd}
    >
      <Text variant="small" color="gray-300">
        {selectedRate === "CAD" ? "1 CAD = " : "1 USD = "}
      </Text>
      <div className="h-2" />
      <div className="flex gap-1">
        <span>{selectedRate === "CAD" ? "🇨🇦" : "🇺🇸"}</span>
        <Text color="light">
          {formatCurrency({
            value: selectedRate === "CAD" ? rate : usdRate,
            currency: "MXN",
            currencyDisplay: "code"
          })}
        </Text>
      </div>
    </div>
  );
}

export default Rate;
