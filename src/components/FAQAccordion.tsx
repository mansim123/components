// components/FAQAccordion.tsx
'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { accordionData } from '@/data/accordionData'

export default function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {accordionData.map(({ id, title, content }) => (
        <AccordionItem
          key={id}
          value={`item-${id}`}
          className="border-t border-black last-of-type:border-b"
        >
          <AccordionTrigger className="font-bold text-lg">
            {title}
          </AccordionTrigger>
          {content && (
            <AccordionContent className="text-base leading-relaxed">
              {content}
            </AccordionContent>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  )
}
