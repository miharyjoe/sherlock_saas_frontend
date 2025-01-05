"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import Image from "next/image";

// Sample data - in a real app, this would come from your API
const sampleResults = [
  {
    site: "Twitter",
    available: false,
    url: "twitter.com/johndoe",
    icon: "/placeholder.svg?height=32&width=32",
  },
  {
    site: "Instagram",
    available: true,
    url: "instagram.com/johndoe",
    icon: "/placeholder.svg?height=32&width=32",
  },
  {
    site: "GitHub",
    available: false,
    url: "github.com/johndoe",
    icon: "/placeholder.svg?height=32&width=32",
  },
  {
    site: "LinkedIn",
    available: true,
    url: "linkedin.com/in/johndoe",
    icon: "/placeholder.svg?height=32&width=32",
  },
  {
    site: "Facebook",
    available: false,
    url: "facebook.com/johndoe",
    icon: "/placeholder.svg?height=32&width=32",
  },
  {
    site: "YouTube",
    available: true,
    url: "youtube.com/@johndoe",
    icon: "/placeholder.svg?height=32&width=32",
  },
];

export function SiteResults() {
  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Results for &quot;johndoe&quot;
        </h2>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Found results across {sampleResults.length} platforms
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sampleResults.map((result) => (
          <Card key={result.site}>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="flex-1 text-base font-medium">
                {result.site}
              </CardTitle>
              <Image
                alt={`${result.site} icon`}
                className="h-8 w-8 rounded"
                src={result.icon}
                width={8}
                height={8}
              />
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {result.url}
                </p>
                <Badge variant={result.available ? "default" : "destructive"}>
                  {result.available ? (
                    <Check className="mr-1 h-3 w-3" />
                  ) : (
                    <X className="mr-1 h-3 w-3" />
                  )}
                  {result.available ? "Available" : "Taken"}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
