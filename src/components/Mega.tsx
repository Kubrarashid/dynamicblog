import React from "react";
import BlogCard from "../components/BlogCard";
import { title } from "process";

export default function Mega() {
  const posts = [
    {
      id: "1",
      title: "What is AI",
      description:
        "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines programmed to think, learn, and perform tasks that typically require human intelligence.",
      date: "2024-12-29",
      imageUrl: "../images/AI PIC.png",
    },
    {
      id: "2",
      title: "Ethics in AI",
      description:
        "Delve into the ethical considerations surrounding the development and deployment of AI technologies.",
      date: "2024-12-29",
      imageUrl: "../images/-6.png",
    },
    {
      id: "3",
      title: "AI in Healthcare",
      description:
        "Ai is revolutionizing the healthcare industry by enabling early detection of diseases, personalized treatment plans, and more.",
      date: "2024-12-29",
      imageUrl: "../images/-5.png",
    },
    {
      id: "4",
      title: "What is NextJs",
      description:
        "Next.js is a React-based framework that simplifies building modern web applications by offering server-side rendering (SSR), static site generation (SSG), and other advanced features out of the box. It is developed and maintained by Vercel.",
      date: "2024-12-29",
      imageUrl: "../images/NJ PIC.png",
    },
    {
      id: "5",
      title: "What is Python",
      description:
        "Python is a popular, high-level, interpreted programming language known for its simplicity, readability, and versatility. It was created by Guido van Rossum and first released in 1991. Python is widely used for web development, data analysis, artificial intelligence, scientific computing, automation, and more.",
      date: "2024-12-29",
      imageUrl: "../images/PT.png",
    },
    {
      id: "6",
      title: "HTML Block of Webdevelopment",
      description:
        "Explore the fundamental of HTML, the backbone of every web page.",
      date: "2024-12-29",
      imageUrl: "../images/pic-3.png",
    },
    
  ];
  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
        Exploring the World AI and Tecnology
      </h1>
      <div className="grid grid-col-1 sm:grid-cos-2 lg-grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <div className="blog-card">
              <BlogCard post={post} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
