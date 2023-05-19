import { Card, Text } from "@components/ui";

function Breakdown() {
  return (
    <Card>
      <dl className="flex flex-col w-full">
        <div className="flex justify-between items-center">
          <dt className="text-gray-600 font-medium">Subtotal:</dt>
          <dd className="text-gray-900 flex flex-col items-end">
            <Text>$110.00</Text>
            <Text variant="small">MXN 2200.00</Text>
          </dd>
        </div>
        <div className="h-1" />
        <div className="flex justify-between items-center">
          <dt className="text-gray-600 font-medium">Taxes:</dt>
          <dd className="text-gray-900 ">
            <Text>$110.00</Text>
            <Text variant="small">MXN 2200.00</Text>
          </dd>
        </div>
        <div className="h-1" />
        <div className="flex justify-between items-center">
          <dt className="text-gray-600 font-medium">Tip:</dt>
          <dd className="text-gray-900 ">
            <Text>$110.00</Text>
            <Text variant="small">MXN 2200.00</Text>
          </dd>
        </div>
        <div className="h-1" />
        <div className="flex justify-between items-center">
          <dt className="text-gray-600 font-medium">Total:</dt>
          <dd className="text-gray-900 ">
            <Text>$110.00</Text>
            <Text variant="small">MXN 2200.00</Text>
          </dd>
        </div>
      </dl>
    </Card>
  );
}

export default Breakdown