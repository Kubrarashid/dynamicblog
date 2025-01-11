import React from "react";

export default function Feature() {
  return (
    <div>
      <section className="py-8 bg-neutral-50 mb-40">
        <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-leftanimate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-black text-blue-700">
          Kubra Rashid: Navigating the Secrets of Technology in Tech Chronicles
          blog!
        </h2>
        <p className="text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
          Join Kubra Rashid as she delves into dynamic world of web development.
          From foundational concepts to advanced techniques, this blog is packed
          with insights, tutorials, and tips to empower aspiring developer in
          crafting stunning and functional website. Explor, learn, and elevate
          your web devlopment journey!
        </p>
        <div className="mx-auto max-w-7xl px-5">
            <h1 className="text-3xl font-bold text-center my-8 text-blue-600 animate-color-change">Exploring Our Categries</h1>
            <div className="grid grid-cols-2 gap-6 sm:grid-flow-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100">
                {[
                    "What is AI",
                    "Ethics of AI",
                    "AI in Healthcare",
                    "What is Python",
                    "What is Next Js",
                    "Web Development",
                ].map((category, index) => (
                    <div className="relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center text-neutral-600">
                        <p className="text-center text-lg font-semibold">{category}</p>
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out"></div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
