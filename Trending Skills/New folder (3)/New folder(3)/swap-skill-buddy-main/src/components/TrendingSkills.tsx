import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users } from "lucide-react";

const skillCategories = [
  {
    id: 1,
    title: "React Development",
    slug: "react-development",
    skills: ["React", "Next.js", "TypeScript", "Redux"],
    learners: "2.8k",
    teachers: "1.2k"
  },
  {
    id: 2,
    title: "Graphic Design",
    slug: "graphic-design",
    skills: ["Photoshop", "Illustrator", "Figma", "Canva"],
    learners: "3.1k",
    teachers: "890"
  },
  {
    id: 3,
    title: "Digital Marketing",
    slug: "digital-marketing",
    skills: ["SEO", "Social Media", "Analytics", "Content"],
    learners: "2.4k",
    teachers: "1.1k"
  },
  {
    id: 4,
    title: "Data Analytics",
    slug: "data-analytics",
    skills: ["Python", "Excel", "SQL", "Tableau"],
    learners: "1.9k",
    teachers: "650"
  },
  {
    id: 5,
    title: "Photography",
    slug: "photography",
    skills: ["Portrait", "Landscape", "Editing", "Lightroom"],
    learners: "1.5k",
    teachers: "780"
  },
  {
    id: 6,
    title: "UX/UI Design",
    slug: "ux-ui-design",
    skills: ["Wireframing", "Prototyping", "User Research", "Figma"],
    learners: "2.2k",
    teachers: "920"
  }
];

export function TrendingSkills() {
  const navigate = useNavigate();

  const handleCategoryClick = (categorySlug: string) => {
    navigate(`/skills/${categorySlug}`);
  };
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Trending Skills</h2>
          <p className="text-lg text-muted-foreground">Connect with skilled professionals ready to swap knowledge</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card 
              key={category.id} 
              className="group hover:shadow-lg transition-all duration-300 bg-card border-border hover:border-primary/20 cursor-pointer"
              onClick={() => handleCategoryClick(category.slug)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground text-lg">{category.title}</h3>
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{category.learners} learning</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4" />
                      <span>{category.teachers} teaching</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}