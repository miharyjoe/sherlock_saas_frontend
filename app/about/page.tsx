import { WebsiteGrid } from "@/components/websiteGrid";
import React from "react";
import websites from "@/data/data.json";

function page() {
  return (
    <main className="min-h-screen">
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-muted/50 bg-[size:14px_24px]" />
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Supported Websites
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              We support username searches across {Object.keys(websites).length}{" "}
              different platforms and websites.
            </p>
          </div>

          <WebsiteGrid websites={websites} />
        </div>
      </section>
    </main>
  );
}

export default page;
