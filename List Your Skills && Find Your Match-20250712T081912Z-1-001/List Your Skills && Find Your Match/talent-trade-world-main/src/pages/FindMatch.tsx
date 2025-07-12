import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, MapPin, Star, Clock, MessageCircle, Heart, ArrowLeft, User, Badge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Badge as UIBadge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';

// Mock data for demonstration
const mockUsers = [
  {
    id: 1,
    name: "Sarah Chen",
    location: "San Francisco, CA",
    avatar: null,
    rating: 4.8,
    skillsOffered: ["React", "JavaScript", "UI Design", "Figma"],
    skillsWanted: ["Python", "Data Analysis", "Photography"],
    availability: ["Evenings", "Weekends"],
    bio: "Full-stack developer passionate about creating beautiful user experiences. Looking to expand into data science!",
    isOnline: true,
    completedSwaps: 12
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    location: "Austin, TX",
    avatar: null,
    rating: 4.9,
    skillsOffered: ["Photography", "Photoshop", "Video Editing", "Drone Operation"],
    skillsWanted: ["Web Development", "SEO", "Content Writing"],
    availability: ["Weekends", "Mornings"],
    bio: "Professional photographer and videographer. Want to learn web development to showcase my work better online.",
    isOnline: false,
    completedSwaps: 8
  },
  {
    id: 3,
    name: "Emily Watson",
    location: "New York, NY",
    avatar: null,
    rating: 4.7,
    skillsOffered: ["Python", "Data Analysis", "Machine Learning", "Excel"],
    skillsWanted: ["UI Design", "Branding", "Social Media Marketing"],
    availability: ["Evenings", "Weekdays"],
    bio: "Data scientist looking to improve my design skills. I can help with any data-related projects in return!",
    isOnline: true,
    completedSwaps: 15
  },
  {
    id: 4,
    name: "James Park",
    location: "Seattle, WA",
    avatar: null,
    rating: 4.6,
    skillsOffered: ["Digital Marketing", "SEO", "Content Writing", "Analytics"],
    skillsWanted: ["React", "Node.js", "Mobile Development"],
    availability: ["Weekends", "Evenings"],
    bio: "Digital marketing specialist wanting to transition into tech. Let's help each other grow!",
    isOnline: true,
    completedSwaps: 6
  },
  {
    id: 5,
    name: "Lisa Thompson",
    location: "Denver, CO",
    avatar: null,
    rating: 4.9,
    skillsOffered: ["Graphic Design", "Branding", "Illustration", "Adobe Creative Suite"],
    skillsWanted: ["Web Development", "UX Research", "Project Management"],
    availability: ["Mornings", "Weekends"],
    bio: "Creative designer eager to learn the technical side of product development. Always excited for new collaborations!",
    isOnline: false,
    completedSwaps: 20
  },
  {
    id: 6,
    name: "David Kim",
    location: "Los Angeles, CA",
    avatar: null,
    rating: 4.8,
    skillsOffered: ["iOS Development", "Swift", "Mobile Design", "App Store Optimization"],
    skillsWanted: ["Backend Development", "DevOps", "Cloud Computing"],
    availability: ["Evenings", "Weekdays"],
    bio: "Mobile app developer looking to become full-stack. Happy to share my iOS expertise!",
    isOnline: true,
    completedSwaps: 10
  }
];

const availabilityOptions = ["Mornings", "Afternoons", "Evenings", "Weekdays", "Weekends"];

