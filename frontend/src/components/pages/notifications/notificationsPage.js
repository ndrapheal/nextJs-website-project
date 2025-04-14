"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NOTIFICATIONS_PER_PAGE = 5;

const notifications = [
  {
    id: 1,
    title: "System maintenance",
    content: "We will have a maintenance window on April 10 at 2:00 AM.",
    createdAt: "April 4, 2025",
    status: "Unread",
  },
  {
    id: 2,
    title: "New feature released",
    content: "You can now export user data in CSV format.",
    createdAt: "April 2, 2025",
    status: "Read",
  },
  // 👉 Bạn có thể thêm thêm nhiều dữ liệu test ở đây để thử phân trang
];

export default function NotificationSection() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(notifications.length / NOTIFICATIONS_PER_PAGE);

  const paginatedNotifications = notifications.slice(
    (currentPage - 1) * NOTIFICATIONS_PER_PAGE,
    currentPage * NOTIFICATIONS_PER_PAGE
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="space-y-4">
      {/* Breadcrumb */}
      <div className="text-sm text-muted-foreground mb-2">
        Category / <span className="text-black font-medium">Notifications</span>
      </div>
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-1">Notifications</h1>
      <p className="text-sm text-muted-foreground mb-6">Manage your mail.</p>

      <div className="bg-white rounded-md shadow-sm border">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-4">Title</th>
              <th className="p-4">Content</th>
              <th className="p-4">Status</th>
              <th className="p-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {paginatedNotifications.map((notification) => (
              <tr key={notification.id} className="border-t hover:bg-gray-50">
                <td className="p-4 font-medium">{notification.title}</td>
                <td className="p-4">{notification.content}</td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 text-xs rounded ${
                      notification.status === "Unread"
                        ? "bg-red-100 text-red-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {notification.status}
                  </span>
                </td>
                <td className="p-4">{notification.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
