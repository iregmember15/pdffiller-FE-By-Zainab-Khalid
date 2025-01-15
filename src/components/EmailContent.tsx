import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor = () => {
  const [value, setValue] = useState('');

  const modules = {
    toolbar: {
      container: [
        // Formatting options
        [{ font: [] }], // Font family
        [{ size: [] }], // Font size
        [{ header: [1, 2, 3, 4, 5, 6, false] }], // Headers
        ['bold', 'italic', 'underline', 'strike'], // Text styles
        [{ color: [] }, { background: [] }], // Font color and background
        [{ align: [] }], // Text alignment
        ['blockquote', 'code-block'], // Block styles

        // List options
        [{ list: 'ordered' }, { list: 'bullet' }], // Ordered and bullet lists
        [{ indent: '-1' }, { indent: '+1' }], // Indentation

        // Insert options
        ['link', 'image'],

        // Undo and redo
        ['clean'], // Clear formatting
      ],
    },
   
  };

  // Editor formats
  const formats = [
    'font',
    'size',
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'color',
    'background',
    'align',
    'blockquote',
    'code-block',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ];

  return (
    <div className="">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
        placeholder="Write email content here"
      />
    </div>
  );
};

export default RichTextEditor;
