import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { ChartTooltip, ChartTooltipContent, ChartContainer } from "@/components/ui/chart";
import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const data = [
  { name: "Jan", customers: 54000, sales: 86000 },
  { name: "Feb", customers: 42000, sales: 67000 },
  { name: "Mar", customers: 64000, sales: 89120 },
  { name: "Apr", customers: 60000, sales: 75000 },
  { name: "May", customers: 78000, sales: 94000 },
  { name: "Jun", customers: 51000, sales: 68000 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
}

export default function InsightsOverview() {
  return (
    <ChartContainer config={chartConfig}>
      <Card>
        <CardHeader>
          <CardTitle>Insights Overview</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent className="h-[525px] p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis
                dataKey="name"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              {/* trục hoành */}
              <YAxis tickLine={false} tickMargin={10} axisLine={false} />
              {/* trục tung */}
              <ChartTooltip
                content={<ChartTooltipContent hideIndicator hideLabel />}
                cursor={false}
                defaultIndex={1}
              />
              <Bar radius={4} dataKey="customers" fill="#fda4af" />
              <Bar radius={4} dataKey="sales" fill="#fb7185" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </ChartContainer>
  );
}
