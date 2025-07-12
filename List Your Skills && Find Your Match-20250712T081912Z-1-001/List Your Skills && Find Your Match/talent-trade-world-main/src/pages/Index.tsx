import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Plus, Sparkles, Search } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gradient-start to-gradient-end">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="h-8 w-8 text-white" />
            <h1 className="text-5xl font-bold text-white">SkillSpark</h1>
          </div>
          <h2 className="text-3xl font-semibold text-white mb-4">
            Exchange Skills, Grow Together
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Connect with others who share your passion for learning and share skills to build community and knowledge together.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              variant="gradient"
              onClick={() => navigate("/add-skills")}
              className="px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              <Plus className="h-5 w-5 mr-2" />
              Add Your Skills
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => navigate("/find-match")}
              className="px-8 py-4 text-lg font-semibold text-white border-white/30 hover:bg-white/10 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              <Search className="h-5 w-5 mr-2" />
              Find Your Match
            </Button>
          </div>
        </div>

        {/* Preview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center text-white">
            <div className="text-3xl font-bold mb-2">2,847</div>
            <div className="text-white/80">Skills Listed</div>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl font-bold mb-2">1,291</div>
            <div className="text-white/80">Active Members</div>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl font-bold mb-2">4.9</div>
            <div className="text-white/80">Average Rating</div>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl font-bold mb-2">10+</div>
            <div className="text-white/80">Categories</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
