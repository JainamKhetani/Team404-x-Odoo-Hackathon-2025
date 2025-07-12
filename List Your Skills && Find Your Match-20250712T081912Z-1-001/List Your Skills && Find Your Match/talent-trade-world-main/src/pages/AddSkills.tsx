import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Plus, 
  X, 
  User, 
  MapPin, 
  Camera, 
  Clock, 
  Star, 
  Users,
  ArrowLeft,
  Sparkles
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AddSkills = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    profilePhoto: "",
    skillsOffered: [] as string[],
    skillsWanted: [] as string[],
    availability: [] as string[],
    isPublic: true,
    bio: "",
  });

  const [currentSkillOffered, setCurrentSkillOffered] = useState("");
  const [currentSkillWanted, setCurrentSkillWanted] = useState("");

  const availabilityOptions = [
    "Weekday Mornings",
    "Weekday Afternoons", 
    "Weekday Evenings",
    "Weekend Mornings",
    "Weekend Afternoons",
    "Weekend Evenings",
    "Flexible Schedule"
  ];

  const addSkillOffered = () => {
    if (currentSkillOffered.trim() && !formData.skillsOffered.includes(currentSkillOffered.trim())) {
      setFormData(prev => ({
        ...prev,
        skillsOffered: [...prev.skillsOffered, currentSkillOffered.trim()]
      }));
      setCurrentSkillOffered("");
    }
  };

  const addSkillWanted = () => {
    if (currentSkillWanted.trim() && !formData.skillsWanted.includes(currentSkillWanted.trim())) {
      setFormData(prev => ({
        ...prev,
        skillsWanted: [...prev.skillsWanted, currentSkillWanted.trim()]
      }));
      setCurrentSkillWanted("");
    }
  };

  const removeSkillOffered = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skillsOffered: prev.skillsOffered.filter(s => s !== skill)
    }));
  };

  const removeSkillWanted = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skillsWanted: prev.skillsWanted.filter(s => s !== skill)
    }));
  };

  const toggleAvailability = (option: string) => {
    setFormData(prev => ({
      ...prev,
      availability: prev.availability.includes(option)
        ? prev.availability.filter(a => a !== option)
        : [...prev.availability, option]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      toast({
        title: "Name required",
        description: "Please enter your name to continue.",
        variant: "destructive"
      });
      return;
    }
    
    if (formData.skillsOffered.length === 0) {
      toast({
        title: "Skills required", 
        description: "Please add at least one skill you can offer.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Profile created successfully!",
      description: "Your skills profile has been added to SkillSpark.",
    });
    
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gradient-start to-gradient-end">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => navigate("/")}
                className="text-white hover:bg-white/20"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-white" />
                <h1 className="text-xl font-bold text-white">Add Your Skills</h1>
              </div>
            </div>
            <Button 
              variant="outline" 
              onClick={() => navigate("/")}
              className="border-white/30 text-white hover:bg-white/20"
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8 max-w-4xl">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Basic Information */}
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <User className="h-6 w-6 text-primary" />
                Basic Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your full name"
                    className="h-12"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="text-base font-medium flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Location (Optional)
                  </Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    placeholder="City, Country"
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio" className="text-base font-medium">
                  About You
                </Label>
                <Textarea
                  id="bio"
                  value={formData.bio}
                  onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                  placeholder="Tell others about yourself, your experience, and what motivates you to learn..."
                  className="min-h-24 resize-none"
                />
              </div>

              <div className="flex items-center space-x-2 p-4 bg-primary/5 rounded-lg">
                <Switch
                  id="public-profile"
                  checked={formData.isPublic}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, isPublic: checked }))}
                />
                <Label htmlFor="public-profile" className="text-base font-medium">
                  Make my profile public
                </Label>
                <Users className="h-4 w-4 text-primary ml-2" />
              </div>
            </CardContent>
          </Card>

          {/* Skills Offered */}
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Star className="h-6 w-6 text-accent" />
                Skills I Can Offer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  value={currentSkillOffered}
                  onChange={(e) => setCurrentSkillOffered(e.target.value)}
                  placeholder="e.g., Photoshop, Web Development, Guitar..."
                  className="h-12"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkillOffered())}
                />
                <Button 
                  type="button" 
                  onClick={addSkillOffered}
                  className="h-12 px-6"
                  variant="gradient"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {formData.skillsOffered.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-3 py-2 text-sm bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => removeSkillOffered(skill)}
                      className="ml-2 hover:text-destructive transition-colors"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
              
              {formData.skillsOffered.length === 0 && (
                <p className="text-muted-foreground text-sm">
                  Add skills you can teach or help others with
                </p>
              )}
            </CardContent>
          </Card>

          {/* Skills Wanted */}
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Sparkles className="h-6 w-6 text-accent" />
                Skills I Want to Learn
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  value={currentSkillWanted}
                  onChange={(e) => setCurrentSkillWanted(e.target.value)}
                  placeholder="e.g., Python, Public Speaking, Cooking..."
                  className="h-12"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkillWanted())}
                />
                <Button 
                  type="button" 
                  onClick={addSkillWanted}
                  className="h-12 px-6"
                  variant="gradient"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {formData.skillsWanted.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-3 py-2 text-sm bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => removeSkillWanted(skill)}
                      className="ml-2 hover:text-destructive transition-colors"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
              
              {formData.skillsWanted.length === 0 && (
                <p className="text-muted-foreground text-sm">
                  Add skills you'd like to learn from others
                </p>
              )}
            </CardContent>
          </Card>

          {/* Availability */}
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Clock className="h-6 w-6 text-primary" />
                When I'm Available
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {availabilityOptions.map((option) => (
                  <div 
                    key={option} 
                    className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <Checkbox
                      checked={formData.availability.includes(option)}
                      onCheckedChange={() => toggleAvailability(option)}
                    />
                    <Label 
                      className="cursor-pointer flex-1"
                      onClick={() => toggleAvailability(option)}
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <Button 
              type="submit" 
              size="lg"
              variant="gradient"
              className="px-12 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              Create My SkillSpark Profile
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSkills;