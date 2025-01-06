"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { UsernameResults } from "@/type/usernameType";

import { ExternalLink, Globe } from "lucide-react";

interface SiteResultsProps {
  isLoading: boolean;
  results: UsernameResults | null;
  error: string | null;
  searchedUsername?: string;
}

export function SiteResults({
  isLoading,
  results,
  error,
  searchedUsername,
}: SiteResultsProps) {
  if (error) {
    return (
      <div className="text-center text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <div className="mb-8 text-center">
          <Skeleton className="h-8 w-64 mx-auto" />
          <Skeleton className="h-4 w-48 mx-auto mt-2" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-8 w-8 rounded ml-auto" />
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-5 w-20" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (!results) {
    return null;
  }

  const sites = Object.entries(results);

  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Results for &quot;{searchedUsername}&quot;
        </h2>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Found results across {sites.length} platforms
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sites.map(([site, url]) => (
          <Card key={site}>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="flex-1 text-base font-medium">
                {site}
              </CardTitle>
              <Globe className="h-8 w-8 mx-3" />
              {/* <Image
                alt={`${site} icon`}
                className="h-8 w-8 rounded"
                src={`/vercel.saas`}
                width={8}
                height={8}
              /> */}
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 hover:text-blue-700 flex items-center gap-1"
                >
                  Visit Profile
                  <ExternalLink className="h-3 w-3" />
                </a>
                <Badge variant="default">Found</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
