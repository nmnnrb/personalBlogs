import React, { useState, useRef, useContext } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill's default theme styles
import '../components/customQuillStyles.css';
import { ColorContext } from '../context/ColorContext.jsx'; // Ensure the correct extension

const ContentCreate = () => {
  const { theme } = useContext(ColorContext);
  const [editorContent, setEditorContent] = useState("");
  const quillRef = useRef(null); // ref to access quill editor
  const [preview, setPreview] = useState(false);
  const [title, setTitle] = useState("");



  const handleEditorChange = (value) => {
    setEditorContent(value);
  };


  const handleSubmit = () => {

    const post = {
        title: title,
        content: editorContent,
      };


      console.log("final Content:", post);
  };

  const showPreview = () => {
    setPreview(!preview);
  };

  return (
    <div className="content-create rounded-md md:px-12 md:py-8 pb-12 shadow-lg">
      <h2 className="text-xl font-serif mb-4 text-center md:text-left">Write Your Blog</h2>

      <div className="flex justify-between items-center mb-4">
        <button
          onClick={showPreview}
          className={`transition-transform transform hover:scale-105 ${theme.btn} px-4 py-1 ${theme.text} border border-gray-300 rounded-md shadow-sm`}
        >
          {preview ? "Hide Preview" : "Preview"}
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow-md transition-transform transform hover:scale-105"
        >
          Submit
        </button>
      </div>
    
    <div className="editTitle relative"
     style={{
        height: '500px',
        maxWidth: '100%',
      }}
    >


    <input
        type="text"
        className={` absolute  ${theme.text} ${theme.placeholder} outline-none  z-10    w-[100%]  p-2`}
        placeholder="Enter Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}

        style={{
            maxWidth: '100%',
          }}
      />



      {/* Editor */}
      <ReactQuill
        ref={quillRef}
        value={editorContent}
        onChange={handleEditorChange}
        modules={{
          toolbar: [
            [{ header: [] }],
            [{ font: [] }],
            [{ 'size': ['small', 'normal', 'large', 'huge'] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ bold: true }, { italic: true }, { underline: true }],
            [{ align: [] }],
            ['link'],
            ['image'],
            ['blockquote'],
            [{ color: [] }, { background: [] }],
            ['code-block'],
            ['divider'],
          ],
        }}
        formats={[
          'header', 'font', 'size', 'list', 'bold', 'italic', 'underline',
          'align', 'link', 'image', 'blockquote', 'color', 'background', 'code-block',
          'divider',
        ]}
        style={{
          height: '500px',
          maxWidth: '100%',
          marginTop: '40px',
          border: `2px solid ${theme.borderColor}`, // Dynamic border color
          paddingTop: '40px',

        }}
        placeholder="Write something amazing..."
        className={`${theme.bg} ${theme.text} z-100  overflow-y-auto overflow-x-auto ${theme.placeholder} rounded-md shadow-sm`}
      />
    </div>

      {/* Preview Section */}
      {preview && (
        <div className='flex justify-center items-center  p-5'>
          <div
            className="max-w-[100%] max-h-[80%]  overflow-y-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-md shadow-lg mt-4"
            style={{
              border: `0.5px solid ${theme.borderColor}`,
              backgroundColor: theme.dbg, // Corrected typo here
              boxShadow: `0 0 10px ${theme.borderColor}`,
            }}
          >
            <button className='sticky top-[4px] right-full bg-red-500 text-white hover:scale-125 transition px-4 py-2 rounded-full duration-300' onClick={showPreview}>X</button>
            <h3 className="text-3xl font-mono underline font-medium  mb-4">Preview: (Your post look like this)</h3>
            <div
              className="ql-editor"
              dangerouslySetInnerHTML={{ __html: editorContent }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentCreate;
