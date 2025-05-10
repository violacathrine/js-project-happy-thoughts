const BASE_URL = import.meta.env.VITE_API_URL;

// GET Messages
export const fetchThoughts = () => {
  return fetch(BASE_URL).then((res) => {
    if (!res.ok) throw new Error("Failed to fetch thoughts");
    return res.json();
  });
};

// POST messages
export const postThought = (message) => {
  return fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to post message");
    return res.json();
  });
};

// Like messages
export const likeThought = (id) => {
  return fetch(`${BASE_URL}/${id}/like`, {
    method: "POST",
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to like message");
    return res.json();
  });
};
