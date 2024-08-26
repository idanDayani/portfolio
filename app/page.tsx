"use client";
import { Photo } from "@/components/photo";
import { MainDescription } from "@/components/mainDescription";

export default function Portfolio() {
  return (
    <div className="flex items-center ml-20 mt-32 gap-40 ">
      <MainDescription />
      <Photo />
    </div>
  );
}
