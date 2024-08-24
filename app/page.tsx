"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Photo } from "@/components/photo";
import { Header } from "@/components/header";
// import { Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  const name = "Idan Dayani";

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24">
          <div>
            <div className="flex flex-col items-center">
              <Photo />
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  {name}
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Full Stack developer & Team Leader
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
              I`m a passionate web developer with experience in creating
              responsive and user-friendly websites. My expertise includes
              React, Next.js, and modern CSS frameworks.
            </p>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              My Projects
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Project 1</CardTitle>
                  <CardDescription>
                    A brief description of Project 1
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Details about Project 1 and the technologies used.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Project 2</CardTitle>
                  <CardDescription>
                    A brief description of Project 2
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Details about Project 2 and the technologies used.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Project 3</CardTitle>
                  <CardDescription>
                    A brief description of Project 3
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Details about Project 3 and the technologies used.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Contact Me
            </h2>
            <form className="max-w-md mx-auto space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Textarea placeholder="Your Message" />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2023 {name}. All rights reserved.
        </p>
        {/* <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            <span className="sr-only">GitHub</span>
            <Github className="h-4 w-4" />
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            <span className="sr-only">Email</span>
            <Mail className="h-4 w-4" />
          </Link>
        </nav> */}
      </footer>
    </div>
  );
}
