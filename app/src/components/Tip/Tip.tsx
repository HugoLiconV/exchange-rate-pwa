import { Card, Spacer, Text } from "@components/ui";
import { TipSelector } from "./components";

function Tip() {
  return (
    <Card>
      <span>💁‍♂️</span>
      <Spacer size={3} />
      <Text variant="small">Tip</Text>
      <Spacer size={2} />
      <TipSelector />
      <Spacer size={2} />
      <Text>$00.00</Text>
      <div className="h-0.5" />
      <Text variant="small">$00.00</Text>
    </Card>
  );
}

export default Tip;