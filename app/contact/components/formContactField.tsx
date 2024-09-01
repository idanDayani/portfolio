"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FieldValues } from "react-hook-form";

export function FormContactField(props: {
  form: any;
  fieldName: string;
  label: string;
  placeholder: string;
  isTextarea?: boolean;
}) {
  const { form, fieldName, label, placeholder, isTextarea } = props;
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }: { field: FieldValues }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl className="bg-primary">
            {isTextarea ? (
              <Textarea placeholder={placeholder} {...field} className="h-32" />
            ) : (
              <Input placeholder={placeholder} {...field} />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
