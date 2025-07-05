import React, { useRef } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";

const MenuBar = ({ editor }) => {
  const fileInputRef = useRef();

  if (!editor) return null;

  const isActive = (format) =>
    editor.isActive(format)
      ? "bg-[#FFD11A] text-black"
      : "bg-[#1F1F1F] text-gray-300 hover:bg-[#2a2a2a]";

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      editor.chain().focus().setImage({ src: reader.result }).run();
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`px-3 py-1 rounded ${isActive("bold")}`}
      >
        <strong>B</strong>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`px-3 py-1 rounded ${isActive("italic")}`}
      >
        <em>I</em>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`px-3 py-1 rounded ${isActive("heading", { level: 2 })}`}
      >
        H2
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`px-3 py-1 rounded ${isActive("paragraph")}`}
      >
        ¶
      </button>
      <button
        onClick={() => fileInputRef.current.click()}
        className="px-3 py-1 rounded bg-[#1F1F1F] text-gray-300 hover:bg-[#2a2a2a]"
      >
        📁 Upload Image
      </button>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageUpload}
        className="hidden"
      />
    </div>
  );
};

const TiptapEditor = ({ content, setContent }) => {
  const editor = useEditor({
    extensions: [StarterKit, Image],
    content,
    editorProps: {
      attributes: {
        class:
          "prose prose-invert dark:prose-dark max-w-none focus:outline-none text-white p-4 min-h-[400px] bg-[#1A1A1A] rounded-md border border-gray-700",
      },
    },
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default TiptapEditor;
