"use client";
import { ModeToggle } from "@/components/ui/toggle-mode";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  "docs",
  "components",
  "icons",
  "themes",
  "pages",
  "mods",
  "github",
  "about",
];

export default function Nav() {
  return (
    <section className="py-4 px-4 md:py-6 w-full bg-white dark:bg-black shadow-md border-b-[1px] border-[#d7d7d7]">
      <div className="max-w-[1400px] flex flex-row items-center m-auto gap-4">
        <div className="flex items-center w-auto">
          <Link href="/" className="flex items-center">
            <div className="flex flex-row dark:hidden">
              <Image
                src="/Shinko_Icon_Light.svg"
                width={60}
                height={60}
                alt="Shinko Icon Light"
              />
              <Image
                className="ml-4 hidden lg:block"
                src="/Shinko_Logo_Light.svg"
                width={110}
                height={110}
                alt="Shinko Logo Light"
              />
            </div>
            <div className="hidden flex-row dark:flex">
              <Image
                src="/Shinko_Icon_Dark.svg"
                width={60}
                height={60}
                alt="Shinko Icon Dark"
              />
              <Image
                className="ml-4 hidden lg:block"
                src="/Shinko_Logo_Dark.svg"
                width={110}
                height={110}
                alt="Shinko Logo Dark"
              />
            </div>
          </Link>
        </div>

        <div className="flex-grow flex items-center justify-end md:justify-between gap-4">
          {/* Desktop nav links */}
          <div className="hidden md:flex flex-col md:flex-row items-center gap-4 lg:gap-8">
            {navLinks.map((label) => (
              <Link
                key={label}
                href="/"
                className="uppercase inter text-[0.9rem] text-[#3D3D3D] dark:text-[#B0B6BE]"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right-side controls */}
          <div className="flex items-center gap-4">
            <div className="w-full md:w-1/4">
              <ModeToggle />
            </div>

            {/* Mobile menu */}
            <div className="block md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Menu</Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="grid grid-cols-1 gap-4 p-4">
                    {navLinks.map((label) => (
                      <Link
                        key={label}
                        href="/"
                        className="uppercase inter text-[1.1rem] text-[#3D3D3D] dark:text-[#B0B6BE]"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                  <SheetFooter>{/* Optional footer controls */}</SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
