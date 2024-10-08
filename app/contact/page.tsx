import { ContactForm } from "./components/contactForm";

export default function Contact() {
  return (
    <div className="flex flex-col my-10 mx-6 p-2 lg:mx-20 lg:py-4 lg:px-8">
      <div className="text-5xl font-bold tracking-tighter lg:text-6xl/none mb-8 text-yellow-1000">
        Let&apos;s Talk
      </div>
      <ContactForm />
    </div>
  );
}
