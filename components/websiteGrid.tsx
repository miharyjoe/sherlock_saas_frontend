"use client";

import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Websites } from "@/type/website";
import { ExternalLink, Search } from "lucide-react";
import { useState } from "react";

interface WebsiteGridProps {
  websites: Websites;
}

export function WebsiteGrid({ websites }: WebsiteGridProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredWebsites = Object.entries(websites)
    .filter(([name]) => name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort(([a], [b]) => a.localeCompare(b));

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search websites..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-8"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Website</TableHead>
              <TableHead>URL</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredWebsites.map(([name, data]) => (
              <TableRow key={name}>
                <TableCell className="font-medium">{name}</TableCell>
                <TableCell>
                  <a
                    href={data.urlMain}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:underline"
                  >
                    {new URL(data.urlMain).hostname}
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
