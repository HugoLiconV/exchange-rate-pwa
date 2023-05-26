"use client";
import { useState } from "react";
import Text from "../Text";
import { formatCurrency, isNullish } from "app/src/utils";

export interface Option {
  value: string;
  label: string;
  localAmount?: number;
  transactionAmount?: number;
}

interface RadioGroupProps {
  options: Option[];
  defaultOption?: string | null;
  onChange?: (value: string) => void;
  className?: string;
}

function RadioGroup({
  options,
  defaultOption = "0",
  onChange,
  className
}: RadioGroupProps) {
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    onChange?.(event.target.value);
  };

  return (
    <div className={`flex space-x-2 w-full ${className}`}>
      {options.map(option => {
        const isSelected = selectedOption === option.value;
        return (
          <label
            key={option.value}
            className={`flex-grow flex-1 inline-flex items-center justify-center rounded-3xl p-2 ${
              isSelected ? "bg-black" : "bg-gray-200"
            }`}
          >
            <input
              type="radio"
              value={option.value}
              className="hidden"
              checked={isSelected}
              onChange={handleOptionChange}
            />
            <div className="flex flex-col items-center">
              <Text color={isSelected ? "light" : "dark"}>{option.label}</Text>
              {!isNullish(option.localAmount) &&
              !isNullish(option.transactionAmount) ? (
                <>
                  <div className="h-2" />
                  <Text variant="xs" color={isSelected ? "light" : "dark"}>
                    {formatCurrency({
                      value: option.localAmount ?? 0,
                      currency: "MXN"
                    })}
                  </Text>
                  <div className="h-1" />
                  <Text variant="xs" color={isSelected ? "light" : "dark"}>
                    {formatCurrency({
                      value: option.transactionAmount ?? 0,
                      currency: "CAD"
                    })}
                  </Text>
                </>
              ) : null}
            </div>
          </label>
        );
      })}
    </div>
  );
}

export default RadioGroup;
