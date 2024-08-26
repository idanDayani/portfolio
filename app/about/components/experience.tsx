import React from "react";
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase  } from "lucide-react"

export function Experience() {
  return (
    <div className="flex flex-col text-3xl mb-8">
      <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
        Experience
      </h2>
      <div className="space-y-6">
        <Card className="bg-white bg-opacity-10 border-none backdrop-blur-lg hover:bg-opacity-20 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-1">
                <div className="w-full h-full bg-indigo-900 rounded-full flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-yellow-400" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-yellow-300">YuviTal</h3>
                <p className="text-base text-indigo-200">Full-time · 5 yrs 4 mos</p>
              </div>
            </div>
            <div className="ml-20 space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-green-300">Full Stack Developer & Team Lead</h4>
                <p className="text-base text-indigo-200">Mar 2021 - Present · 3 yrs 6 mos</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-blue-300">BackEnd Developer</h4>
                <p className="text-base text-indigo-200">Jan 2020 - Feb 2021 · 1 yr 2 mos</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-purple-300">Manual QA & Technical Operations Specialist</h4>
                <p className="text-base text-indigo-200">May 2019 - Dec 2019 · 8 mos</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
