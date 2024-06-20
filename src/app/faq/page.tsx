"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

function page() {
  return (
    <div>
      <h1 className="text-center relative pt-28 text-3xl pb-10">FAQ</h1>
      <div className="flex flex-col px-4 sm:px-10 md:px-20 lg:px-40 xl:px-80 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              1. What products or services does your software company offer?
            </AccordionTrigger>
            <AccordionContent>
              We offer custom software development, off-the-shelf solutions, and
              consultancy services.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <br />
        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              2. How can I request a quote or proposal for your services?
            </AccordionTrigger>
            <AccordionContent>
              Contact us through our website, email, or phone for a customized
              proposal.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <br />
        <Accordion type="single" collapsible>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              3. Can you customize your software solutions to fit our specific
              requirements?
            </AccordionTrigger>
            <AccordionContent>
              Yes, we specialize in tailoring solutions to meet your unique
              needs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <br />
        <Accordion type="single" collapsible>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              4. How do you ensure the security and privacy of our data?
            </AccordionTrigger>
            <AccordionContent>
              We employ industry-standard security measures and comply with data
              protection regulations.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <br />
        <Accordion type="single" collapsible>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              5. What support and maintenance options do you offer for your
              software products?
            </AccordionTrigger>
            <AccordionContent>
              We provide comprehensive support, updates, and maintenance
              services.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default page;
