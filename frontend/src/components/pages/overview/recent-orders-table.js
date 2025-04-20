import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import StarRating from "./StarRating";

const orders = [
  {
    id: "#14507410",
    name: "Jonathan Back",
    amount: "$145.98",
    date: "11/12/2024",
    status: "Confirmed",
    rating: 4,
  },
  {
    id: "#15741512",
    name: "Jonathan Back",
    amount: "$139.90",
    date: "11/12/2024",
    status: "Confirmed",
    rating: 5,
  },
  {
    id: "#2474210",
    name: "Jonathan Back",
    amount: "$254.00",
    date: "10/12/2024",
    status: "Confirmed",
    rating: 5,
  },
  {
    id: "#15176622",
    name: "Jonathan Back",
    amount: "$599.98",
    date: "10/12/2024",
    status: "Confirmed",
    rating: 3,
    },
  {
    id: "#15176622",
    name: "Jonathan Back",
    amount: "$599.98",
    date: "10/12/2024",
    status: "Confirmed",
    rating: 3.5,
    },
  {
    id: "#15176622",
    name: "Jonathan Back",
    amount: "$599.98",
    date: "10/12/2024",
    status: "Confirmed",
    rating: 2.5,
    },
  
];

export default function RecentOrders() {
  return (
    <Card>
      <CardHeader className="flex items-left justify-between space-x-2 p-4">
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>

      <CardContent className="overflow-x-auto p-4">
        <Table>
          <TableHeader>
            <TableRow className="text-sm text-muted-foreground color-muted-foreground">
              <TableHead></TableHead>
              <TableHead>Purchase Order</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Rating</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-sm text-muted-foreground">
            {orders.map((order, idx) => (
              <TableRow key={idx} className="border-b hover:bg-muted/50 ">
                <TableCell className="w-[50px]">
                  <Checkbox />
                </TableCell>
                <TableCell>{order.id}</TableCell>
                <TableCell className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage src={`https://i.pravatar.cc/100?u=${idx}`} />
                  </Avatar>
                  <span>{order.name}</span>
                </TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>
                  <Badge variant="success">{order.status}</Badge>
                </TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell className="w-[100px]">
                  <StarRating initialRating={order.rating} readOnly={true} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
