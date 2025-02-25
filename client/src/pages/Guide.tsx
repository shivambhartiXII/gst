import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GST_RATES = [
  {
    rate: "5%",
    examples: "Household necessities, basic food items",
  },
  {
    rate: "12%",
    examples: "Processed food, business services",
  },
  {
    rate: "18%",
    examples: "Standard goods and services",
  },
  {
    rate: "28%",
    examples: "Luxury items, high-end products",
  },
];

export default function Guide() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 dark:from-secondary dark:to-secondary/70">
        GST Guide
      </h1>

      <Card className="border-2 border-primary/10 dark:border-secondary/10 shadow-lg transition-all duration-300 hover:shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl">Understanding GST</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground dark:text-secondary/90">
            GST (Goods and Services Tax) is a comprehensive indirect tax levied on
            the manufacture, sale, and consumption of goods and services
            throughout India.
          </p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        {GST_RATES.map((rate) => (
          <Card key={rate.rate} className="card-hover">
            <CardHeader>
              <CardTitle className="text-xl text-primary dark:text-secondary">{rate.rate} GST Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground dark:text-secondary/80">{rate.examples}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="what-is-gst" className="border-2 border-primary/10 dark:border-secondary/10 rounded-lg hover-glow">
          <AccordionTrigger className="px-4 text-lg">What is GST?</AccordionTrigger>
          <AccordionContent className="px-4 text-muted-foreground dark:text-secondary/80">
            GST is a unified tax system that replaced various indirect taxes in
            India. It simplifies the taxation process and ensures transparency
            in the system.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="cgst-sgst" className="border-2 border-primary/10 dark:border-secondary/10 rounded-lg hover-glow">
          <AccordionTrigger className="px-4 text-lg">What are CGST and SGST?</AccordionTrigger>
          <AccordionContent className="px-4 text-muted-foreground dark:text-secondary/80">
            CGST (Central GST) and SGST (State GST) are two components of GST.
            Each represents half of the total GST amount, with CGST going to
            the central government and SGST to the state government.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="when-to-charge" className="border-2 border-primary/10 dark:border-secondary/10 rounded-lg hover-glow">
          <AccordionTrigger className="px-4 text-lg">When should I charge GST?</AccordionTrigger>
          <AccordionContent className="px-4 text-muted-foreground dark:text-secondary/80">
            You should charge GST if your business has an annual turnover
            exceeding ₹20 lakhs (₹10 lakhs for special category states).
            Different goods and services have different applicable GST rates.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="input-credit" className="border-2 border-primary/10 dark:border-secondary/10 rounded-lg hover-glow">
          <AccordionTrigger className="px-4 text-lg">What is Input Tax Credit?</AccordionTrigger>
          <AccordionContent className="px-4 text-muted-foreground dark:text-secondary/80">
            Input Tax Credit (ITC) is the tax paid by a business on a purchase that can be used to reduce its tax liability on sales. It helps avoid the cascading effect of taxes.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="gst-registration" className="border-2 border-primary/10 dark:border-secondary/10 rounded-lg hover-glow">
          <AccordionTrigger className="px-4 text-lg">How to Register for GST?</AccordionTrigger>
          <AccordionContent className="px-4 text-muted-foreground dark:text-secondary/80">
            GST registration can be done online through the GST portal. You'll need documents like PAN, business registration proof, bank account details, and address proof.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="gst-returns" className="border-2 border-primary/10 dark:border-secondary/10 rounded-lg hover-glow">
          <AccordionTrigger className="px-4 text-lg">What are GST Returns?</AccordionTrigger>
          <AccordionContent className="px-4 text-muted-foreground dark:text-secondary/80">
            GST returns are periodic statements that need to be filed by registered businesses. They detail your sales, purchases, and tax liability. Common return forms include GSTR-1 and GSTR-3B.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}