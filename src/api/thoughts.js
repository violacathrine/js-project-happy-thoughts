// src/api/thoughts.js
const BASE_URL = import.meta.env.VITE_API_URL;

// Hämtar inloggnings-token från localStorage
function getAuthHeader() {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

// GET alla tankar (öppet endpoint)
export const fetchThoughts = async () => {
  const res = await fetch(`${BASE_URL}/thoughts`);
  if (!res.ok) throw new Error("Failed to fetch thoughts");
  return res.json();
};

// POST ny tanke (fungerar för alla, med eller utan token)
export const postThought = async (message) => {
  const res = await fetch(`${BASE_URL}/thoughts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(), // Includes token if user is logged in
    },
    body: JSON.stringify({ message }),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Failed to post message");
  }
  return res.json();
};

// PATCH uppdatera tanke (kräver token)
export const updateThought = async (id, updatedFields) => {
  const res = await fetch(`${BASE_URL}/thoughts/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(),
    },
    body: JSON.stringify(updatedFields),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Failed to update message");
  }
  return res.json();
};

// PATCH gilla tanke (fungerar för alla)
export const likeThought = async (id) => {
  const res = await fetch(`${BASE_URL}/thoughts/${id}/like`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(), // Includes token if user is logged in
    },
  });
  if (!res.ok) throw new Error("Failed to like message");
  return res.json();
};

// PATCH ogilla tanke (fungerar för alla)
export const unlikeThought = async (id) => {
  const res = await fetch(`${BASE_URL}/thoughts/${id}/unlike`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(), // Includes token if user is logged in
    },
  });
  if (!res.ok) throw new Error("Failed to unlike message");
  return res.json();
};

// DELETE tanke (kräver token)
export const deleteThought = async (id) => {
  const res = await fetch(`${BASE_URL}/thoughts/${id}`, {
    method: "DELETE",
    headers: getAuthHeader(),
  });
  if (!res.ok) throw new Error("Failed to delete message");
  return res.json();
};
