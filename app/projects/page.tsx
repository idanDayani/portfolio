import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

export default function Projects() {
  return (
    <div className="container px-4 md:px-6">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
        My Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Project 1</CardTitle>
            <CardDescription>A brief description of Project 1</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Details about Project 1 and the technologies used.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Project 2</CardTitle>
            <CardDescription>A brief description of Project 2</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Details about Project 2 and the technologies used.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Project 3</CardTitle>
            <CardDescription>A brief description of Project 3</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Details about Project 3 and the technologies used.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
