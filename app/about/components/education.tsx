import { Card, CardContent } from "@/components/ui/card";
import { EducationDesc } from "./educationDesc";

export function Education() {
  return (
    <div className="flex flex-col text-3xl">
      <h2 className="text-4xl font-extrabold mb-6 text-green-600">Education</h2>
      <div className="space-y-6">
        <Card className="bg-white bg-opacity-10 backdrop-blur-lg hover:bg-opacity-20 transition-all duration-300">
          <CardContent className="p-6">
            <EducationDesc />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
