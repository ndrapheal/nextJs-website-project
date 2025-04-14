"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Home,
  CircleHelp,
  Bell,
  Users,
  ChartColumnBig,
  Boxes,
  ReceiptText,
  CreditCard,
  Settings,
  FileText,
  MessageCircle,
  Package2,
  Package,
  TicketPercent,
  LogOut,
} from "lucide-react";

const sidebarItems = [
  {
    title: "GENERAL",
    items: [
      { icon: <Home size={18} />, label: "Dashboard", href: "/" },
      { icon: <ChartColumnBig size={18} />, label: "Analytics", href: "/analytics" },
      { icon: <Bell size={18} />, label: "Notifications", badge: 4, href: "/notifications" },
    ],
  },
  {
    title: "CATEGORY",
    items: [
      { icon: <Users size={18} />, label: "Customers", href: "/user-management" },
      { icon: <Package2 size={18} />, label: "Products", href: "/products" },
      { icon: <Boxes size={18} />, label: "Categories", href: "/categories" },
      { icon: <Package size={18} />, label: "Inventory", href: "/inventory" },
      { icon: <ReceiptText size={18} />, label: "Orders", href: "/orders" },
      { icon: <CreditCard size={18} />, label: "Payments", href: "/payments" },
      { icon: <TicketPercent size={18} />, label: "Discounts", href: "/discount" },
      { icon: <MessageCircle size={18} />, label: "Feedback", href: "/feedback" },
    ],
  },
];

const bottomItems = [
  { icon: <Settings size={18} />, label: "Settings", href: "/settings"},
  { icon: <CircleHelp size={18} />, label: "Question", href: "/open-in-browser" },
  { icon: <LogOut size={18} />, label: "Logout", href: "/logout" },
];

export default function Sidebar() {
const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r h-screen flex flex-col justify-between px-4 py-6">
      <div>
        <div className="mb-6 text-lg font-semibold flex items-center gap-2">
          <div className="w-6 h-6 bg-black rounded-md" />
          Diep Phu Gia{" "}
          <span className="text-xs text-gray-500 ml-auto">PG</span>
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
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors
                      ${pathname === item.href 
                        ? 'bg-gray-100 text-gray-900' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className="text-xs bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>
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
