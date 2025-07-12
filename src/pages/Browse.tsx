import { useState } from "react";
import { Search, Filter, Star, MapPin, Clock, Users, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Browse = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Mock data for skills and users
  const skillCategories = [
    "Technology", "Design", "Marketing", "Business", "Photography", 
    "Writing", "Languages", "Music", "Fitness", "Cooking"
  ];

  const locations = [
    "San Francisco, CA", "New York, NY", "Los Angeles, CA", "Austin, TX", 
    "Seattle, WA", "Boston, MA", "Chicago, IL", "Remote"
  ];

  const users = [
    {
      id: 1,
      name: "Sarah Chen",
      location: "San Francisco, CA",
      avatar: "SC",
      skillsOffered: ["React", "TypeScript", "Node.js", "GraphQL"],
      skillsWanted: ["UI/UX Design", "Figma", "Adobe XD"],
      rating: 4.9,
      swapsCompleted: 23,
      availability: "Weekends & Evenings",
      bio: "Full-stack developer with 5+ years experience. Love teaching React and learning design!",
      isOnline: true
    },
    {
      id: 2,
      name: "Marcus Johnson",
      location: "New York, NY",
      avatar: "MJ",
      skillsOffered: ["Photography", "Photoshop", "Video Editing", "Lightroom"],
      skillsWanted: ["Web Development", "SEO", "Social Media Marketing"],
      rating: 4.8,
      swapsCompleted: 18,
      availability: "Flexible",
      bio: "Professional photographer and content creator. Happy to share my visual storytelling skills!",
      isOnline: false
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      location: "Austin, TX",
      avatar: "ER",
      skillsOffered: ["Digital Marketing", "Content Writing", "SEO", "Google Analytics"],
      skillsWanted: ["Data Analysis", "Python", "Machine Learning"],
      rating: 4.9,
      swapsCompleted: 31,
      availability: "Weekdays",
      bio: "Marketing strategist transitioning to data science. Love helping others grow their online presence!",
      isOnline: true
    },
    {
      id: 4,
      name: "David Kim",
      location: "Seattle, WA",
      avatar: "DK",
      skillsOffered: ["UI/UX Design", "Figma", "Design Systems", "User Research"],
      skillsWanted: ["Flutter", "Mobile Development", "React Native"],
      rating: 4.7,
      swapsCompleted: 15,
      availability: "Evenings",
      bio: "Senior UX designer at a tech startup. Passionate about creating intuitive user experiences!",
      isOnline: true
    },
    {
      id: 5,
      name: "Amy Wilson",
      location: "Los Angeles, CA",
      avatar: "AW",
      skillsOffered: ["Spanish", "French", "Language Teaching", "Translation"],
      skillsWanted: ["Graphic Design", "Branding", "Logo Design"],
      rating: 4.8,
      swapsCompleted: 27,
      availability: "Flexible",
      bio: "Polyglot and language teacher. I love helping people communicate across cultures!",
      isOnline: false
    },
    {
      id: 6,
      name: "James Park",
      location: "Remote",
      avatar: "JP",
      skillsOffered: ["Python", "Data Science", "Machine Learning", "Statistics"],
      skillsWanted: ["Public Speaking", "Presentation Skills", "Leadership"],
      rating: 4.9,
      swapsCompleted: 19,
      availability: "Weekends",
      bio: "Data scientist and researcher. Always excited to share the power of data analysis!",
      isOnline: true
    }
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = searchQuery === "" || 
      user.skillsOffered.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
      user.skillsWanted.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
      user.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLocation = selectedLocation === "" || user.location === selectedLocation;
    
    return matchesSearch && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Browse Skills & Members</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover talented individuals and find your perfect skill exchange match
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card rounded-xl shadow-soft p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-end">
            {/* Search Bar */}
            <div className="flex-1 space-y-2">
              <label className="text-sm font-medium text-foreground">Search Skills or Members</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder="e.g., React, Photography, Marketing..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4"
                />
              </div>
            </div>

            {/* Location Filter */}
            <div className="space-y-2 w-full lg:w-48">
              <label className="text-sm font-medium text-foreground">Location</label>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="All locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All locations</SelectItem>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>{location}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Filter Toggle */}
            <Button 
              variant="outline" 
              onClick={() => setShowFilters(!showFilters)}
              className="w-full lg:w-auto"
            >
              <Filter className="mr-2 h-4 w-4" />
              {showFilters ? "Hide Filters" : "More Filters"}
            </Button>

            {/* Search Button */}
            <Button variant="gradient" className="w-full lg:w-auto">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t space-y-4">
              <h3 className="font-medium text-foreground">Advanced Filters</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Skill Categories */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-foreground">Categories</h4>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {skillCategories.map(category => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox id={category} />
                        <label htmlFor={category} className="text-sm text-muted-foreground">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-foreground">Availability</h4>
                  <div className="space-y-2">
                    {["Weekdays", "Weekends", "Evenings", "Flexible"].map(availability => (
                      <div key={availability} className="flex items-center space-x-2">
                        <Checkbox id={availability} />
                        <label htmlFor={availability} className="text-sm text-muted-foreground">
                          {availability}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Other Filters */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-foreground">Other</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="online-now" />
                      <label htmlFor="online-now" className="text-sm text-muted-foreground">
                        Online now
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="high-rated" />
                      <label htmlFor="high-rated" className="text-sm text-muted-foreground">
                        4.5+ rating
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="experienced" />
                      <label htmlFor="experienced" className="text-sm text-muted-foreground">
                        10+ swaps
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              {filteredUsers.length} Members Found
            </h2>
            <p className="text-muted-foreground">
              {searchQuery && `Results for "${searchQuery}"`}
            </p>
          </div>
          <Select defaultValue="relevance">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Most Relevant</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="swaps">Most Swaps</SelectItem>
              <SelectItem value="recent">Recently Active</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* User Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredUsers.map((user, index) => (
            <Card 
              key={user.id} 
              className="hover:shadow-medium transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                        {user.avatar}
                      </div>
                      {user.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-card"></div>
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{user.name}</CardTitle>
                      <CardDescription className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {user.location}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-warning text-warning" />
                    <span className="font-medium text-sm">{user.rating}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-2">{user.bio}</p>

                {/* Skills Offered */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-4 w-4 text-success" />
                    <span className="text-sm font-medium">Offers</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {user.skillsOffered.slice(0, 3).map(skill => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {user.skillsOffered.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{user.skillsOffered.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Skills Wanted */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium">Wants</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {user.skillsWanted.slice(0, 3).map(skill => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {user.skillsWanted.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{user.skillsWanted.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Stats and Availability */}
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span>{user.swapsCompleted} swaps completed</span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {user.availability}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    View Profile
                  </Button>
                  <Button size="sm" variant="gradient" className="flex-1">
                    Request Swap
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More Members
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Browse;
