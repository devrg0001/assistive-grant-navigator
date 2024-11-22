import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { grants, Grant } from "@/data/grants";
import { ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface LocationState {
  filteredGrants?: Grant[];
  location?: string;
  category?: string;
}

const GrantsList = () => {
  const location = useLocation();
  const state = location.state as LocationState;
  const grantsToDisplay = state?.filteredGrants || grants;
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <div className="container mx-auto">
        <div className="mb-6 flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Search
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">
            Available Grants {state?.location && `in ${state.location}`}
            {state?.category && ` - ${state.category} Category`}
          </h1>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {grantsToDisplay.map((grant) => (
            <Card key={grant.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{grant.title}</CardTitle>
                <CardDescription>Category: {grant.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">{grant.description}</p>
                <div className="space-y-2">
                  <p className="font-semibold">Amount: {grant.amount}</p>
                  <p className="text-sm">Deadline: {new Date(grant.deadline).toLocaleDateString()}</p>
                  <div className="mt-4">
                    <Button 
                      className="w-full"
                      onClick={() => window.open(grant.applicationUrl, '_blank')}
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GrantsList;