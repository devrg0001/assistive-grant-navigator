import { Button } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const AboutGrants = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6 flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h1 className="text-4xl font-bold mb-6">Understanding Government Grants</h1>
            <p className="text-lg text-gray-600 mb-4">
              Government grants are financial awards provided by federal, state, or local governments to eligible individuals, businesses, and organizations. Unlike loans, grants don't need to be repaid, making them an invaluable resource for those seeking financial assistance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How Our Platform Helps You</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Smart Matching</h3>
                  <p className="text-gray-600">Our platform automatically matches you with grants you're most likely to qualify for based on your location and circumstances.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Application Guidance</h3>
                  <p className="text-gray-600">We provide step-by-step guidance through the application process, helping you submit stronger applications.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Deadline Tracking</h3>
                  <p className="text-gray-600">Never miss an opportunity with our deadline tracking and reminder system.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Resource Center</h3>
                  <p className="text-gray-600">Access guides, tips, and best practices to increase your chances of securing funding.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How to Apply for Grants</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">1. Check Your Eligibility</h3>
                <p className="text-gray-600">Use our eligibility checker to find grants that match your profile and requirements.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">2. Prepare Required Documents</h3>
                <p className="text-gray-600">Gather necessary documentation like identification, tax returns, and other supporting materials.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">3. Submit Your Application</h3>
                <p className="text-gray-600">Follow our guided process to complete and submit your grant applications accurately.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">4. Track Your Progress</h3>
                <p className="text-gray-600">Monitor your application status and receive updates through your dashboard.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Benefits of Government Grants</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <ul className="space-y-4 list-disc list-inside text-gray-600">
                <li>No repayment required - grants are not loans</li>
                <li>Can be used for specific purposes like education, housing, or business development</li>
                <li>Multiple grants can be applied for simultaneously</li>
                <li>Available for individuals, businesses, and organizations</li>
                <li>Can provide substantial funding for qualified applicants</li>
              </ul>
            </div>
          </section>

          <div className="text-center pt-8">
            <Link to="/signup">
              <Button size="lg">Get Started Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutGrants;