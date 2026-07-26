export const resumeData = {
  personalInfo: {
    name: "Renusree Chittella",
    title: "Software Engineer",
    subtitle: "Software Engineer @ Amazon AGI",
    location: "Seattle, WA",
    phone: "+1 224-201-3740",
    email: "renusree153@gmail.com",
    linkedin: "https://www.linkedin.com/in/renusree-chittella/",
    github: "https://github.com/renusreechittella",
    summary: "Software Engineer @ Amazon AGI. Experienced in building large scale ML training data infrastructure for thousands of Applied Scientists across Amazon. Owned and led 4+ critical launches within AI Asset Catalog in 1 year of experience to improve data compliance and governance."
  },
  experiences: [
    {
      role: "Software Engineer I",
      company: "Amazon",
      team: "ML Training Data Infrastructure",
      period: "April 2025 – Jul 2026",
      location: "Seattle, WA",
      tag: "Full-Time",
      highlights: [
        "Spearheaded the integration of multiple dataset storage solutions with Content Registry, producing comprehensive API specifications that standardized data subscriptions and improved access to managed datasets for hundreds of Applied Scientists.",
        "Led the architectural design of a migration from DynamoDB Streams to AWS Step Functions, producing high- and low-level designs and a working proof of concept that de-risked implementation for a 14+ package distributed system, improving operational load and on-call triage by 4+ hours/engineer.",
        "Built an end-to-end integration testing framework for a critical UI pipeline, reducing test development time by 30% with Cypress Studio, cutting release cycles from two weeks to less than one day."
      ],
      skills: ["AWS Step Functions", "DynamoDB Streams", "API Specs", "Cypress Studio", "Distributed Systems", "ML Infrastructure"]
    },
    {
      role: "Software Engineering Intern",
      company: "Amazon",
      team: "Artificial General Intelligence (AGI) Data Services Team",
      period: "June 2024 – Sep 2024",
      location: "Seattle, WA",
      tag: "Internship",
      highlights: [
        "Designed and developed a production released attestation history feature in an agile environment to reduce data handling risks for 1000+ scientists, ensuring reliability with Unit, Integration, and End-to-End testing using JUnit, Jest, Pytest, and Cypress.io.",
        "Engineered robust API endpoints using Kotlin, leveraging AWS DynamoDB streams, AWS API Gateway, and custom Python-based AWS Lambda functions to store history records on submit, enhancing performance and reducing latency by over 15%.",
        "Designed UI in TypeScript and gained approval from Product Managers for a seamless customer experience to view past attestations with search bar filtering, toggle to sort based on timestamp, frontend pagination, and error-handling UI.",
        "Implemented backend pagination and performed comprehensive load testing for optimal API performance."
      ],
      skills: ["Kotlin", "TypeScript", "AWS Lambda", "API Gateway", "DynamoDB", "Jest / Pytest", "Cypress"]
    },
    {
      role: "Software Engineering Intern",
      company: "Avanade",
      team: "Microsoft + Accenture Venture (Client: T-Mobile)",
      period: "June 2023 – Sep 2023",
      location: "Seattle, WA",
      tag: "Internship",
      highlights: [
        "Built multi-page data-driven visualizations to monitor data pipelines in Azure Data Lake, improving monitoring accuracy by 20%.",
        "Used SQL to query data in Azure Data Explorer and increased observability by providing Power BI solutions for DevOps engineers."
      ],
      skills: ["Azure Data Lake", "Azure Data Explorer", "SQL", "Power BI", "DevOps Observability"]
    },
    {
      role: "Software Engineer",
      company: "Taskar Center for Accessible Technology",
      team: "Accessibility Transportation Insights",
      period: "Jan 2022 – Present",
      location: "Seattle, WA",
      tag: "Part-Time / Research",
      highlights: [
        "Developed an end-to-end mobile trip diary React Native library using Expo supporting location tracking, mode-based segmentation, and decreasing estimation error by over 30% to enhance transportation accessibility insights for urban planners.",
        "Designed a PostgreSQL database using Sequelize (Node.js ORM) for database interactions, and Docker for containerization.",
        "Built a web server with Express.js, and constructed REST APIs to extract data for analytical processing."
      ],
      skills: ["React Native", "Expo", "PostgreSQL", "Sequelize", "Express.js", "Docker", "REST APIs"]
    },
    {
      role: "Software Engineer",
      company: "Kaeberlein Lab",
      team: "Computational Biology & ML Research",
      period: "July 2022 – April 2023",
      location: "Seattle, WA",
      tag: "Research",
      highlights: [
        "Trained high performing machine learning models to predict C. elegans biological age using Scikit-learn, PyTorch, and RandomForestRegressor, boosting model accuracy from 70% to 85% using cross validation.",
        "Successfully transitioned the lab's object detection version from YOLOv3 to YOLOv7 to increase computational speed by over 40%.",
        "Spearheaded the development of a Generative Adversarial Network (GAN) to enhance image generation accuracy by over 60%."
      ],
      skills: ["PyTorch", "Scikit-Learn", "YOLOv7", "GANs", "Computer Vision", "Python"]
    }
  ],
  projects: [
    {
      title: "HuskySync",
      award: "Informatics Capstone Top 3 Finalist (out of 300+ submissions)",
      period: "Feb 2024 – May 2024",
      liveUrl: "https://husky-sync-ntcv.vercel.app/",
      problem: "Students preparing for exams often struggle to convert raw study materials (slides, lecture notes, PDFs) into active review sessions, while study groups lack tools for real-time collaborative testing.",
      solution: "HuskySync is a scalable, full-stack web application launched live on Vercel that allows students to upload study documents and participate in live quizzes with AI-generated multiple choice and true/false questions for any class.",
      whatIBuilt: "As the lead engineer of a team of 5, I designed the UI in Figma and developed the React.js frontend. I built a NoSQL DynamoDB database for user profiles, classes, quizzes, and uploaded study materials. I integrated AWS S3 for document storage, AWS Lambda for triggering event processing on file uploads, AWS Textract to parse documents, and Together AI LLMs to dynamically generate high-quality quiz questions. I also authored structured GraphQL queries to optimize data retrieval performance between the client and server.",
      architecture: ["React.js", "Vercel", "AWS S3", "AWS Textract", "Together AI", "AWS Lambda", "DynamoDB", "GraphQL", "Figma"]
    }
  ],
  skillCategories: {
    "Front-End": ["JavaScript", "TypeScript", "React.js", "React Native", "Next.js", "Figma", "Expo", "HTML5/CSS3"],
    "Back-End": ["Amazon Web Services (AWS)", "Azure", "PostgreSQL", "MongoDB", "Node.js", "Express.js", "Microsoft SQL Server"],
    "Cloud & Infrastructure": ["AWS Step Functions", "AWS Lambda", "DynamoDB", "AWS S3", "AWS API Gateway", "Docker", "Firebase", "Git"],
    "Languages & ML": ["Java", "Kotlin", "Go", "Python", "PyTorch", "C", "C++", "Scikit-learn", "NumPy", "Pandas", "GraphQL", "SQL"]
  },
  education: {
    school: "University of Washington - Seattle",
    degree: "B.S. in Informatics",
    period: "Sep 2021 – March 2025",
    location: "Seattle, WA",
    coursework: [
      "Data Structures (Java)",
      "Algorithms",
      "Data Science (Python)",
      "Databases (SQL)",
      "Systems (C/C++)",
      "Web Programming (React/JS)",
      "Machine Learning",
      "Computer Security",
      "Server-Side Development",
      "Artificial Intelligence",
      "Computer Networking"
    ]
  }
};
