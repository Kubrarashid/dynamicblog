"use client";
import React from "react";
import CommentSection from "@/components/CommentSection";
import AuthorCard from "@/components/AuthorCard";
import Footer from "@/components/Footer";

const posts = [
  {
    id: "1",
    title: "What is AI",
    description:
      "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines programmed to think, learn, and perform tasks that typically require human intelligence. These tasks include problem-solving, decision-making, understanding language, recognizing patterns, and even creating content. AI systems use algorithms, data, and computational power to achieve these capabilities. AI is categorized into: Narrow AI: Specialized in a single task (e.g., recommendation systems, Siri). General AI: Aimed at understanding and performing any intellectual task a human can do (currently theoretical). Super AI: Hypothetical AI surpassing human intelligence in all aspects. It is widely used in areas like healthcare, finance, education, entertainment, and transportation.",
    image: "../images/AI PIC.png",
  },
  {
    id: "2",
    title: "Ethics in AI",
    description:
      "Delve into the ethical considerations surrounding the development and deployment of AI technologies. The ethics of AI revolves around ensuring that artificial intelligence systems are developed and deployed in ways that align with human values, fairness, safety, and societal well-being. It addresses moral challenges and potential risks associated with AI technology.",
    image: "../images/-6.png",
  },
  {
    id: "3",
    title: "AI in Healthcare",
    description:
      "Ai is revolutionizing the healthcare industry by enabling early detection of diseases, personalized treatment plans, and more. Future of AI in Healthcare: The integration of AI with technologies like the Internet of Medical Things (IoMT) and blockchain promises more secure, interconnected, and patient-centric healthcare systems. As AI continues to evolve, it holds the potential to revolutionize personalized medicine, improve global healthcare accessibility, and drive breakthroughs in medical research.",
    image: "../images/-5.png",
  },
  {
    id: "4",
    title: "HWhat is NextJs",
    description:
      "Next.js is a React-based framework that simplifies building modern web applications by offering server-side rendering (SSR), static site generation (SSG), and other advanced features out of the box. It is developed and maintained by Vercel. Key Features: 1. Server-Side Rendering (SSR): Automatically renders pages on the server before sending them to the browser, improving SEO and performance. 2. Static Site Generation (SSG): Allows pre-rendering pages at build time, delivering fast and optimized pages. 3. API Routes: Enables developers to build backend APIs directly within the Next.js application. 4. Routing System: Offers a file-based routing system, where files in the pages/ folder automatically become routes. 5. Image Optimization: Provides built-in support for image optimization with features like lazy loading and resizing. 6. Incremental Static Regeneration (ISR): Updates specific static pages after deployment without rebuilding the entire site.",
    image: "../images/NJ PIC.png",
  },
  {
    id: "5",
    title: "What is Python",
    description:
      "EPython is a popular, high-level, interpreted programming language known for its simplicity, readability, and versatility. It was created by Guido van Rossum and first released in 1991. Python is widely used for web development, data analysis, artificial intelligence, scientific computing, automation, and more. Key Features of Python: Python's syntax is straightforward and similar to plain English, making it easy to learn and use. 2. Dynamically Typed: You don’t need to declare variable types; Python determines the type at runtime. 3. Interpreted Language: Python code is executed line by line, which makes debugging easier",
    image: "../images/PT.png",
  },
  {
    id: "6",
    title: "HTML Block of Webdevelopment",
    description:
      "Explore the fundamental of HTML, the backbone of every web page. In web development, an HTML block refers to a section of HTML code that defines a structural or functional part of a web page. It often includes elements grouped together to form a cohesive block, like a navigation bar, footer, content section, or card.",
    image: "../images/AI PIC.png",
  },
];

export default function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h2 className="text-2xl font-bold text-center mt-10">Post Not Found</h2>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center">
        {post.title}
      </h1>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded-md mt-4"
        />
      )}
      <div className="mt-6 text-lg text-slate-700">
        {renderParagraphs(post.description)}
      </div>
      <CommentSection postId={""} />
      <AuthorCard />
      <Footer />
    </div>
  );
}