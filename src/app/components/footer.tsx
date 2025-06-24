"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="py-6 px-6 md:py-12 w-full dark:bg-[#000000] bg-[#F9F9FA] border-t border-[#AEAEAE] shadow-md">
      <div className="max-w-7xl w-full grid grid-cols-2 lg:grid-cols-5 gap-[4rem] lg:gap-6 m-auto items-start lg:justify-items-center">
        {/* Column 1: Logo and description */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="text-xl font-bold">
            <Image
              className="hidden dark:block"
              src="/Shinko_Footer_Logo_Dark.svg"
              width={160}
              height={160}
              alt="Shinko Logo Dark"
            />
            <Image
              className="block dark:hidden"
              src="/Shinko_Footer_Logo_Light.svg"
              width={160}
              height={160}
              alt="Shinko Logo Light"
            />
          </Link>
          <p className="poppins">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          <Link href="#" className="poppins underline">
            Hello@shinkonymae.com
          </Link>
        </div>

        {/* Column 2: Services */}
        <FooterColumn title="Services" items={["Icons", "Components", "Modules", "Mockups", "Templates", "Wallpapers", "Blog"]} />

        {/* Column 3: Shinko Lab */}
        <FooterColumn title="Shinko Lab" items={["About", "Privacy Policy", "Terms of Service", "Book a Call"]} />

        {/* Column 4: Community */}
        <FooterColumn title="Community" items={["Work", "Dribble", "Behance", "Medium"]} />

        {/* Column 5: Services */}
        <FooterColumn title="Services" items={["Shinko Nyame Studio", "Web Design", "Web Development", "Branding", "SEO"]} />
      </div>

      <div className="max-w-7xl m-auto mt-12 text-left flex justify-between flex-col lg:flex-row">
        <p className="text-[#7A7A7A] text-[1rem]">
          All Icons and Digital Content copyright © Shinkō Nyame Studio 2025.
          Website build by Shinkō Nyame Studio.
        </p>
        <div className="flex gap-4 mt-6 md:mt-0 dark:hidden">
          <Image src="/instagram.svg" width={25} height={25} alt="Instagram" />
          <Image src="/facebook.svg" width={25} height={25} alt="Facebook" />
          <Image src="/x.svg" width={25} height={25} alt="Twitter/X" />
        </div>
        <div className="hidden gap-4 mt-6 md:mt-0 dark:flex">
          <Image src="/instagram_dark.svg" width={25} height={25} alt="Instagram (dark)" />
          <Image src="/facebook_dark.svg" width={25} height={25} alt="Facebook (dark)" />
          <Image src="/x_dark.svg" width={25} height={25} alt="Twitter/X (dark)" />
        </div>
      </div>
    </section>
  );
}

// Extracted reusable column component
function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-4 text-left">
      <h2 className="font-bold poppins text-[1.1rem]">{title}</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item}>
            <Link href="#" className="poppins">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
