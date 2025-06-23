import React from "react";
import styles from "@/components/css/BlogBlocksCss/ListBlock.module.css";

interface ListBlockData {
  items: string[];
  type: "ordered" | "unordered";
}

interface Props {
  data: ListBlockData;
  onChange: (data: ListBlockData) => void;
}

export const ListBlock: React.FC<Props> = ({ data, onChange }) => {
  const updateItem = (index: number, value: string) => {
    const items = [...data.items];
    items[index] = value;
    onChange({ ...data, items });
  };

  const addItem = () => {
    onChange({ ...data, items: [...data.items, ""] });
  };

  const removeItem = (index: number) => {
    const items = data.items.filter((_, i) => i !== index);
    onChange({ ...data, items });
  };

  return (
    <div className={styles.wrapper}>
      <label>List Type</label>
      <select
        value={data.type}
        onChange={(e) =>
          onChange({ ...data, type: e.target.value as "ordered" | "unordered" })
        }
      >
        <option value="unordered">Unordered</option>
        <option value="ordered">Ordered</option>
      </select>

      {data.items.map((item, index) => (
        <div key={index} className={styles.itemRow}>
          <input
            type="text"
            value={item}
            onChange={(e) => updateItem(index, e.target.value)}
          />
          <button type="button" onClick={() => removeItem(index)}>
            ❌
          </button>
        </div>
      ))}

      <button type="button" onClick={addItem}>
        ➕ Add Item
      </button>
    </div>
  );
};

export const renderListBlock = (data: ListBlockData) => {
  return data.type === "ordered" ? (
    <ol className={styles.list}>
      {data.items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ol>
  ) : (
    <ul className={styles.list}>
      {data.items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
};
