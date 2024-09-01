"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormContactField } from "./formContactField";

const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  subject: z.string().min(2).max(50),
  message: z.string().min(10).max(500),
});

export function ContactForm() {
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

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
