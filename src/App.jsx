import { useEffect, useState } from "react";
import { EditThought } from "./components/EditThought";
import { MessageList } from "./components/MessageList";
import {
  fetchThoughts,
  postThought,
  likeThought,
  unlikeThought,
  deleteThought,
  updateThought,
} from "./api/thoughts";
import { Form } from "./components/Form";
import { GlobalStyles } from "./GlobalStyles";
import { Loader } from "./components/Loader";
import { Logo } from "./components/Logo";
import { Footer } from "./components/Footer";
import {
  getLikedThoughts,
  saveLikedThought,
  removeLikedThought,
  getLikeCount,
} from "./utils/localLikes";

export const App = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [posting, setPosting] = useState(false);
  const [likeCount, setLikeCount] = useState(getLikeCount());
  const [editingId, setEditingId] = useState(null);

  // Hämta alla meddelanden från backend
  const getMessages = async () => {
    try {
      setLoading(true);
      const data = await fetchThoughts();
      setMessages(data.results); // `results` kommer från ditt backend
    } catch (error) {
      console.error("Fetch failed", error);
    } finally {
      setLoading(false);
    }
  };

  // Skicka in ett nytt meddelande
  const handleNewMessage = async (message) => {
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
    } catch (error) {
      console.error("Post failed", error);
    } finally {
      setPosting(false);
    }
  };

  // Gilla eller ogilla ett meddelande
  const handleLike = async (id) => {
    const likedThoughts = getLikedThoughts();
    const isAlreadyLiked = likedThoughts[id];

    // Optimistisk UI-uppdatering
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
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
    } catch (error) {
      console.error("Like/unlike failed", error);
    }
  };

  // Radera ett meddelande
  const handleDeleteThought = async (id) => {
    try {
      await deleteThought(id);
      setMessages((prev) => prev.filter((msg) => msg._id !== id));
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  // Spara ändringar från EditThought
  const handleSave = async (id, updatedFields) => {
    try {
      await updateThought(id, updatedFields);
      setEditingId(null);
      await getMessages();
    } catch (error) {
      console.error("Update failed", error);
    }
  };

  // "Väcka" backend + hämta meddelanden
  useEffect(() => {
    const wakeUpAndFetch = async () => {
      setLoading(true);
      try {
        await fetch("https://js-project-api-cathi.onrender.com/");
        await getMessages();
      } catch (error) {
        console.error("Failed to wake backend or fetch data", error);
      } finally {
        setLoading(false);
      }
    };

    wakeUpAndFetch();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Logo />
      <h1>Happy Thoughts</h1>
      <Form onSubmitMessage={handleNewMessage} posting={posting} />
      {!loading && posting && <Loader />}

      {editingId ? (
        <EditThought
          thought={messages.find((m) => m._id === editingId)}
          onSave={handleSave}
          onCancel={() => setEditingId(null)}
        />
      ) : (
        <MessageList
          messages={messages}
          loading={loading}
          onLike={handleLike}
          onDelete={handleDeleteThought}
          onEdit={(id) => setEditingId(id)}
        />
      )}

      <Footer likeCount={likeCount} />
    </>
  );
};
