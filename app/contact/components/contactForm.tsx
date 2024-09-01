"use client";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormContactField } from "./formContactField";
import { LoadingSpinner } from "./loadingSpinner";

const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  subject: z.string().min(2).max(50),
  message: z.string().min(10).max(500),
});

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    setIsLoading(true);
    try {
      await emailjs.send(
        "service_tiyen9e",
        "template_wwo839j",
        {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          subject: values.subject,
          message: values.message,
        },
        "VXypsAxXtAewMOGKvI"
      );
    } catch (error) {
      alert("There was an error sending your message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-2/3 space-y-4 border p-8 rounded-xl"
      >
        <FormContactField
          form={form}
          fieldName="firstName"
          label="First Name"
          placeholder="Steven"
        />
        <FormContactField
          form={form}
          fieldName="lastName"
          label="Last Name"
          placeholder="Brown"
        />
        <FormContactField
          form={form}
          fieldName="email"
          label="Email Address"
          placeholder="steven.b@gmail.com"
        />
        <FormContactField
          form={form}
          fieldName="subject"
          label="Subject"
          placeholder="Type your subject here"
        />
        <FormContactField
          form={form}
          fieldName="message"
          label="Message"
          placeholder="Type your message here"
          isTextarea
        />
        <div className="mt-10" />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? <LoadingSpinner /> : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
