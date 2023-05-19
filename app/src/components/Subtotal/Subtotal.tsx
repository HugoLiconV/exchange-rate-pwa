import { Card, NumberInput, Spacer, Text } from "@components/ui";

function Subtotal() {
  return (
    <Card>
      <span>💸</span>
      <Spacer size={3} />
      <div className="flex">
        <div className="flex-1 flex flex-col">
          <Text variant="small">CAD</Text>
          <div className="h-2" />
          <NumberInput
            id="subtotal"
            name="subtotal"
            className="w-full"
            mask="currency"
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

export default Subtotal;
