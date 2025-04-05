
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scrollarea";
import {
  Home,
  Palette,
  Database,
  Share2,
  Clock,
  Bell,
  Users,
  Lock,
  KeyRound,
  CreditCard,
  Upload,
  Download,
  Settings,
  FileText,
  ExternalLink,
} from "lucide-react";

const sidebarItems = [
  {
    title: "GENERAL",
    items: [
      { icon: <Home size={18} />, label: "Dashboard" },
      { icon: <Palette size={18} />, label: "Appearance" },
      { icon: <Database size={18} />, label: "Database" },
      { icon: <Share2 size={18} />, label: "Connections" },
      { icon: <Clock size={18} />, label: "Timezones" },
      { icon: <Bell size={18} />, label: "Notifications", badge: 4 },
    ],
  },
  {
    title: "SISYPHUS VENTURES",
    items: [
      { icon: <Users size={18} />, label: "User management" },
      { icon: <Lock size={18} />, label: "Security & access" },
      { icon: <KeyRound size={18} />, label: "Authentication" },
      { icon: <CreditCard size={18} />, label: "Payments" },
      { icon: <Upload size={18} />, label: "Import data" },
      { icon: <Download size={18} />, label: "Export data" },
    ],
  },
];

const bottomItems = [
  { icon: <Settings size={18} />, label: "Settings" },
  { icon: <FileText size={18} />, label: "Documentation" },
  { icon: <ExternalLink size={18} />, label: "Open in browser" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r h-screen flex flex-col justify-between px-4 py-6">
      <div>
        <div className="mb-6 text-lg font-semibold flex items-center gap-2">
          <div className="w-6 h-6 bg-black rounded-md" />
          Untitled UI{" "}
          <span className="text-xs text-gray-500 ml-auto">v4.0</span>
        </div>

        {sidebarItems.map((section, idx) => (
          <div key={idx} className="mb-6">
            <h4 className="text-xs text-gray-500 mb-2 font-medium tracking-wide">
              {section.title}
            </h4>
            <ul className="space-y-1">
              {section.items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between px-2 py-2 rounded-lg hover:bg-gray-100 text-sm text-gray-700 cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    {item.label}
                  </div>
                  {item.badge && (
                    <span className="text-xs bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        {bottomItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-gray-100 text-sm text-gray-700 cursor-pointer"
          >
            {item.icon}
            {item.label}
          </div>
        ))}
      </div>
    </aside>
  );
}
