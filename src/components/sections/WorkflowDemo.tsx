"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const exampleInput =
  "Need a Level 2 EV charger installed in my garage. Panel is in the basement. Located in Calgary. I can send panel photos.";

const exampleOutput = [
  { label: "Service", value: "EV Charger Installation" },
  { label: "Location", value: "Calgary" },
  { label: "Urgency", value: "Planning Ahead" },
  { label: "Property", value: "Residential" },
  { label: "Photos Needed", value: "Panel, garage wall, charger location, utility meter" },
  { label: "Follow-Up", value: "Request panel photos + install timeline" },
  { label: "Priority", value: "Medium" },
];

export default function WorkflowDemo() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-4">
            <Badge
              variant="outline"
              className="border-accent-blue/30 text-accent-blue bg-accent-blue/5 text-xs tracking-wider uppercase"
            >
              Demo workflow preview
            </Badge>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-2">
            From Request to Structured Summary
          </h2>
          <p className="text-sm text-muted-foreground text-center mb-8 max-w-lg mx-auto">
            An example of how raw input is organized into a clear contractor
            workflow summary. This is a demo — not live AI processing.
          </p>

          <Card className="border border-border bg-surface overflow-hidden">
            <CardContent className="p-0">
              {/* Input Section */}
              <div className="p-5 bg-background/50 border-b border-border">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Input
                </p>
                <p className="text-sm text-foreground leading-relaxed">
                  &ldquo;{exampleInput}&rdquo;
                </p>
              </div>

              {/* Output Section */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-4">
                  <ArrowRight className="size-4 text-brand-green" />
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Structured Output
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {exampleOutput.map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col gap-0.5 p-3 rounded-lg bg-background/50 border border-border"
                    >
                      <span className="text-xs text-muted-foreground">
                        {item.label}
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
