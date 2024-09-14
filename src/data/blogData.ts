import ImgOne from "../assets/images/courseImgOne.jpg";
import ImgTwo from "../assets/images/courseImgTwo.jpg";
import ImgThree from "../assets/images/courseImgThree.jpg";
import ImgFour from "../assets/images/courseImgFour.jpg";
import ImgFive from "../assets/images/courseImgSix.jpg";

const blogData = [
  {
    id: "1",
    title: "কোর্স বাচাই করার গুরুত্ব",
    author: "Ahshan Habib",
    date: "2024-03-11",
    content:
      "In today's fast-paced world, selecting the right courses has become a necessity rather than a luxury. With rapidly evolving industries and job markets, individuals need to carefully consider their educational choices to stay competitive. This blog explores the significance of necessity in course selection and offers insights into making informed decisions.",
    tags: ["education", "course selection", "career development"],
    likes: 102,
    comments: 15,
    image: ImgOne,
    type: "free",
    category: "Technology",
  },
  {
    id: "2",
    title: "The Role of Necessity in Course Selection",
    author: "Ahshan Habib",
    date: "2024-03-10",
    content:
      "Industries are constantly evolving, driven by technological advancements and changing consumer demands. To thrive in such dynamic environments, individuals must embrace the necessity of updating their skill sets through relevant courses. This blog delves into the importance of necessity in course selection and provides strategies for staying ahead in rapidly changing industries.",
    tags: ["career", "skill development", "industry trends"],
    likes: 85,
    comments: 12,
    image: ImgTwo,
    type: "free",
    category: "Education",
  },
  {
    id: "3",
    title: "A Necessity for Career Advancement",
    author: "Ahshan Habib",
    date: "2024-03-09",
    content:
      "Career advancement often hinges on acquiring the right skills and knowledge. Recognizing the necessity of selecting appropriate courses is key to unlocking new opportunities and achieving professional growth. This blog discusses the essential role of necessity in course selection and offers practical advice for individuals seeking to advance their careers.",
    tags: ["professional development", "career growth", "skill acquisition"],
    likes: 93,
    comments: 18,
    image: ImgThree,
    type: "premium",
    category: "Career",
  },
  {
    id: "4",
    title: "Understanding the Necessity Factor",
    author: "Ahshan Habib",
    date: "2024-03-08",
    content:
      "With a myriad of educational options available, individuals often find themselves overwhelmed when it comes to selecting courses. However, by understanding the necessity factor and aligning educational choices with personal and professional goals, individuals can make more informed decisions. This blog explores the importance of necessity in course selection and provides guidance on navigating the educational landscape.",
    tags: ["education", "personal development", "goal setting"],
    likes: 76,
    comments: 10,
    image: ImgFour,
    type: "free",
    category: "Education",
  },
  {
    id: "5",
    title: "অনলাইন কোর্স কেন করবেন",
    author: "Ahshan Habib",
    date: "2024-03-11",
    content:
      "In today's fast-paced world, selecting the right courses has become a necessity rather than a luxury. With rapidly evolving industries and job markets, individuals need to carefully consider their educational choices to stay competitive. This blog explores the significance of necessity in course selection and offers insights into making informed decisions.",
    tags: ["education", "course selection", "career development"],
    likes: 102,
    comments: 15,
    image: ImgFive,
    type: "free",
    category: "Education",
  },
  {
    id: "6",
    title: "Skill Development for the Future",
    author: "Sadia Rahman",
    date: "2024-03-05",
    content:
      "As technology evolves, the skills needed to succeed in the future also change. In this blog, we explore the future of work and how individuals can develop skills to stay ahead of the curve.",
    tags: ["skills", "future of work", "technology"],
    likes: 98,
    comments: 20,
    image: ImgOne,
    type: "premium",
    category: "Technology",
  },
  {
    id: "7",
    title: "Leveraging Online Education",
    author: "Sadia Rahman",
    date: "2024-02-28",
    content:
      "Online education is a game changer in today's world. With access to courses worldwide, individuals can learn anything from anywhere. This blog explores the impact of online education and how to leverage it.",
    tags: ["online education", "e-learning", "self-paced learning"],
    likes: 120,
    comments: 22,
    image: ImgTwo,
    type: "free",
    category: "Education",
  },
  {
    id: "8",
    title: "Preparing for a Tech-Driven World",
    author: "Mehedi Hasan",
    date: "2024-03-02",
    content:
      "Technology is advancing at an unprecedented rate. This blog discusses how individuals can prepare for a tech-driven world by selecting the right courses to enhance their tech skills.",
    tags: ["technology", "tech skills", "education"],
    likes: 89,
    comments: 14,
    image: ImgThree,
    type: "free",
    category: "Technology",
  },
  {
    id: "9",
    title: "Balancing Personal Growth and Education",
    author: "Sadia Rahman",
    date: "2024-03-06",
    content:
      "Personal growth and education go hand in hand. This blog explores the importance of balancing personal development with educational pursuits to achieve a well-rounded life.",
    tags: ["personal growth", "education", "self-improvement"],
    likes: 75,
    comments: 11,
    image: ImgFour,
    type: "premium",
    category: "Self-Improvement",
  },
  {
    id: "10",
    title: "Why Coding is the Skill of the Future",
    author: "Mehedi Hasan",
    date: "2024-02-26",
    content:
      "Coding has become a fundamental skill for the future. This blog explores why coding is essential in various industries and how learning to code can boost your career.",
    tags: ["coding", "future skills", "programming"],
    likes: 112,
    comments: 16,
    image: ImgFive,
    type: "free",
    category: "Technology",
  },
  {
    id: "11",
    title: "The Benefits of Continuous Learning",
    author: "Ahshan Habib",
    date: "2024-03-01",
    content:
      "In an ever-evolving job market, continuous learning is essential. This blog delves into the importance of lifelong learning and how it can open doors to new opportunities.",
    tags: ["continuous learning", "education", "career growth"],
    likes: 95,
    comments: 13,
    image: ImgOne,
    type: "premium",
    category: "Career",
  },
  {
    id: "12",
    title: "The Power of Networking in Education",
    author: "Sadia Rahman",
    date: "2024-03-04",
    content:
      "Networking is a powerful tool in the educational journey. This blog explores how building connections through education can open doors to new opportunities and collaborations.",
    tags: ["networking", "education", "career"],
    likes: 80,
    comments: 9,
    image: ImgTwo,
    type: "free",
    category: "Education",
  },
  {
    id: "13",
    title: "The Impact of AI on Job Markets",
    author: "Mehedi Hasan",
    date: "2024-02-20",
    content:
      "Artificial Intelligence (AI) is transforming industries worldwide. This blog discusses the impact of AI on job markets and how individuals can adapt by acquiring new skills.",
    tags: ["AI", "job markets", "skills"],
    likes: 104,
    comments: 19,
    image: ImgThree,
    type: "free",
    category: "Technology",
  },
  {
    id: "14",
    title: "Understanding Digital Marketing Trends",
    author: "Ahshan Habib",
    date: "2024-02-18",
    content:
      "Digital marketing is constantly evolving. This blog covers the latest digital marketing trends and how professionals can stay ahead by learning the necessary skills.",
    tags: ["digital marketing", "trends", "career"],
    likes: 87,
    comments: 12,
    image: ImgFour,
    type: "premium",
    category: "Marketing",
  },
  {
    id: "15",
    title: "Creative Skills for the Modern Era",
    author: "Sadia Rahman",
    date: "2024-02-22",
    content:
      "Creativity is a valuable asset in the modern workforce. This blog explores how creative skills can be developed through specific courses and why they are important in today’s job market.",
    tags: ["creativity", "skills", "career"],
    likes: 90,
    comments: 17,
    image: ImgFive,
    type: "free",
    category: "Creative",
  },
];

export const getAllBlogData = () => {
  return blogData;
};