const FindMatch: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAvailability, setSelectedAvailability] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('rating');
  const [likedUsers, setLikedUsers] = useState<Set<number>>(new Set());

  const filteredUsers = useMemo(() => {
    let filtered = mockUsers.filter(user => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = searchQuery === '' || 
        user.skillsOffered.some(skill => skill.toLowerCase().includes(searchLower)) ||
        user.skillsWanted.some(skill => skill.toLowerCase().includes(searchLower)) ||
        user.name.toLowerCase().includes(searchLower);
      
      const matchesAvailability = selectedAvailability === 'all' || 
        user.availability.includes(selectedAvailability);
      
      return matchesSearch && matchesAvailability;
    });

    // Sort users
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'swaps':
          return b.completedSwaps - a.completedSwaps;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedAvailability, sortBy]);

  const handleSendRequest = (userId: number, userName: string) => {
    toast({
      title: "Swap Request Sent! 🎉",
      description: `Your request has been sent to ${userName}. They'll be notified and can accept or decline.`,
    });
  };

  const handleLikeUser = (userId: number) => {
    const newLikedUsers = new Set(likedUsers);
    if (newLikedUsers.has(userId)) {
      newLikedUsers.delete(userId);
    } else {
      newLikedUsers.add(userId);
    }
    setLikedUsers(newLikedUsers);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-accent to-primary">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => navigate('/')}
                className="text-white hover:bg-white/10"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
              <h1 className="text-2xl font-bold text-white">Find Your Perfect Skill Match</h1>
            </div>
            <div className="text-white/80 text-sm">
              {filteredUsers.length} matches found
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Filters */}
        <Card className="p-6 mb-8 bg-white/10 backdrop-blur-md border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-white/60" />
                <Input
                  placeholder="Search by skills, name, or expertise..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
            </div>

            {/* Availability Filter */}
            <Select value={selectedAvailability} onValueChange={setSelectedAvailability}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Times</SelectItem>
                {availabilityOptions.map((option) => (
                  <SelectItem key={option} value={option}>{option}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort By */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="swaps">Most Swaps</SelectItem>
                <SelectItem value="name">Name A-Z</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        {/* User Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user) => (
            <Card key={user.id} className="p-6 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 group">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="h-12 w-12 bg-white/20">
                      <div className="flex items-center justify-center h-full w-full text-white font-semibold">
                        <User className="h-6 w-6" />
                      </div>
                    </Avatar>
                    {user.isOnline && (
                      <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-400 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">{user.name}</h3>
                    <div className="flex items-center gap-1 text-white/70 text-sm">
                      <MapPin className="h-3 w-3" />
                      {user.location}
                    </div>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleLikeUser(user.id)}
                  className={`text-white hover:bg-white/10 ${likedUsers.has(user.id) ? 'text-red-400' : ''}`}
                >
                  <Heart className={`h-4 w-4 ${likedUsers.has(user.id) ? 'fill-current' : ''}`} />
                </Button>
              </div>

              {/* Rating and Stats */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {renderStars(user.rating)}
                  </div>
                  <span className="text-white text-sm font-medium">{user.rating}</span>
                </div>
                <div className="flex items-center gap-4 text-white/70 text-sm">
                  <div className="flex items-center gap-1">
                    <Badge className="h-3 w-3" />
                    {user.completedSwaps} swaps
                  </div>
                  {user.isOnline && (
                    <div className="flex items-center gap-1 text-green-400">
                      <div className="h-2 w-2 bg-green-400 rounded-full"></div>
                      Online
                    </div>
                  )}
                </div>
              </div>

              {/* Bio */}
              <p className="text-white/80 text-sm mb-4 line-clamp-2">{user.bio}</p>

              {/* Skills Offered */}
              <div className="mb-4">
                <h4 className="text-white font-medium text-sm mb-2">Skills I Can Offer:</h4>
                <div className="flex flex-wrap gap-1">
                  {user.skillsOffered.slice(0, 3).map((skill) => (
                    <UIBadge key={skill} variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
                      {skill}
                    </UIBadge>
                  ))}
                  {user.skillsOffered.length > 3 && (
                    <UIBadge variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
                      +{user.skillsOffered.length - 3} more
                    </UIBadge>
                  )}
                </div>
              </div>

              {/* Skills Wanted */}
              <div className="mb-4">
                <h4 className="text-white font-medium text-sm mb-2">Skills I Want to Learn:</h4>
                <div className="flex flex-wrap gap-1">
                  {user.skillsWanted.slice(0, 3).map((skill) => (
                    <UIBadge key={skill} variant="outline" className="text-xs border-white/30 text-white/80">
                      {skill}
                    </UIBadge>
                  ))}
                  {user.skillsWanted.length > 3 && (
                    <UIBadge variant="outline" className="text-xs border-white/30 text-white/80">
                      +{user.skillsWanted.length - 3} more
                    </UIBadge>
                  )}
                </div>
              </div>

              {/* Availability */}
              <div className="mb-6">
                <h4 className="text-white font-medium text-sm mb-2">Available:</h4>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <Clock className="h-3 w-3" />
                  {user.availability.join(", ")}
                </div>
              </div>

              {/* Action Button */}
              <Button
                onClick={() => handleSendRequest(user.id, user.name)}
                className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 transition-all duration-300 group-hover:bg-white/25"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Send Swap Request
              </Button>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredUsers.length === 0 && (
          <Card className="p-12 text-center bg-white/10 backdrop-blur-md border-white/20">
            <div className="text-white/60 mb-4">
              <Search className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No matches found</h3>
              <p>Try adjusting your search criteria or availability filters.</p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default FindMatch;