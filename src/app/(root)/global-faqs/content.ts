interface FAQ {
    title: string;
    description: string;
  }

interface Tab {
    key: string;
    label: string;
    content: FAQ[];
  }

const tabs: Tab[] = [
    {
      key: "1",
      label: "Payment",
      content: [
        { title: "FAQ 1", description: "Payment to FAQ 1" },
        { title: "FAQ 2", description: "While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally, identifiable information may include but is not limited to your name, email address, postal address, and phone number ('Personal Information'). " },
        { title: "FAQ 3", description: "Payment to FAQ 1" },
        { title: "FAQ 4", description: "While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally, identifiable information may include but is not limited to your name, email address, postal address, and phone number ('Personal Information'). " },
        
      ]
     
    },
    {
      key: "2",
      label: "Course Enrollment",
      content: [
        { title: "FAQ 1", description: "Course Enrollment to FAQ 1" },
        { title: "FAQ 2", description: "Course Enrollmentt to FAQ 2" },
        
      ]
      
    },
    {
      key: "3",
      label: "Schedule and Classes",
      content: [
        { title: "FAQ 1", description: "Schedule and Classes to FAQ 1" },
        { title: "FAQ 2", description: "Schedule and Classes to FAQ 2" },
        
      ]
      
    },
    {
    key: "4",
    label: "Doubt Clearing",
    content: [
        { title: "FAQ 1", description: "Doubt Clearing to FAQ 1" },
        { title: "FAQ 2", description: "Doubt Clearing to FAQ 2" },
        
      ]
    
    },
    {
    key: "5",
    label: "Certification",
    content: [
        { title: "FAQ 1", description: "Certification to FAQ 1" },
        { title: "FAQ 2", description: "Certification to FAQ 2" },
        
      ]
    
    },
   
 
    
  ];
  export default tabs;