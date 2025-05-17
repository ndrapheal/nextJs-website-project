"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export function CalendarDateRangePicker({ className, date, setDate }) {
  const [open, setOpen] = React.useState(false);

  // Format date range label
  const getLabel = () => {
    if (date?.from && date?.to) {
      return `${format(date.from, "LLL dd, yyyy")} - ${format(
        date.to,
        "LLL dd, yyyy"
      )}`;
    }
    if (date?.from) {
      return format(date.from, "LLL dd, yyyy");
    }
    return "Pick a date range";
  };

  const handleSelect = (range) => {
    setDate(range);
    if (range?.from && range?.to) {
      setOpen(false); // Close only when both dates are selected
    }
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn(
              "w-[260px] justify-start text-left font-normal",
              !date?.from && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {getLabel()}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="single"
            selected={date}
            defaultMonth={date?.from}
            onSelect={handleSelect}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
