import { useState } from "react";

// UI components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MoreVertical } from "lucide-react";

// dữ liệu người dùng mẫu

const users = [
  {
    name: "Florence Shaw",
    email: "florence@untitledui.com",
    avatar: "/avatars/florence.jpg",
    access: ["Admin", "Data Export", "Data Import"],
    lastActive: "Mar 4, 2024",
    dateAdded: "July 4, 2022",
  },
  {
    name: "Amélie Laurent",
    email: "amelie@untitledui.com",
    avatar: "/avatars/amelie.jpg",
    access: ["Admin", "Data Export", "Data Import"],
    lastActive: "Mar 4, 2024",
    dateAdded: "July 4, 2022",
  },
  {
    name: "Ammar Foley",
    email: "ammar@untitledui.com",
    avatar: "/avatars/ammar.jpg",
    access: ["Data Export", "Data Import"],
    lastActive: "Mar 2, 2024",
    dateAdded: "July 4, 2022",
  },
  // Add more users as needed
];

const badgeColor = {
  Admin: "bg-green-100 text-green-800",
  "Data Export": "bg-blue-100 text-blue-800",
  "Data Import": "bg-purple-100 text-purple-800",
};

export default function UserManagement() {
  // thanh pagination
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5; // số lượng người dùng trên mỗi trang

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-muted-foreground mb-2">
        Sisyphus Ventures /{" "}
        <span className="text-black font-medium">User management</span>
      </div>

      {/* Heading */}
      <h1 className="text-2xl font-bold mb-1">User management</h1>
      <p className="text-sm text-muted-foreground mb-6">
        Manage your team members and their account permissions here.
      </p>

      {/* Search, Filter, Add */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div className="flex gap-2 w-full max-w-md">
          <Input placeholder="Search" className="w-full" />
          <Button variant="outline">Filters</Button>
        </div>
        <Button className="bg-black text-white hover:bg-gray-800">
          + Add user
        </Button>
      </div>

      {/* Table */}
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-medium">
                <input type="checkbox" />
              </th>
              <th className="px-4 py-3 font-medium">User name</th>
              <th className="px-4 py-3 font-medium">Access</th>
              <th className="px-4 py-3 font-medium">Last active</th>
              <th className="px-4 py-3 font-medium">Date added</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-3 flex items-center gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-black">{user.name}</div>
                    <div className="text-muted-foreground text-xs">
                      {user.email}
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-1">
                    {user.access.map((role, i) => (
                      <Badge
                        key={i}
                        className={`text-xs font-medium ${badgeColor[role]} rounded-full px-2 py-0.5`}
                      >
                        {role}
                      </Badge>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3">{user.lastActive}</td>
                <td className="px-4 py-3">{user.dateAdded}</td>
                <td className="px-4 py-3 text-right">
                  <MoreVertical className="h-4 w-4 text-muted-foreground cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <Button
          variant="outline"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span className="text-sm text-muted-foreground">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          variant="outline"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
