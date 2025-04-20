import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const customers = [
  {
    name: "Jonathan Back",
    email: "jonathan@example.com",
    avatar: "https://i.pravatar.cc/100?u=1",
  },
  {
    name: "Sarah Stone",
    email: "sarah@example.com",
    avatar: "https://i.pravatar.cc/100?u=2",
  },
  {
    name: "Leo Marshall",
    email: "leo@example.com",
    avatar: "https://i.pravatar.cc/100?u=3",
  },
  {
    name: "Leo Marshall",
    email: "leo@example.com",
    avatar: "https://i.pravatar.cc/100?u=3",
  },
  {
    name: "Leo Marshall",
    email: "leo@example.com",
    avatar: "https://i.pravatar.cc/100?u=3",
  },
  {
    name: "Leo Marshall",
    email: "leo@example.com",
    avatar: "https://i.pravatar.cc/100?u=3",
  },
  {
    name: "Leo Marshall",
    email: "leo@example.com",
    avatar: "https://i.pravatar.cc/100?u=3",
  },
  {
    name: "Leo Marshall",
    email: "leo@example.com",
    avatar: "https://i.pravatar.cc/100?u=3",
  },
  {
    name: "Sarah Stone",
    email: "sarah@example.com",
    avatar: "https://i.pravatar.cc/100?u=2",
  },
  {
    name: "Sarah Stone",
    email: "sarah@example.com",
    avatar: "https://i.pravatar.cc/100?u=2",
  },
  {
    name: "Sarah Stone",
    email: "sarah@example.com",
    avatar: "https://i.pravatar.cc/100?u=2",
    },
  
];

export default function RecentCustomerSales() {
  return (
      <Card>
          
      <CardHeader>
        <CardTitle>Recent Customer Sales</CardTitle>
        <CardDescription>Recent Customers</CardDescription>
      </CardHeader>
    
            <div className="h-[2px] bg-muted w-full" />
        
      <CardContent className="p-4 space-y-2 overflow-y-auto h-[525px]">
        {customers.map((customer, idx) => (
          <div key={idx} className="flex items-center space-x-3">
            <Checkbox />
            <Avatar>
              <AvatarImage src={customer.avatar} />
              <AvatarFallback>{customer.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <div className="font-medium ">{customer.name}</div>
              <div className="text-sm text-muted-foreground">
                {customer.email}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
