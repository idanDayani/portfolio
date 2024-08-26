import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <div className="flex flex-col text-3xl">
      <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
        Education
      </h2>
      <div className="space-y-6">
        <Card className="bg-white bg-opacity-10 border-none backdrop-blur-lg hover:bg-opacity-20 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-400 to-cyan-500 rounded-full p-1">
                <div className="w-full h-full bg-indigo-900 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-green-400" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-green-300">
                  Holon Institute of Technology
                </h3>
                <p className="text-lg font-semibold text-indigo-200">
                  Computer Science, Computer Science
                </p>
                <p className="text-base text-indigo-200">2017 - 2020</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
