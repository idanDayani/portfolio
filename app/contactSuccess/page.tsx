"use client";
import EmailSendingAnimation from "./sentEmailAnimation";

export default function ContactSuccess() {
  return (
    <div className="flex flex-col items-center mt-20 sm:mt-40">
      <EmailSendingAnimation />
    </div>
  );
}
