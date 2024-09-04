"use client"; // Ensure this component is client-side
import EmailSendingAnimation from "./sentEmailAnimation";

export default function ContactSuccess() {
  return (
    <div className="flex flex-col mt-20 sm:mt-40">
      <EmailSendingAnimation />
    </div>
  );
}
