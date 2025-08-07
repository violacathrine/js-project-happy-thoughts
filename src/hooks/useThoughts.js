// src/hooks/useThoughts.js
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

  // 1) Hämta listan från backend
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

  // 2) Posta en ny tanke
  const addMessage = async (message) => {
    const optimistic = {
      _id: Date.now().toString(),
      message,
      hearts: 0,
      createdAt: new Date().toISOString(),
    };
    setMessages((prev) => [optimistic, ...prev]);
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

  // 3) Gilla/ogilla
  const toggleLike = async (id) => {
    const liked = getLikedThoughts();
    const isAlready = liked[id];

    setMessages((prev) =>
      prev.map((m) =>
        m._id === id ? { ...m, hearts: m.hearts + (isAlready ? -1 : 1) } : m
      )
    );

    try {
      if (isAlready) {
        await unlikeThought(id);
        removeLikedThought(id);
      } else {
        await likeThought(id);
        saveLikedThought(id);
      }
      setLikeCount(getLikeCount());
    } catch (err) {
      console.error("Like toggle failed", err);
    }
  };

  // 4) Radera en tanke
  const removeMessage = async (id) => {
    try {
      await deleteThought(id);
      setMessages((prev) => prev.filter((m) => m._id !== id));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  // 5) Uppdatera en tanke
  const saveMessage = async (id, fields) => {
    try {
      await updateThought(id, fields);
      setMessages((prev) =>
        prev.map((m) => (m._id === id ? { ...m, ...fields } : m))
      );
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
