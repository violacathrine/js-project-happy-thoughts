// Hämta alla gillade thoughts
export const getLikedThoughts = () => {
  const data = localStorage.getItem("likedThoughts");
  return data ? JSON.parse(data) : {};
};

// Spara en ny like
export const saveLikedThought = (id) => {
  const current = getLikedThoughts();
  const updated = { ...current, [id]: true };
  localStorage.setItem("likedThoughts", JSON.stringify(updated));
};

// Ta bort en like
export const removeLikedThought = (id) => {
  const current = getLikedThoughts();
  delete current[id];
  localStorage.setItem("likedThoughts", JSON.stringify(current));
};

// Räkna antalet likes
export const getLikeCount = () => {
  return Object.keys(getLikedThoughts()).length;
};
