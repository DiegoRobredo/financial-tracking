import ProfitLoss from "@/app/components/profit_loss/content";
import { View } from "@/app/components/core/types";

export default function Content({ view }: { view: View }) {
  if (view === "profit_loss") return <ProfitLoss />;

  if (view === "budget") return <div className="grow-1 w-full p-4">Budget</div>;

  if (view === "mortgage")
    return <div className="grow-1 w-full p-4">Mortgage</div>;

  if (view === "investment")
    return <div className="grow-1 w-full p-4">Investment</div>;
}
