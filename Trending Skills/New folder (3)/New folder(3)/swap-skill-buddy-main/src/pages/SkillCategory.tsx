import { useParams, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Star, Clock, MessageCircle } from "lucide-react";

const skillCategoryData = {
  "react-development": {
    title: "React Development",
    description: "Master modern React development with expert guidance",
    skills: ["React", "Next.js", "TypeScript", "Redux"],
    totalLearners: "2.8k",
    totalTeachers: "1.2k",
    profiles: [
      {
        id: 1,
        name: "Sarah Chen",
        location: "San Francisco, CA",
        avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=150&h=150&fit=crop&crop=face",
        rating: 4.9,
        skillsOffered: ["React", "TypeScript", "Next.js"],
        skillsWanted: ["Node.js", "GraphQL"],
        availability: "Weekends",
        experience: "5+ years"
      },
      {
        id: 2,
        name: "Michael Kim",
        location: "Seattle, WA",
        avatar: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=150&h=150&fit=crop&crop=face",
        rating: 4.7,
        skillsOffered: ["JavaScript", "React", "Redux"],
        skillsWanted: ["Vue.js", "Angular"],
        availability: "Weekdays",
        experience: "3+ years"
      },
      {
        id: 3,
        name: "Lisa Wang",
        location: "Los Angeles, CA",
        avatar: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=150&h=150&fit=crop&crop=face",
        rating: 4.9,
        skillsOffered: ["TypeScript", "Next.js", "React"],
        skillsWanted: ["Svelte", "Astro"],
        availability: "Evenings",
        experience: "4+ years"
      }
    ]
  },
  "graphic-design": {
    title: "Graphic Design",
    description: "Learn creative design skills from industry professionals",
    skills: ["Photoshop", "Illustrator", "Figma", "Canva"],
    totalLearners: "3.1k",
    totalTeachers: "890",
    profiles: [
      {
        id: 4,
        name: "Emily Johnson",
        location: "Austin, TX",
        avatar: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=150&h=150&fit=crop&crop=face",
        rating: 5.0,
        skillsOffered: ["Photoshop", "Illustrator", "Logo Design"],
        skillsWanted: ["3D Design", "Motion Graphics"],
        availability: "Flexible",
        experience: "6+ years"
      }
    ]
  }
};

export default function SkillCategory() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  
  const category = categoryId ? skillCategoryData[categoryId as keyof typeof skillCategoryData] : null;

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category not found</h1>
          <Button onClick={() => navigate('/')}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </div>

        {/* Category Info */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">{category.title}</h1>
          <p className="text-lg text-muted-foreground mb-6">{category.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {category.skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>

          <div className="flex gap-8 text-sm text-muted-foreground">
            <div>
              <span className="font-semibold text-primary">{category.totalLearners}</span> learning
            </div>
            <div>
              <span className="font-semibold text-primary">{category.totalTeachers}</span> teaching
            </div>
          </div>
        </div>

        {/* Available Teachers */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Available Teachers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.profiles.map((profile) => (
              <Card key={profile.id} className="group hover:shadow-lg transition-all duration-300 bg-card border-border hover:border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={profile.avatar} alt={profile.name} />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {profile.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground text-lg mb-1">{profile.name}</h3>
                      <div className="flex items-center gap-1 text-muted-foreground mb-2">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm truncate">{profile.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{profile.rating}</span>
                        <span className="text-xs text-muted-foreground ml-2">{profile.experience}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Teaches</h4>
                      <div className="flex flex-wrap gap-1">
                        {profile.skillsOffered.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Wants to Learn</h4>
                      <div className="flex flex-wrap gap-1">
                        {profile.skillsWanted.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Available: {profile.availability}</span>
                    </div>
                  </div>

                  <Button className="w-full" size="sm">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Request Skill Swap
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}