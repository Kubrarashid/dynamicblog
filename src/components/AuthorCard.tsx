import React from "react";

const AuthorCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
      <div className="flex items-center animation-fadeIn">
        <img
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 order-red-500"
          src="./images/profile.png"
          alt="Auther Image"
        />
        <div>
          <h3 className="text-xl font-bold">Kubra Rashid</h3>
          <p className="text-slate-500">
            {" "}
            Student at Governer House Karachi{" "}</p>
        </div>
      </div>

      <p className="mt-4 text-black leading-relaxed">
        I am a student at the Governor House IT Initiative, specializing in AI Web 3.0 and Metaverse Passionate about exploring cutting-edge technologies and their applications, I am eager to contribute to the future of innovation.
      </p>

      <div className="mt-4 flex space-x-3">
        <a href="#"
        className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">
          Twitter
        </a>

        <a href="#"
        className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">
          Linkedin
        </a>

        <a href="#"
        className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">
          Facebook
        </a>
      </div>
    </div>
  );
};

export default AuthorCard;
