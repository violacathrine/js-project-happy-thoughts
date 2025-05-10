import { useEffect, useState } from "react";
import { MessageCard } from "./MessageCard";
import { Loader } from "./Loader";

export const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchMessages = () => {
    setLoading(true);
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch messages:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  if (loading) {
    return <Loader />
  }

  return (
    <>
      {messages.map((msg) => (
        <MessageCard
          key={msg._id}
          message={msg}
          onLike={fetchMessages} 
        />
      ))}
    </>
  );
};
