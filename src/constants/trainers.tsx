export interface TrainerDetails {
  id: string
  image: string
  slug: string
  name: string
  role: string
  bio: string
  tabs: {
    awards: string[]
    skills: string[]
    toolsknown: string[]
  }
}

export interface TabCategory {
  id: string;
  title: string;
}

const trainerDetailsList: TrainerDetails[] = [
  {
    id: "1",
    image: "/images/trainer1.jpg",
    slug: "soumya-maity",
    name: "Soumya Maity",
    role: "Lead Network Analyst & Cloud Support Engineer",
    bio: "Dedicated and results-driven Lead Network Analyst & Cloud Support Engineer with over multiple of progressive experience in architecting, implementing, and optimizing robust network infrastructures and cloud solutions. Known for exceptional problem-solving abilities and a deep understanding of networking protocols and cloud technologies. Proven track record of successfully leading cross-functional teams to deliver innovative solutions that enhance efficiency, reliability, and security. Passionate about staying at the forefront of technological advancements and driving organizational growth through strategic IT initiatives.",
    tabs: {
      awards: ["Soumya Maity's Award 1", " Soumya Maity's Award 2"],
      skills: ["Soumya Maity's Skill 1", "Soumya Maity's Skill 2"],
      toolsknown: ["Soumya Maity's Tool 1", "Soumya Maity's Tool 2"],
    },
  },
  {
    id: "2",
    image: "/images/trainer1.jpg",
    slug: "soumya-jas",
    name: "Soumya Jas",
    role: "Cybersecurity ",
    bio: "Dedicated and results-driven Lead Network Analyst & Cloud Support Engineer with over multiple of progressive experience in architecting, implementing, and optimizing robust network infrastructures and cloud solutions. Known for exceptional problem-solving abilities and a deep understanding of networking protocols and cloud technologies. Proven track record of successfully leading cross-functional teams to deliver innovative solutions that enhance efficiency, reliability, and security. Passionate about staying at the forefront of technological advancements and driving organizational growth through strategic IT initiatives.",
    tabs: {
      awards: [" Soumya Jas's Award 1", " Soumya Jas's Award 2"],
      skills: [" Soumya Jas's Skill 1", " Soumya Jas's Skill 2"],
      toolsknown: [" Soumya Jas's Tool 1", " Soumya Jas's Tool 2"],
    },
  },
  {
    id: "3",
    image: "/images/trainer1.jpg",
    slug: "Shahbaz",
    name: "Shahbaz",
    role: "Lead Network Analyst & Cloud Support Engineer",
    bio: "Dedicated and results-driven Lead Network Analyst & Cloud Support Engineer with over multiple of progressive experience in architecting, implementing, and optimizing robust network infrastructures and cloud solutions. Known for exceptional problem-solving abilities and a deep understanding of networking protocols and cloud technologies. Proven track record of successfully leading cross-functional teams to deliver innovative solutions that enhance efficiency, reliability, and security. Passionate about staying at the forefront of technological advancements and driving organizational growth through strategic IT initiatives.",
    tabs: {
      awards: ["Shahbaz Ahmed's Award 1", " Shahbaz Ahmed's Award 2"],
      skills: ["Shahbaz Ahmed's Skill 1", "Shahbaz Ahmed's Skill 2"],
      toolsknown: ["Shahbaz Ahmed's Tool 1", "Shahbaz Ahmed's Tool 2"],
    },
  },
  {
    id: "4",
    image: "/images/trainer1.jpg",
    slug: "ankan-dhar",
    name: "Ankan Dhar",
    role: "Digital Marketing Head",
    bio: "Dedicated and results-driven Lead Network Analyst & Cloud Support Engineer with over multiple of progressive experience in architecting, implementing, and optimizing robust network infrastructures and cloud solutions. Known for exceptional problem-solving abilities and a deep understanding of networking protocols and cloud technologies. Proven track record of successfully leading cross-functional teams to deliver innovative solutions that enhance efficiency, reliability, and security. Passionate about staying at the forefront of technological advancements and driving organizational growth through strategic IT initiatives.",
    tabs: {
      awards: ["Ankan Dhar Award 1q", " Ankan Dhar Award 2"],
      skills: ["Ankan Dhar Skill 1", "Ankan Dhar Skill 2"],
      toolsknown: ["Ankan Dhar Tool 1", "Ankan Dhar Tool 2"],
    },
  },
]

const tabcategoryList: TabCategory[] = [
  {
    id: "1",
    title: "Awards",
  },
  {
    id: "2",
    title: "Skills",
  },
  {
    id: "3",
    title: "Tools Known",
  },
  
];

export {trainerDetailsList,tabcategoryList}
