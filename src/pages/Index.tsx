import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Building2, GraduationCap, Home, Search, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { grants } from "@/data/grants";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [location, setLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(auth === 'true');
  }, []);

  const handleEligibilityCheck = () => {
    if (!location) {
      toast({
        title: "Location Required",
        description: "Please enter your location to check grant eligibility.",
        variant: "destructive",
      });
      return;
    }

    const availableGrants = grants.filter(grant => 
      (!grant.eligibilityCriteria.location || 
       grant.eligibilityCriteria.location.includes(location))
    );

    if (selectedCategory) {
      const categoryGrants = availableGrants.filter(grant => grant.category === selectedCategory);
      toast({
        title: `${categoryGrants.length} Grants Found!`,
        description: isAuthenticated 
          ? `We found ${categoryGrants.length} ${selectedCategory} grants in ${location}.`
          : "Sign in to view detailed matches and apply.",
      });
    } else {
      toast({
        title: `${availableGrants.length} Grants Found!`,
        description: isAuthenticated 
          ? `We found ${availableGrants.length} grants available in ${location}.`
          : "Sign in to view detailed matches and apply.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold">
            GrantFinder
          </Link>
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => {
                  localStorage.removeItem('isAuthenticated');
                  localStorage.removeItem('userEmail');
                  localStorage.removeItem('userName');
                  setIsAuthenticated(false);
                  toast({
                    title: "Signed out",
                    description: "You have been successfully signed out.",
                  });
                }}
              >
                Sign Out
              </Button>
            ) : (
              <>
                <Link to="/signin">
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button size="sm">Get Started</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Discover Government Grants You Qualify For
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Find financial assistance programs tailored to your situation. We connect you directly with government resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="flex items-center gap-2" onClick={() => setSelectedCategory('all')}>
                <Search className="w-4 h-4" />
                Find Grants
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
                Learn More
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 glass-card animate-fade-in-up cursor-pointer hover:scale-105 transition-transform" 
                  onClick={() => setSelectedCategory('housing')}
                  style={{ animationDelay: "0.1s" }}>
              <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Housing Assistance</h3>
              <p className="text-gray-600">
                Find grants for homeowners, renters, and those seeking housing support.
              </p>
            </Card>

            <Card className="p-6 glass-card animate-fade-in-up cursor-pointer hover:scale-105 transition-transform" 
                  onClick={() => setSelectedCategory('education')}
                  style={{ animationDelay: "0.2s" }}>
              <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Education Grants</h3>
              <p className="text-gray-600">
                Access funding for education, training, and skill development.
              </p>
            </Card>

            <Card className="p-6 glass-card animate-fade-in-up cursor-pointer hover:scale-105 transition-transform" 
                  onClick={() => setSelectedCategory('business')}
                  style={{ animationDelay: "0.3s" }}>
              <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Business Support</h3>
              <p className="text-gray-600">
                Discover grants for small businesses and entrepreneurs.
              </p>
            </Card>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6 text-center">
                Quick Grant Eligibility Check
              </h2>
              <div className="space-y-4">
                <Input 
                  placeholder="Enter your location (e.g., New York)" 
                  className="w-full" 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <div className="grid grid-cols-2 gap-4">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      if (!isAuthenticated) {
                        toast({
                          title: "Sign in required",
                          description: "Please sign in to access detailed eligibility checks.",
                        });
                      }
                    }}
                  >
                    Income Level
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      toast({
                        title: "Selected Category",
                        description: `Current category: ${selectedCategory || 'All grants'}`,
                      });
                    }}
                  >
                    Grant Type
                  </Button>
                </div>
                <Button className="w-full" onClick={handleEligibilityCheck}>Check Eligibility</Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p>© 2024 GrantFinder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;