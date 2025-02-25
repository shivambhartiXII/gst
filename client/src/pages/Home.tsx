import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center min-h-[80vh] justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent dark:from-secondary/5 dark:to-transparent -z-10" />

      <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 dark:from-secondary dark:to-secondary/70 mb-6 hover-lift">
        Simple GST Calculator
        <br />
        <span className="text-gradient-animate dark:text-white/90">for India</span>
      </h1>

      <p className="mt-4 text-xl text-foreground dark:text-white max-w-[600px] md:text-2xl leading-relaxed">
        Calculate GST instantly with our easy-to-use calculator. Generate professional invoices and learn about GST rates.
      </p>

      <div className="mt-12">
        <Button 
          asChild 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg button-glow dark:bg-secondary dark:hover:bg-secondary/90 dark:text-black transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <a href="/calculator">
            Start Calculating
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        <div className="group p-8 bg-primary/5 dark:bg-secondary/5 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-secondary/20 border-2 border-transparent hover:border-primary/20 dark:hover:border-secondary/20">
          <h3 className="text-2xl font-semibold mb-3 text-primary dark:text-white group-hover:transform group-hover:translate-y-[-2px] transition-all duration-300">
            Easy Calculation
          </h3>
          <p className="text-foreground dark:text-white group-hover:translate-y-1 transition-transform duration-300">
            Simple and intuitive interface for quick GST calculations
          </p>
        </div>

        <div className="group p-8 bg-primary/5 dark:bg-secondary/5 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-secondary/20 border-2 border-transparent hover:border-primary/20 dark:hover:border-secondary/20">
          <h3 className="text-2xl font-semibold mb-3 text-primary dark:text-white group-hover:transform group-hover:translate-y-[-2px] transition-all duration-300">
            Invoice Generator
          </h3>
          <p className="text-foreground dark:text-white group-hover:translate-y-1 transition-transform duration-300">
            Create and download professional GST invoices instantly
          </p>
        </div>

        <div className="group p-8 bg-primary/5 dark:bg-secondary/5 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-secondary/20 border-2 border-transparent hover:border-primary/20 dark:hover:border-secondary/20">
          <h3 className="text-2xl font-semibold mb-3 text-primary dark:text-white group-hover:transform group-hover:translate-y-[-2px] transition-all duration-300">
            GST Guide
          </h3>
          <p className="text-foreground dark:text-white group-hover:translate-y-1 transition-transform duration-300">
            Comprehensive guide to understand GST rates and rules
          </p>
        </div>
      </div>

      {/* New Features Preview */}
      <div className="mt-16 w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-primary dark:text-white">Coming Soon</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-primary/5 dark:bg-secondary/5 rounded-lg border-2 border-primary/10 dark:border-secondary/10">
            <h3 className="text-xl font-semibold mb-2 text-primary dark:text-white">Export History</h3>
            <p className="text-foreground dark:text-white">Track and export your calculation history with detailed analytics</p>
          </div>
          <div className="p-6 bg-primary/5 dark:bg-secondary/5 rounded-lg border-2 border-primary/10 dark:border-secondary/10">
            <h3 className="text-xl font-semibold mb-2 text-primary dark:text-white">Interactive Tutorial</h3>
            <p className="text-foreground dark:text-white">Step-by-step guide for new users to get started quickly</p>
          </div>
        </div>
      </div>
    </div>
  );
}