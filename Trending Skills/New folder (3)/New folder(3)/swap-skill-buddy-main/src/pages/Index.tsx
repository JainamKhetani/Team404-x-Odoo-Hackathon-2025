import { TrendingSkills } from "@/components/TrendingSkills";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="flex items-center justify-center py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Skill Swap Platform</h1>
          <p className="text-xl text-muted-foreground">Exchange skills, grow together!</p>
        </div>
      </div>
      
      {/* Trending Skills Section */}
      <TrendingSkills />
    </div>
  );
};

export default Index;
