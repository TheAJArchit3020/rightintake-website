"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import styles from "@/components/css/TipTap/Tiptap.module.css";
import { Toolbar } from "./Toolbar";
import Link from "@tiptap/extension-link";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
export default function Tiptap({
  description,
  onChange,
}: {
  description: string;
  onChange: (richText: string) => void;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      Link.configure({
        openOnClick: false,
        autolink: true,
        linkOnPaste: true,
      }),
      TextStyle,
      Color,
    ],
    content: description,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },

    editorProps: {
      attributes: {
        class: styles.editorStyle,
      },
    },
  });

  return (
    <div className={`${styles.RichTextEditorWrapper}`}>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
