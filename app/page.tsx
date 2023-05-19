import { Breakdown, Subtotal, Taxes, Tip } from "@components";
import { Button } from "@ui";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full items-center justify-between px-4 pt-6">
        <Subtotal />
        <div className="h-4" />
        <Taxes />
        <div className="h-4" />
        <Tip />
        <div className="h-4" />
        <Breakdown />
        <div className="h-4" />
        <Button>Total $00.00 CAD</Button>
      </div>
    </main>
  );
}
