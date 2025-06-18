"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { accordionData } from "@/data/accordionData";
import Link from "next/link";

export default function AccordionPage() {
  return (
    <main className="p-8 sm:p-16">
      <Link
        href="/"
        className="text-sm text-blue-500 font-sans hover:underline"
      >
        &larr; Back to home
      </Link>
      <h1 className="text-4xl font-bold mt-4 mb-12 font-sans">
        Accordion Component
      </h1>

      <Accordion
        type="single"
        collapsible
        className="w-full max-w-2xl mx-auto "
      >
        {accordionData.map(({ id, title, content }) => (
          <AccordionItem
            key={id}
            value={`item-${id}`}
            className="border-t-2 border-black last-of-type:border-b-2 font-sans"
          >
            <AccordionTrigger className="text-lg font-bold font-sans cursor-pointer">
              {title}
            </AccordionTrigger>
            {content && (
              <AccordionContent className="text-base leading-relaxed font-sans space-y-4">
                <p>{content}</p>
              </AccordionContent>
            )}
          </AccordionItem>
        ))}
      </Accordion>
      <div className="flex flex-wrap justify-center items-center gap-3 pt-10">
        <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded-md">
          View Code
        </button>
        <button className="cursor-pointer bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm rounded-md">
          Download Code
        </button>
        <button className="cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 text-sm rounded-md">
          Copy Code
        </button>
        <button className="cursor-pointer bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 text-sm rounded-md">
          Setup Instructions
        </button>
      </div>
    </main>
  );
}
