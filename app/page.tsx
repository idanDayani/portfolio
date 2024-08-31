"use client";
import { Photo } from "@/components/photo";
import { MainDescription } from "@/components/mainDescription";

export default function Portfolio() {
  return (
    <div className="flex flex-col my-10 mx-6 items-center justify-between lg:flex-row sm:my-20 sm:mx-20 sm:p-2 lg:p-8">
      <MainDescription />
      <Photo />
    </div>
  );
}
