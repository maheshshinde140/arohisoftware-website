"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import Footer from "../components/Footer";

function page() {
  return (
    <div className="overflow-hidden">
        <h1 className="text-center relative pt-28 text-3xl pb-10">FAQ</h1>
    <div className="flex my-12 flex-col w-3/4 mx-auto  lg:w-[500px]  text-5xl">
        
      <div className="bg-gradient-to-br from-violet-400 rounded-lg to-orange-300 p-[1px] ">
          <Accordion type="single" className="border bg-black  p-2 rounded-lg " collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">1. What products or services does your software company offer?</AccordionTrigger>
              <AccordionContent>
                We offer custom software development, off-the-shelf solutions, and consultancy services.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
      </div>
      <br/>
        <div className="bg-gradient-to-br from-violet-400 rounded-lg to-orange-300 p-[1px] ">
          <Accordion type="single" className="border bg-black  p-2 rounded-lg " collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">2. How can I request a quote or proposal for your services?</AccordionTrigger>
              <AccordionContent>
                Contact us through our website, email, or phone for a customized proposal.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
      </div>
      <br/>
        <div className="bg-gradient-to-br from-violet-400 rounded-lg to-orange-300 p-[1px] ">
          <Accordion type="single" className="border bg-black  p-2 rounded-lg " collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">3. Can you customize your software solutions to fit our specific requirements?</AccordionTrigger>
              <AccordionContent>
                Yes, we specialize in tailoring solutions to meet your unique needs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
      </div>
      <br/>
        <div className="bg-gradient-to-br from-violet-400 rounded-lg to-orange-300 p-[1px] ">
          <Accordion className="border bg-black  p-2 rounded-lg " type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">4. How do you ensure the security and privacy of our data?</AccordionTrigger>
              <AccordionContent>
                We employ industry-standard security measures and comply with data protection regulations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
     </div>
      <br/>
        <div className="bg-gradient-to-br from-violet-400 rounded-lg to-orange-300 p-[1px] ">
          <Accordion className="border bg-black  p-2 rounded-lg " type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left">5. What support and maintenance options do you offer for your software products?</AccordionTrigger>
            <AccordionContent>
              We provide comprehensive support, updates, and maintenance services.
            </AccordionContent>
          </AccordionItem>
        </Accordion></div>
    </div>
    <Footer/>
    </div>
  );
}

export default page;
