import { View, Menu } from "@/app/components/core/types";

const menus: Menu[] = [
  {
    name: "Profit & loss",
    view: "profit_loss"
  },
  {
    name: "Budget",
    view: "budget"
  },
  {
    name: "Mortgage",
    view: "mortgage"
  },
  {
    name: "Investment",
    view: "investment"
  }
];

export default function Sidebar({
  setView
}: {
  readonly setView: (view: View) => void;
}) {
  return (
    <aside className="h-full w-[300px] p-4 shadow-md bg-blue-300">
      <h2 className="text-xl mb-2">Menu</h2>
      <ul className="[&>li]:mb-1">
        {menus.map(({ name, view }) => (
          <li key={view}>
            <button onClick={() => setView(view)}>{name}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
