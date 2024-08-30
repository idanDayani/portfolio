import { Card, CardContent } from "@/components/ui/card";
import { CompanyDesc } from "./companyDesc";
import { PositionsDesc } from "./positionsDesc";

export function Experience() {
  return (
    <div className="flex flex-col text-3xl mb-8">
      <h2 className="text-4xl font-extrabold mb-6 text-transparent text-yellow-300">
        Experience
      </h2>
      <div className="space-y-6">
        <Card className="bg-white bg-opacity-10 backdrop-blur-lg hover:bg-opacity-20 transition-all duration-300">
          <CardContent className="p-6">
            <CompanyDesc />
            <PositionsDesc />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
