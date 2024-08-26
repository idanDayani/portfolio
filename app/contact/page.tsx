import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function Contact() {
  return (
    <div className="container px-4 md:px-6">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
        Contact Me
      </h2>
      <form className="max-w-md mx-auto space-y-4">
        <Input placeholder="Your Name" />
        <Input type="email" placeholder="Your Email" />
        <Textarea placeholder="Your Message" />
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
  );
}
