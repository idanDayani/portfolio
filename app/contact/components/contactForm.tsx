"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormContactField } from "./formContactField";
import { LoadingSpinner } from "./loadingSpinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { urls } from "@/app/common/urls";

const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  subject: z.string().min(2).max(50),
  message: z.string().min(10).max(500),
});

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

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
    setIsLoading(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          subject: values.subject,
          message: values.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );
      router.push(urls.CONTACT_SUCCESS);
    } catch (error) {
      toast.error("Error sending email, Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="sm:w-2/3 space-y-2 border py-4 px-8 rounded-xl"
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
        <Button
          className="bg-yellow-1000 text-primary hover:bg-yellow-1000 hover:animate-pulse hover:animate-rotate-right-left transition duration-300"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? <LoadingSpinner /> : "Submit"}
        </Button>
      </form>
      <ToastContainer position="bottom-right" />
    </Form>
  );
}
