import { useState, useEffect } from "react";
import {
  fetchThoughts,
  postThought,
  likeThought,
  unlikeThought,
  deleteThought,
  updateThought,
} from "../api/thoughts";
import {
  getLikedThoughts,
  saveLikedThought,
  removeLikedThought,
  getLikeCount,
} from "../utils/localLikes";

export function useThoughts() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [posting, setPosting] = useState(false);
  const [likeCount, setLikeCount] = useState(getLikeCount());

  // Fetch all thoughts
  const getMessages = async () => {
    setLoading(true);
    try {
      const data = await fetchThoughts();
      setMessages(data.results);
    } catch (err) {
      console.error("Fetch failed", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  // Add a new thought
  const addMessage = async (message) => {
    const optimisticThought = {
      _id: Date.now().toString(),
      message,
      hearts: 0,
      createdAt: new Date().toISOString(),
    };
    setMessages((prev) => [optimisticThought, ...prev]);
    setPosting(true);

    try {
      await postThought(message);
      await getMessages();
    } catch (err) {
      console.error("Post failed", err);
    } finally {
      setPosting(false);
    }
  };

  // Like or unlike a thought
  const toggleLike = async (id) => {
    const likedThoughts = getLikedThoughts();
    const isAlreadyLiked = likedThoughts[id];

    setMessages((prev) =>
      prev.map((msg) =>
        msg._id === id
          ? { ...msg, hearts: msg.hearts + (isAlreadyLiked ? -1 : 1) }
          : msg
      )
    );

    try {
      if (isAlreadyLiked) {
        await unlikeThought(id);
        removeLikedThought(id);
      } else {
        await likeThought(id);
        saveLikedThought(id);
      }
      setLikeCount(getLikeCount());
    } catch (err) {
      console.error("Like/unlike failed", err);
    }
  };

  // Remove a thought
  const removeMessage = async (id) => {
    try {
      await deleteThought(id);
      setMessages((prev) => prev.filter((msg) => msg._id !== id));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  // Save edits to a thought
  const saveMessage = async (id, updatedFields) => {
    try {
      await updateThought(id, updatedFields);
      await getMessages();
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  return {
    messages,
    loading,
    posting,
    likeCount,
    addMessage,
    toggleLike,
    removeMessage,
    saveMessage,
  };
}
