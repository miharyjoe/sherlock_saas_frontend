"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { SearchState } from "@/type/usernameType";

interface SearchBarProps {
  onSearchComplete: (results: SearchState) => void;
}
const API = process.env.NEXT_PUBLIC_API_URL;

export function SearchBar({ onSearchComplete }: SearchBarProps) {
  const [username, setUsername] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;

    setIsSearching(true);
    onSearchComplete({ isLoading: true, results: null, error: null });

    try {
      const response = await axios.get(
        API + `check_username/?username=${username}`
      );
      onSearchComplete({
        isLoading: false,
        results: response.data,
        error: null,
      });
    } catch (error) {
      onSearchComplete({
        isLoading: false,
        results: null,
        error: "Failed to fetch results. Please try again.",
      });
    } finally {
      setIsSearching(false);
    }
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
          disabled={isSearching}
        />
        <Button
          type="submit"
          size="lg"
          className="absolute right-1 h-10"
          disabled={isSearching}
        >
          <Search className="h-4 w-4 mr-2" />
          {isSearching ? "Searching..." : "Search"}
        </Button>
      </div>
    </form>
  );
}
