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
      // onChange={e => {
      //   // unmask value letting only numbers and decimal point
      //   e.target.value = e.target.value.replace(/[^0-9.]/g, "");
      //   if (props.onChange) {
      //     props.onChange(e);
      //   }
      // }}
      {...props}
    />
  );
}

export default CurrencyInput;
