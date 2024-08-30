import { DescCard } from "./descCard";

export function DescCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <DescCard
        title="Save and Edit Portfolio"
        description="Easily search for any stock, save and edit investment portfolio, keeping
  track stocks and holdings."
      />
      <DescCard
        title="View Latest Stock Quotes"
        description="Watch the latest stock quotes on each individual stock page, helping make informed investment decisions."
      />
      <DescCard
        title="Monitor Stock Changes Over Time"
        description="Track the performance of stocks with live. Analyze historical trends and market movements to gain insights into your investments, making data-driven decisions with confidence."
      />
    </div>
  );
}
