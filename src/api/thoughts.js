const BASE_URL = import.meta.env.VITE_API_URL;

// GET messages
export const fetchThoughts = async () => {
  const res = await fetch(`${BASE_URL}/thoughts`);
  if (!res.ok) throw new Error("Failed to fetch thoughts");
  return res.json();
};

// POST message
export const postThought = async (message) => {
  const res = await fetch(`${BASE_URL}/thoughts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });
  if (!res.ok) throw new Error("Failed to post message");
  return res.json();
};

// PATCH update message
export const updateThought = async (id, updatedFields) => {
  const res = await fetch(`${BASE_URL}/thoughts/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedFields),
  });
  if (!res.ok) throw new Error("Failed to update message");
  return res.json();
};

// LIKE message
export const likeThought = async (id) => {
  const res = await fetch(`${BASE_URL}/thoughts/${id}/like`, {
    method: "PATCH",
  });
  if (!res.ok) throw new Error("Failed to like message");
  return res.json();
};

// UNLIKE message
export const unlikeThought = async (id) => {
  const res = await fetch(`${BASE_URL}/thoughts/${id}/unlike`, {
    method: "PATCH",
  });
  if (!res.ok) throw new Error("Failed to unlike message");
  return res.json();
};

// DELETE message
export const deleteThought = async (id) => {
  const res = await fetch(`${BASE_URL}/thoughts/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete message");
  return res.json();
};
