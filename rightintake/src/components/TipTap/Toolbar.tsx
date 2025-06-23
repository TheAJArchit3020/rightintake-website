"use client";
import { type Editor } from "@tiptap/react";
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading2,
  Heading1,
  Link as LinkIcon,
} from "lucide-react";
import styles from "@/components/css/TipTap/Toolbar.module.css";
type Props = {
  editor: Editor | null;
};

export function Toolbar({ editor }: Props) {
  if (!editor) return null;

  return (
    <div className={`${styles.toolbarWrapper}`}>
      <button
        className={`${styles.toolButton} ${
          editor.isActive("bold") ? styles.active : ""
        }`}
        onClick={() => editor.chain().focus().toggleBold().run()}
        type="button"
      >
        <Bold size={16} />
      </button>

      <button
        className={`${styles.toolButton} ${
          editor.isActive("italic") ? styles.active : ""
        }`}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        type="button"
      >
        <Italic size={16} />
      </button>

      <button
        className={`${styles.toolButton} ${
          editor.isActive("strike") ? styles.active : ""
        }`}
        onClick={() => editor.chain().focus().toggleStrike().run()}
        type="button"
      >
        <Strikethrough size={16} />
      </button>

      <button
        className={`${styles.toolButton} ${
          editor.isActive("heading", { level: 1 }) ? styles.active : ""
        }`}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        type="button"
      >
        <Heading1 size={16} />
      </button>

      <button
        className={`${styles.toolButton} ${
          editor.isActive("heading", { level: 2 }) ? styles.active : ""
        }`}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        type="button"
      >
        <Heading2 size={16} />
      </button>

      <button
        className={`${styles.toolButton} ${
          editor.isActive("bulletList") ? styles.active : ""
        }`}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        type="button"
      >
        <List size={16} />
      </button>

      <button
        className={`${styles.toolButton} ${
          editor.isActive("orderedList") ? styles.active : ""
        }`}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        type="button"
      >
        <ListOrdered size={16} />
      </button>

      <button
        className={styles.toolButton}
        onClick={() => {
          const url = prompt("Enter URL:");
          if (url) {
            editor
              .chain()
              .focus()
              .extendMarkRange("link")
              .setLink({ href: url })
              .run();
          }
        }}
        type="button"
      >
        <LinkIcon size={16} />
      </button>

      <input
        type="color"
        onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
        className={styles.colorInput}
      />
    </div>
  );
}
