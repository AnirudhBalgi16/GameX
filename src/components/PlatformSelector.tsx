import usePlatform from "@/hooks/usePlatform";
import { Platform } from "@/hooks/usePlatform";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data } = usePlatform();

  return (
    <select
      value={selectedPlatform?.id || ""}
      onChange={(e) => {
        const selectedId = Number(e.target.value);
        const platform = data.find((p) => p.id === selectedId);
        if (platform) onSelectPlatform(platform);
      }}
      className="px-4 py-2 border rounded text-sm"
    >
      
      {data.map((platform) => (
        <option key={platform.id} value={platform.id}>
          {platform.name}
        </option>
      ))}
    </select>
  );
};

export default PlatformSelector;
