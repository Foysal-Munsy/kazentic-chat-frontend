import { useId } from "react";
import { AudioLines, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const InputIconButton = () => {
  const id = useId();

  return (
    <div className="w-full max-w-xs space-y-2">
      <div className="flex rounded-md shadow-xs">
        <div className="flex flex-1 items-center rounded-l-md border border-input px-3">
          <Search className="mr-2 h-4 w-4 text-muted-foreground" aria-hidden />
          <Input
            id={id}
            type="search"
            placeholder="Search..."
            className="w-auto flex-1 border-0 px-0 shadow-none focus-visible:border-0 focus-visible:ring-0"
          />
        </div>

        <Button variant="outline" size="icon" className="rounded-l-none">
          <AudioLines />
          <span className="sr-only">Voice</span>
        </Button>
      </div>
    </div>
  );
};

export default InputIconButton;
