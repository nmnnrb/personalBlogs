import React from 'react';
import { dummyData } from '../DummyData'; 

const AllPosts = () => {
  const posts = dummyData; 

  return (
    <div className="flex flex-col items-start flex-wrap justify-start h-full w-full mx-auto md:py-12 md:px-18 p-6">
      <h1 className="text-2xl font-bold mb-6">All Posts</h1>
      <div className="grid grid-cols-1 w-full sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div key={index} className="p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Title</h2>
            <p className="text-gray-700 mb-4">Content</p>
            <button className="mt-2 text-blue-500 hover:underline">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllPosts;
