import { MessageCard } from "./MessageCard";
import { Loader } from "./Loader";

export const MessageList = ({ messages = [], loading, onLike, onDelete, onEdit }) => {
  if (loading) {
    return <Loader />;
  }

  const sortedMessages = [...messages].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <>
      {sortedMessages.map((msg) => (
        <MessageCard
          key={msg._id}
          message={msg}
          onLike={onLike}
          onDelete={onDelete}
          onEdit={() => onEdit(msg._id)}
        />
      ))}
    </>
  );
};
