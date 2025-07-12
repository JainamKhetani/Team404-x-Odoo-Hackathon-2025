import { useState } from "react";
import { Search, Star, Users, ArrowRight, BookOpen, Target, MessageSquare } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Mock data for featured skills and users
  const featuredSkills = [
    { name: "React Development", requests: 45, offers: 32 },
    { name: "Graphic Design", requests: 38, offers: 41 },
    { name: "Digital Marketing", requests: 52, offers: 28 },
    { name: "Data Analysis", requests: 34, offers: 25 },
    { name: "Photography", requests: 29, offers: 47 },
    { name: "UI/UX Design", requests: 41, offers: 33 }
  ];

  const featuredUsers = [
    {
      name: "Sarah Chen",
      location: "San Francisco, CA",
      skillsOffered: ["React", "TypeScript", "Node.js"],
      skillsWanted: ["UI/UX Design", "Figma"],
      rating: 4.9,
      swapsCompleted: 23
    },
    {
      name: "Marcus Johnson",
      location: "New York, NY", 
      skillsOffered: ["Photoshop", "Photography", "Video Editing"],
      skillsWanted: ["Web Development", "SEO"],
      rating: 4.8,
      swapsCompleted: 18
    },
    {
      name: "Elena Rodriguez",
      location: "Austin, TX",
      skillsOffered: ["Digital Marketing", "Content Writing"],
      skillsWanted: ["Data Analysis", "Python"],
      rating: 4.9,
      swapsCompleted: 31
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="People collaborating and sharing skills"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Exchange Skills,<br />
              <span className="text-primary-glow">Grow Together</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90 max-w-2xl mx-auto px-4 sm:px-0">
              Connect with like-minded individuals, share your expertise, and learn new skills through meaningful exchanges in our growing community.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
              <div className="relative">
                <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 sm:h-5 sm:w-5" />
                <Input
                  type="text"
                  placeholder="Search for skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 sm:pl-12 pr-20 sm:pr-24 py-3 sm:py-4 text-base sm:text-lg bg-white/95 backdrop-blur-sm border-0 rounded-xl shadow-medium"
                />
                <Button 
                  size="sm" 
                  className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 px-3 sm:px-6 text-sm sm:text-base"
                  variant="gradient"
                  onClick={() => navigate('/browse')}
                >
                  <span className="hidden sm:inline">Search</span>
                  <span className="sm:hidden">Go</span>
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
              <Button size="lg" variant="gradient" className="animate-pulse-glow w-full sm:w-auto" asChild>
                <Link to="/browse">
                  <span className="flex items-center justify-center">
                    Join the Community
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 w-full sm:w-auto" asChild>
                <Link to="/browse">Browse Skills</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">2,847</div>
              <div className="text-xs sm:text-sm md:text-base text-muted-foreground">Active Members</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1 sm:mb-2">1,293</div>
              <div className="text-xs sm:text-sm md:text-base text-muted-foreground">Skills Exchanged</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-success mb-1 sm:mb-2">4.9</div>
              <div className="text-xs sm:text-sm md:text-base text-muted-foreground">Average Rating</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-warning mb-1 sm:mb-2">150+</div>
              <div className="text-xs sm:text-sm md:text-base text-muted-foreground">Skill Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-4">How SkillSpark Works</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
              Simple steps to start your skill exchange journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="text-center shadow-medium hover:shadow-glow transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <CardTitle>List Your Skills</CardTitle>
                <CardDescription>
                  Share what you know and what you'd like to learn. Create your profile in minutes.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center shadow-medium hover:shadow-glow transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Find Your Match</CardTitle>
                <CardDescription>
                  Browse and search for the perfect skill exchange partner based on your needs.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center shadow-medium hover:shadow-glow transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Start Exchanging</CardTitle>
                <CardDescription>
                  Connect, exchange skills, and build lasting professional relationships.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-4">Trending Skills</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4 sm:px-0">
              Most sought-after skills in our community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {featuredSkills.map((skill, index) => (
              <Card key={skill.name} className="hover:shadow-medium transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="text-lg">{skill.name}</CardTitle>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{skill.offers} offering</span>
                    <span>{skill.requests} requesting</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">High Demand</Badge>
                    <Button size="sm" variant="outline" asChild>
                      <Link to="/browse">View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Users */}
      <section className="py-12 sm:py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-4">Featured Members</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4 sm:px-0">
              Connect with top-rated skill exchange partners
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredUsers.map((user, index) => (
              <Card key={user.name} className="shadow-medium hover:shadow-glow transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{user.name}</CardTitle>
                      <CardDescription>{user.location}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Offers:</p>
                    <div className="flex flex-wrap gap-1">
                      {user.skillsOffered.map(skill => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Wants:</p>
                    <div className="flex flex-wrap gap-1">
                      {user.skillsWanted.map(skill => (
                        <Badge key={skill} variant="outline">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-warning text-warning" />
                      <span className="font-medium">{user.rating}</span>
                      <span className="text-muted-foreground text-sm">
                        ({user.swapsCompleted} swaps)
                      </span>
                    </div>
                    <Button size="sm" asChild>
                      <Link to="/browse">View Profile</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4 sm:px-0">Ready to Start Your Skill Exchange Journey?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90 max-w-2xl mx-auto px-4 sm:px-0">
            Join thousands of professionals who are growing their careers through skill exchange.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto" asChild>
              <Link to="/browse">
                <Users className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Create Profile
              </Link>
            </Button>
            <Button size="lg" variant="ghost" className="border border-white/30 text-white hover:bg-white/10 w-full sm:w-auto" asChild>
              <Link to="/browse">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
