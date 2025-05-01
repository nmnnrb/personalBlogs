import React, { useContext } from 'react';
import { dummyData } from '../DummyData'; // or fetch from API/database
import { ColorContext } from '../context/ColorContext.jsx';

const PostPage = () => {
    const { theme } = useContext(ColorContext);
  const post = dummyData[0]; // assume you get one post for now

  return (
    <div className="h-screen w-screen mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Title</h1>

      <div
        className={`ql-editor ${theme.bg} ${theme.text} border-2  p-4 rounded-md shadow-md`}
        dangerouslySetInnerHTML={{ __html: post.Content }}
      />
    </div>
  );
};

export default PostPage;
