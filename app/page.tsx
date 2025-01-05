import { SearchBar } from "@/components/search-bar";
import { SiteResults } from "@/components/site-result";

import { Globe, Search, Shield } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Find Your Username Everywhere
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Search across hundreds of social networks and websites to find
              where your username is taken or available.
            </p>
          </div>

          <div className="mt-8">
            <SearchBar />
          </div>

          {/* Features */}
          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start space-x-4">
              <div className="rounded-lg bg-primary/10 p-3">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Instant Search</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Search across hundreds of platforms in seconds
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="rounded-lg bg-primary/10 p-3">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Privacy First</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Your searches are never stored or shared
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="rounded-lg bg-primary/10 p-3">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Global Coverage</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Check availability worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SiteResults />
        </div>
      </section>
    </main>
  );
}
