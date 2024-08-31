"use client";
import { Photo } from "@/components/photo";
import { MainDescription } from "@/components/mainDescription";

export default function Portfolio() {
  return (
    <div className="flex items-center justify-between m-20 p-8">
      <MainDescription />
      <Photo />
    </div>
  );
}
