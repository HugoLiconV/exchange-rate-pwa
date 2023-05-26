import { Text } from "@ui";
import { formatCurrency } from "app/src/utils";

type RateProps = {
  rate: number;
};

function Rate({ rate }: RateProps) {
  return (
    <div className="bg-black w-full px-4 pb-4 pt-6">
      <Text variant="small" color="gray-300">
        CAD
      </Text>
      <div className="h-2" />
      <div className="flex gap-1">
        <span>🇨🇦</span>
        <Text color="light">
          {formatCurrency({
            value: rate,
            currency: "MXN"
          })}
        </Text>
      </div>
    </div>
  );
}

export default Rate;
