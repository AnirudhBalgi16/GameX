interface Props {
  onselectOrder: (sortOrder: string) => void;
  currentSort: string;
}

const SortSelector = ({ onselectOrder, currentSort }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "rating", label: "Average Rating" },
  ];

  return (
    <select
      value={currentSort}
      onChange={(e) => onselectOrder(e.target.value)}
      className="px-4 py-2 border rounded text-sm"
    >
      {sortOrders.map((order) => (
        <option key={order.value} value={order.value}>
          {order.label}
        </option>
      ))}
    </select>
  );
};

export default SortSelector;
