declare module "lucide-react" {
  import * as React from "react";
  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
    className?: string;
  }
  export type Icon = React.FC<LucideProps>;
  export const Search: Icon;
  export const Sparkles: Icon;
  export const MessageCircle: Icon;
  export const X: Icon;
  export const SlidersHorizontal: Icon;
  export const ChevronLeft: Icon;
  export const ChevronRight: Icon;
  export const ShieldCheck: Icon;
  export const Package: Icon;
  export const Phone: Icon;
  export const MapPin: Icon;
  export const Clock: Icon;
  export const Navigation: Icon;
  export const ExternalLink: Icon;
  export const User: Icon;
  export const RefreshCw: Icon;
  export const Shield: Icon;
  export const HeartHandshake: Icon;
  export const Compass: Icon;
  export const Menu: Icon;
  export const Globe: Icon;
  export const ChevronDown: Icon;
  export const Award: Icon;
  export const Heart: Icon;
  export const Flame: Icon;
  export const CheckCircle2: Icon;
  export const Share2: Icon;
}
