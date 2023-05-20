"use client";
import MaskedInput from "react-text-mask";
import { createNumberMask } from "./utils";

type CurrencyInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  mask: "currency" | "percent";
};

function CurrencyInput({ mask, ...props }: CurrencyInputProps) {
  return (
    <MaskedInput
      mask={
        mask === "currency"
          ? createNumberMask({
              prefix: "$",
              allowDecimal: true,
              decimalLimit: 2,
              includeThousandsSeparator: true,
              thousandsSeparatorSymbol: ",",
            })
          : createNumberMask({
              prefix: "",
              suffix: "%",
              allowDecimal: true,
              decimalLimit: 3,
              includeThousandsSeparator: true,
              thousandsSeparatorSymbol: ",",
            })
      }
      step="any"
      inputMode="decimal"
      {...props}
    />
  );
}

export default CurrencyInput;
