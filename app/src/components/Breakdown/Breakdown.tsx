import { Card, Text } from "@components/ui";
import { formatCurrency } from "app/src/utils";

type BreakdownProps = {
  subtotal: {
    localAmount: number;
    transactionAmount: number;
  };
  taxes: {
    localAmount: number;
    transactionAmount: number;
  };
  tip: {
    localAmount: number;
    transactionAmount: number;
  };
  total: {
    localAmount: number;
    transactionAmount: number;
  };
};

const breakdownKeys: (keyof BreakdownProps)[] = [
  "subtotal",
  "taxes",
  "tip",
  "total"
];

function Breakdown(props: BreakdownProps) {
  return (
    <Card>
      <dl className="flex flex-col w-full">
        {breakdownKeys.map((label, index) => {
          const isFirst = index === 0;
          const isLast = index === breakdownKeys.length - 1;
          const firstElementClass = isFirst ? "pt-0 " : " ";
          const lastElementClass = isLast ? "pb-0 " : " ";
          return (
            <div key={label}>
              <div
                className={
                  "flex justify-between items-center py-2 " +
                  firstElementClass +
                  lastElementClass
                }
              >
                <dt className="font-medium capitalize">
                  {label}
                </dt>
                <dd className="flex flex-col items-end">
                  <Text>
                    {formatCurrency({
                      value: props[label].transactionAmount,
                      currency: "CAD"
                    })}
                  </Text>
                  <Text variant="small">
                    {formatCurrency({
                      value: props[label].localAmount,
                      currency: "MXN",
                      currencyDisplay: "code"
                    })}
                  </Text>
                </dd>
              </div>
              {index !== breakdownKeys.length - 1 && (
                <div className="border-b" />
              )}
            </div>
          );
        })}
      </dl>
    </Card>
  );
}

export default Breakdown;
