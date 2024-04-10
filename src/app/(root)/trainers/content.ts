export interface TrainerDetails{
    id: string;
    image: string;
    slug: string;
    name: string;
    role: string;
    bio: string;
    tabs: {
        awards:string[];
        skills: string[];
        toolsknown: string[]
    }
}

export const trainerDetailsList: TrainerDetails[] = [
    {
      id: "1",
      image: "/images/trainer1.jpg",
      slug: "soumya-maity",
      name: "Soumyaa Maity",
      role: "Lead Network Analyst & Cloud Support Engineer",
      bio: "Dedicated and results-driven Lead Network Analyst & Cloud Support Engineer with over multiple of progressive experience in architecting, implementing, and optimizing robust network infrastructures and cloud solutions. Known for exceptional problem-solving abilities and a deep understanding of networking protocols and cloud technologies. Proven track record of successfully leading cross-functional teams to deliver innovative solutions that enhance efficiency, reliability, and security. Passionate about staying at the forefront of technological advancements and driving organizational growth through strategic IT initiatives.",
      tabs: {
        awards: ["Award 1", "Award 2"],
        skills: ["Skill 1", "Skill 2"],
        toolsknown: ["Tool 1", "Tool 2"]
      }
    },
    

    
  ];
  