import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/sherlock.png" width={80} height={8} alt="sherlock" />
          <span className="text-lg font-semibold">Sher-look</span>
        </Link>
        <div className="flex-1" />
        <Button variant="ghost" asChild>
          <Link href="/about">About</Link>
        </Button>
      </nav>
    </header>
  );
}
