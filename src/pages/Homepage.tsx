import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FileText, MapPin, Bell, BarChart3, Users, Shield } from "lucide-react";
import civicHeroImage from "@/assets/civic-hero.jpg";

const Homepage = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${civicHeroImage})` }}
        />
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Report Civic Issues,
              <br />
              <span className="text-primary-foreground/90">Get Them Resolved</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              A simple way for citizens to connect with local authorities and track the progress of community improvements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link to="/report">Report an Issue</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/dashboard">Track My Reports</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/20 to-transparent"></div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to report issues and track their resolution
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="relative text-center p-8 shadow-card hover:shadow-elevated transition-smooth">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">1. Submit a Report</h3>
              <p className="text-muted-foreground mb-6">
                Fill out a simple form with photos and location details. Takes just 2 minutes.
              </p>
              <Button asChild variant="civic" size="sm">
                <Link to="/report">Start Reporting</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="relative text-center p-8 shadow-card hover:shadow-elevated transition-smooth">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">2. Track Progress</h3>
              <p className="text-muted-foreground mb-6">
                Monitor real-time updates in your personal dashboard as authorities work on your issue.
              </p>
              <Button asChild variant="civic" size="sm">
                <Link to="/dashboard">View Dashboard</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="relative text-center p-8 shadow-card hover:shadow-elevated transition-smooth">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center mx-auto mb-6">
                <Bell className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">3. Get Resolution</h3>
              <p className="text-muted-foreground mb-6">
                Receive notifications when your issue is resolved and see the final results.
              </p>
              <Button asChild variant="success" size="sm">
                <Link to="/help">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Quick Access</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-gradient-card shadow-card hover:shadow-elevated transition-smooth">
                <CardContent className="pt-0">
                  <div className="flex items-center mb-4">
                    <BarChart3 className="w-8 h-8 text-civic-blue mr-3" />
                    <h3 className="text-xl font-semibold">Track My Reports</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    View the status of all your submitted reports in one place. Get real-time updates and communicate with authorities.
                  </p>
                  <Button asChild variant="civic" className="w-full">
                    <Link to="/dashboard">Go to Dashboard</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-8 bg-gradient-card shadow-card hover:shadow-elevated transition-smooth">
                <CardContent className="pt-0">
                  <div className="flex items-center mb-4">
                    <Users className="w-8 h-8 text-civic-green mr-3" />
                    <h3 className="text-xl font-semibold">Need Help?</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Find answers to common questions, learn how to use the system, or contact our support team for assistance.
                  </p>
                  <Button asChild variant="success" className="w-full">
                    <Link to="/help">View FAQs</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Making a Difference</h2>
          <p className="text-xl text-muted-foreground">
            See how our community works together to improve our city
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-civic-blue mb-2">2,847</div>
            <p className="text-muted-foreground">Issues Reported</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-civic-green mb-2">2,156</div>
            <p className="text-muted-foreground">Issues Resolved</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-civic-amber mb-2">3.2</div>
            <p className="text-muted-foreground">Avg Days to Resolve</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-civic-blue mb-2">96%</div>
            <p className="text-muted-foreground">Satisfaction Rate</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;