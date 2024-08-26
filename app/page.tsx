"use client";
import { Photo } from "@/components/photo";
import { MainDescription } from "@/components/mainDescription";

export default function Portfolio() {
  return (
    <div className="flex items-center justify-around py-12 md:py-24">
      <MainDescription />
      <Photo />
    </div>
  );
}
