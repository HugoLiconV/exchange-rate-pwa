"use client";

import {
  DEFAULT_SUBTOTAL,
  DEFAULT_TAX_RATE,
  DEFAULT_TIP_RATE
} from "app/src/constants";
import { useState } from "react";
import { Rate, Subtotal, Taxes, Tip, Total } from "..";

type ContainerProps = {
  usdRate: number;
  cadRate: number;
};

function Container({ usdRate, cadRate }: ContainerProps) {
  const [subtotal, setSubtotal] = useState<number | undefined>();
  const [taxRate, setTaxRate] = useState(DEFAULT_TAX_RATE);
  const [tipRate, setTipRate] = useState(DEFAULT_TIP_RATE);

  return (
    <>
      <Rate usdRate={usdRate} cadRate={cadRate} />
      <div className="w-full items-center justify-between px-4 pt-6">
        <Subtotal
          rate={usdRate}
          subtotal={subtotal}
          onSubtotalChange={setSubtotal}
        />
        <div className="h-4" />
        <Taxes
          rate={usdRate}
          subtotal={subtotal ?? DEFAULT_SUBTOTAL}
          taxRate={taxRate}
          onTaxRateChange={setTaxRate}
        />
        <div className="h-4" />
        <Tip
          rate={usdRate}
          subtotal={subtotal ?? DEFAULT_SUBTOTAL}
          tipRate={tipRate}
          onTipRateChange={setTipRate}
        />
        <div className="h-4" />
        <Total
          rate={usdRate}
          subtotal={subtotal ?? DEFAULT_SUBTOTAL}
          taxRate={taxRate}
          tipRate={tipRate}
        />
      </div>
    </>
  );
}

export default Container;
