import { Snowflake, Clock, Lightbulb, Home, Zap, AlertTriangle, BarChart3, FileText, Bell } from "lucide-react";

const icons = {
  Snowflake: Snowflake,
  Clock: Clock,
  Lightbulb: Lightbulb,
  Home: Home,
  Zap: Zap,
  AlertTriangle: AlertTriangle,
  BarChart3: BarChart3,
  FileText: FileText,
  Bell: Bell,
};

interface IconRendererProps {
  iconName?: string;
}

export default function IconRenderer({ iconName }: IconRendererProps) {
  const IconComponent = icons[iconName as keyof typeof icons] || Zap;
  return <IconComponent className="h-12 w-12 mx-auto text-blue-600 mb-4" />;
}