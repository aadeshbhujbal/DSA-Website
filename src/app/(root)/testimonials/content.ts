export interface TestimonialsTabCategory {
    id: string;
    title: string;
}
export interface TestimonialsProps{
    id:string;
    categoryId: string;
    story:string;
    name:string;
}

const TestimonialstabcategoryList: TestimonialsTabCategory[] = [
    {
      id: "1",
      title: "All",
    },
    {
      id: "2",
      title: "Cybersecurity",
    },
    {
      id: "3",
      title: "Data Science & Analytics",
    },
    {
        id: "4",
        title: "Digital Marketing",
    },
    {
        id: "5",
        title: "Programming",
    },
    {
        id: "6",
        title: "Communications",
    },
    
  ];
  export {TestimonialstabcategoryList}


  const Testimonialslist : TestimonialsProps[] =[
    {
        id: "1",
        categoryId: "2",
        story: "CyberSecurity EdTech has transformed the way I approach language learning. With access to immersive language apps and virtual conversation partners, I've been able to make significant progress in mastering new languages. I'm amazed by the effectiveness of these tools in improving my fluency and confidence levels. Thanks to EdTech, I feel more prepared to communicate effectively in a globalized world. CyberSecurity EdTech has transformed the way I approach language learning. With access to immersive language apps and virtual conversation partners, I've been able to make significant progress in mastering new languages. I'm amazed by the effectiveness of these tools in improving my fluency and confidence levels. Thanks to EdTech, I feel more prepared to communicate effectively in a globalized world.",
        name : "Cybersecurity"
    },
    {
        id: "6",
        categoryId: "2",
        story: "CyberSecurity EdTech has transformed the way I approach language learning. With access to immersive language apps and virtual conversation partners, I've been able to make significant progress in mastering new languages. I'm amazed by the effectiveness of these tools in improving my fluency and confidence levels. Thanks to EdTech, I feel more prepared to communicate effectively in a globalized world.",
        name : "Cybersecurity"
    },
    {
        id: "7",
        categoryId: "2",
        story: "CyberSecurity EdTech has transformed the way I approach language learning. With access to immersive language apps and virtual conversation partners, I've been able to make significant progress in mastering new languages. I'm amazed by the effectiveness of these tools in improving my fluency and confidence levels. Thanks to EdTech, I feel more prepared to communicate effectively in a globalized world.",
        name : "Cybersecurity"
    },
    {
        id: "8",
        categoryId: "2",
        story: "CyberSecurity EdTech has transformed the way I approach language learning. With access to immersive language apps and virtual conversation partners, I've been able to make significant progress in mastering new languages. I'm amazed by the effectiveness of these tools in improving my fluency and confidence levels. Thanks to EdTech, I feel more prepared to communicate effectively in a globalized world.",
        name : "Cybersecurity"
    },
    {
        id: "2",
        categoryId: "3",
        story: "Data Science & Analytics EdTech has transformed the way I approach language learning. With access to immersive language apps and virtual conversation partners, I've been able to make significant progress in mastering new languages. I'm amazed by the effectiveness of these tools in improving my fluency and confidence levels. Thanks to EdTech, I feel more prepared to communicate effectively in a globalized world.",
        name : "Data Science & Analytics"
    },
    {
        id: "3",
        categoryId: "4",
        story: "Digital Marketing EdTech has transformed the way I approach language learning. With access to immersive language apps and virtual conversation partners, I've been able to make significant progress in mastering new languages. I'm amazed by the effectiveness of these tools in improving my fluency and confidence levels. Thanks to EdTech, I feel more prepared to communicate effectively in a globalized world.",
        name : "Digital Marketing"
    },
    {
        id: "4",
        categoryId: "5",
        story: "Programming EdTech has transformed the way I approach language learning. With access to immersive language apps and virtual conversation partners, I've been able to make significant progress in mastering new languages. I'm amazed by the effectiveness of these tools in improving my fluency and confidence levels. Thanks to EdTech, I feel more prepared to communicate effectively in a globalized world.",
        name : "Programming"
    },
    {
        id: "5",
        categoryId: "6",
        story: "Communication EdTech has transformed the way I approach language learning. With access to immersive language apps and virtual conversation partners, I've been able to make significant progress in mastering new languages. I'm amazed by the effectiveness of these tools in improving my fluency and confidence levels. Thanks to EdTech, I feel more prepared to communicate effectively in a globalized world.",
        name : "Communication"
    },


  ]

  export {Testimonialslist}