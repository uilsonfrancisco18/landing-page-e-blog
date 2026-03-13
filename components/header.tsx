"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";


export const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          <Link href="/" className="text-white">
            Logo
          </Link>

          <nav className="flex items-center gap-6">
          <Link href="/"className={pathname === "/" ? "text-white font-bold" : "text-blue-500"}
      >
               Início
          </Link>

         <Link href="/blog"  className={pathname === "/blog" ? "text-white font-bold" : "text-blue-500"}>
          Blog
         </Link>
           
            <Button asChild variant="outline" className="bg-white text-black">
              <Link href="/comecar">
                Começar
              </Link>
            </Button>
           
          </nav>

        </div>
      </div>
    </header>
  );
};