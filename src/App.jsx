import { useEffect, useState } from "react";
import { fetchThoughts, postThought, likeThought } from "./api/thoughts";
import { Form } from "./components/Form";
import { MessageList } from "./components/MessageList";
import { GlobalStyles } from "./GlobalStyles";
import { Loader } from "./components/Loader";

export const App = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get all messages
  const getMessages = () => {
    setLoading(true);
    fetchThoughts()
      .then(setMessages)
      .catch((error) => console.error("Fetch failed", error))
      .finally(() => setLoading(false));
  };

  // Post new message
  const handleNewMessage = (message) => {
    postThought(message)
      .then(getMessages)
      .catch((error) => console.error("Post failed", error));
  };

  // Like message
  const handleLike = (id) => {
    likeThought(id)
      .then(getMessages)
      .catch((error) => console.error("Like failed", error));
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <>
      <GlobalStyles />
      <h1>Happy Thoughts</h1>
      <Form onSubmitMessage={handleNewMessage} />
      <MessageList messages={messages} loading={loading} onLike={handleLike} />
    </>
  );
};
