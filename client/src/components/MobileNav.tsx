import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useLocation } from "wouter";

interface MobileNavProps {
  items: Array<{ path: string; label: string }>;
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ items, open, onClose }: MobileNavProps) {
  const [location] = useLocation();

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="mt-8 flex flex-col space-y-4">
          {items.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === item.path ? "text-primary" : "text-muted-foreground"
              }`}
              onClick={onClose}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
