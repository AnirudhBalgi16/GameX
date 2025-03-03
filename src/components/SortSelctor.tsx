import { Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";

interface Props {
  onselectOrder: (sortOrder: string) => void;
  currentSort: string;
}

const SortSelector = ({ onselectOrder,currentSort }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "rating", label: "Average Rating" },
  ];
  const currentSortLabel = sortOrders.find(order => order.value === currentSort);

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          Order by: {currentSortLabel?.label||"Relevance"}
        </Button>
      </MenuTrigger>
      <MenuContent>
        {sortOrders.map((order) => (
          <MenuItem key={order.value} value={order.value} onClick={() => onselectOrder(order.value)}>
            {order.label} 
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
