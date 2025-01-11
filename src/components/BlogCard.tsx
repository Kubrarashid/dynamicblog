import React from "react";
import { Card, CardContent, CardTitle } from "../components/ui/card";
interface BlogCardProps {
  post: {
    id: string;
    title: string;
    description: string;
    date: string;
    imageUrl: string;
  };
  isDarkBackground: boolean;
}
const BlogCard = ({ post, isDarkBackground }: BlogCardProps) => {
  return (
    <Card
      className={`p-4 ${
        isDarkBackground ? "bg-emerald-700 text-white" : "text-emerald-700"
       } rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />

      <CardTitle className="text-xl font-normal mt-4 text-center">
        {" "}
        {post.title}
      </CardTitle>
      <br />
      <CardContent className="text-center">
        <p> {post.description}</p>{" "}
      </CardContent>

      <div className="flex flex-col items-center mt-4">
        <p
          className={`text-sm mb-2 ${
            isDarkBackground ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>
        <a
          href={`/posts/${post.id}`}
          className={`w-full px-6 text-black bg-neutral-300 rounded hover:bg-neutral-500 ${
            isDarkBackground
              ? "bg-black hover:bg-red-500"
              : "bg-black hover:bg-red-500"
          }`}
        >
          Read More
        </a>
      </div>
    </Card>
  );
};

export default BlogCard;
