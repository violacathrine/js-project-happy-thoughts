import React, { useState } from "react";

export function EditThought({ thought, onSave, onCancel }) {
  const [message, setMessage] = useState(thought.message);
  const [category, setCategory] = useState(thought.category || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Invoke the onSave callback provided by parent
    await onSave(thought._id, { message, category });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ border: "1px solid #ccc", padding: 16, marginBottom: 16 }}
    >
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        minLength={5}
        maxLength={140}
        required
        style={{ width: "100%", height: 80 }}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Välj kategori</option>
        {["Food", "Work", "Life", "Other"].map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <div style={{ marginTop: 8 }}>
        <button type="submit">Spara</button>
        <button type="button" onClick={onCancel} style={{ marginLeft: 8 }}>
          Avbryt
        </button>
      </div>
    </form>
  );
}
