"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

export function SearchBar() {
  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Searching for:", username);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl">
      <div className="relative flex items-center">
        <Input
          type="text"
          placeholder="Enter a username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="h-12 flex-1 rounded-lg pl-4 pr-20 text-base"
        />
        <Button type="submit" size="lg" className="absolute right-1 h-10">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
    </form>
  );
}
