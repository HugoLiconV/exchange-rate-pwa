import { Card, NumberInput, Spacer, Text } from "@components/ui";

function Taxes() {
  return (
    <Card>
      <span>🧾</span>
      <Spacer size={3} />
      <div className="flex">
        <div className="flex-1">
          <Text variant="small">Taxes</Text>
          <div className="h-2" />
          <NumberInput
            id="taxes"
            name="taxes"
            className="w-full"
            mask="percent"
          />
        </div>
        <div className="w-4" />
        <div className="border-r"></div>
        <div className="w-4" />
        <div className="flex-1">
          <Text variant="small">MXN</Text>
          <div className="h-2" />
          <Text>$644.20</Text>
        </div>
      </div>
    </Card>
  );
}

export default Taxes