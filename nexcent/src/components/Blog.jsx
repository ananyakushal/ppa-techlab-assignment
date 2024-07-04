import React from 'react';
import blog from "../assests/blog.png"

const Blog = () => {
  const blogPosts = [
    {
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      image: "path/to/your/image1.jpg",
      link: "#"
    },
    {
      title: "What are your safeguarding responsibilities and how can you manage them?",
      image: "path/to/your/image2.jpg",
      link: "#"
    },
    {
      title: "Revamping the Membership Model with Triathlon Australia",
      image: "path/to/your/image3.jpg",
      link: "#"
    },
  ];

  return (
    <div className="py-8 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Caring is the new marketing</h2>
        <p className="text-gray-600 mb-12 items-center">The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who’s joining the community, read about how our community are increasing their membership income and lot’s more.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img className="w-[65%] h-48 object-cover" src={blog} alt={post.title} />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <a href={post.link} className="text-green-500 hover:text-green-700">Read more →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;