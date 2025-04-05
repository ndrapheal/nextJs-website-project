import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Welcome to Next.js</CardTitle>
            <CardDescription>Built with shadcn/ui</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is a sample card component</p>
          </CardContent>
          <CardFooter>
            <Button>Get Started</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
