import {
  Globe,
  BackpackIcon,
  Briefcase,
  Cpu,
  Film,
  Database,
  Smartphone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const serviceIconMap: Record<string, LucideIcon> = {
  web: Globe,
  ecommerce: BackpackIcon,
  Api: Briefcase,
  devops: Cpu,
  video: Film,
  database: Database,
  mobile: Smartphone,
};
