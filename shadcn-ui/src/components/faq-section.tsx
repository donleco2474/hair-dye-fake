import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our premium hair dye products
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left font-medium">
              How long does the color last?
            </AccordionTrigger>
            <AccordionContent>
              Our premium hair dye treatment typically lasts between 4-6 weeks with proper care. 
              Using sulfate-free shampoo and washing with cool water helps maintain the color's vibrancy.
              Regular touch-ups every 4-6 weeks will keep your color looking fresh and vibrant.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left font-medium">
              Is the product safe for sensitive scalps?
            </AccordionTrigger>
            <AccordionContent>
              Yes! Our formula is specially designed for sensitive scalps. It contains no ammonia, 
              which is typically the chemical that causes irritation in traditional hair dyes. 
              Our natural ingredients provide nourishment while delivering vibrant color. 
              However, we always recommend a patch test 48 hours before application.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left font-medium">
              Can I use it on previously colored hair?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely! Our hair dye works well on previously colored hair. For best results, 
              we recommend waiting at least 2 weeks after your last chemical treatment. 
              The natural ingredients in our formula help repair damage from previous coloring 
              while providing rich, even color coverage.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left font-medium">
              Is your hair dye tested on animals?
            </AccordionTrigger>
            <AccordionContent>
              No, we are proudly cruelty-free! We do not test our products on animals, 
              and we work only with suppliers who share this commitment. Our ingredients 
              are ethically sourced and our manufacturing process is environmentally responsible.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left font-medium">
              How do I apply the product correctly?
            </AccordionTrigger>
            <AccordionContent>
              Application is simple! First, perform a patch test 48 hours before use. 
              Then, mix the color activator with the color cream according to the instructions. 
              Apply to dry hair using the provided applicator, starting at the roots. 
              Leave on for 30 minutes, then rinse thoroughly until the water runs clear. 
              For detailed instructions, please refer to the package insert or our "How It Works" section.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-left font-medium">
              Do you offer a satisfaction guarantee?
            </AccordionTrigger>
            <AccordionContent>
              Yes! We offer a 100% satisfaction guarantee. If you're not completely satisfied with your 
              results, please contact our customer service team within 14 days of purchase with your 
              order number and a description of the issue. We'll work with you to find a solution, 
              whether that's a replacement product or a refund.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}