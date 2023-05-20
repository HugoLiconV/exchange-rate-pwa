"use client";
import { Text } from "@components/ui";
import { useState } from "react";

const options = [
  {
    label: "0%",
    value: "0"
  },
  {
    label: "10%",
    value: "10"
  },
  {
    label: "15%",
    value: "15"
  }
];

type TipSelectorProps = {
  defaultOption?: string | null;
  onChange?: (value: string) => void;
};

function TipSelector({ defaultOption = '0', onChange }: TipSelectorProps) {
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    onChange?.(event.target.value);
  };

  return (
    <div className="flex space-x-2 w-full">
      {options.map(option => {
        const isSelected = selectedOption === option.value;
        return (
          <label
            key={option.value}
            className={`flex-grow inline-flex items-center justify-center rounded-3xl p-2 ${
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
            <Text color={isSelected ? "light" : "dark"}>{option.label}</Text>
          </label>
        );
      })}
    </div>
  );
}

export default TipSelector;
