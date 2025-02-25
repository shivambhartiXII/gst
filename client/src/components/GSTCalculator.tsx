import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const GST_RATES = [
  { value: "5", label: "5%" },
  { value: "12", label: "12%" },
  { value: "18", label: "18%" },
  { value: "28", label: "28%" },
];

export default function GSTCalculator() {
  const [mode, setMode] = useState("add");
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("18");

  const calculate = () => {
    const baseAmount = parseFloat(amount) || 0;
    const gstRate = parseFloat(rate) / 100;

    if (mode === "add") {
      const gstAmount = baseAmount * gstRate;
      const finalAmount = baseAmount + gstAmount;
      return {
        base: baseAmount,
        cgst: gstAmount / 2,
        sgst: gstAmount / 2,
        total: finalAmount,
      };
    } else {
      const baseAmount = (parseFloat(amount) || 0) / (1 + gstRate);
      const gstAmount = baseAmount * gstRate;
      return {
        base: baseAmount,
        cgst: gstAmount / 2,
        sgst: gstAmount / 2,
        total: parseFloat(amount) || 0,
      };
    }
  };

  const result = calculate();

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>GST Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={mode} onValueChange={setMode}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="add">Add GST</TabsTrigger>
            <TabsTrigger value="remove">Remove GST</TabsTrigger>
          </TabsList>

          <TabsContent value="add" className="space-y-4">
            <div className="space-y-2">
              <Label>Base Amount</Label>
              <Input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
              />
            </div>
          </TabsContent>

          <TabsContent value="remove" className="space-y-4">
            <div className="space-y-2">
              <Label>Final Amount (Inc. GST)</Label>
              <Input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
              />
            </div>
          </TabsContent>

          <div className="mt-4 space-y-2">
            <Label>GST Rate</Label>
            <Select value={rate} onValueChange={setRate}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {GST_RATES.map((rate) => (
                  <SelectItem key={rate.value} value={rate.value}>
                    {rate.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="mt-6 space-y-2">
            <div className="flex justify-between">
              <span>Base Amount:</span>
              <span>₹{result.base.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>CGST ({parseFloat(rate)/2}%):</span>
              <span>₹{result.cgst.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>SGST ({parseFloat(rate)/2}%):</span>
              <span>₹{result.sgst.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total Amount:</span>
              <span>₹{result.total.toFixed(2)}</span>
            </div>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
}
