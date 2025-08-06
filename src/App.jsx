import React, { useContext, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import { useThoughts } from "./hooks/useThoughts";
import { RegisterForm } from "./components/RegisterForm";
import { LoginForm } from "./components/LoginForm";
import { EditThought } from "./components/EditThought";
import { Form } from "./components/Form";
import { MessageList } from "./components/MessageList";
import { GlobalStyles } from "./GlobalStyles";
import { Logo } from "./components/Logo";
import { Footer } from "./components/Footer";
import { Loader } from "./components/Loader";

export function App() {
  const { user, logout } = useContext(AuthContext);
  const {
    messages,
    loading,
    posting,
    likeCount,
    addMessage,
    toggleLike,
    removeMessage,
    saveMessage,
  } = useThoughts();
  const [editingId, setEditingId] = useState(null);

  return (
    <>
      <GlobalStyles />
      <Logo />
      <h1>Happy Thoughts</h1>

      {!user ? (
        <div>
          <h2>Register</h2>
          <RegisterForm />
          <h2>Login</h2>
          <LoginForm />
        </div>
      ) : (
        <>
          <div style={{ textAlign: "right", margin: "0 20px" }}>
            <span>Logged in as {user.email}</span>
            <button onClick={logout} style={{ marginLeft: 8 }}>
              Logout
            </button>
          </div>

          <Form onSubmitMessage={addMessage} posting={posting} />
          {!loading && posting && <Loader />}

          {editingId ? (
            <EditThought
              thought={messages.find((m) => m._id === editingId)}
              onSave={(id, fields) => {
                saveMessage(id, fields);
                setEditingId(null);
              }}
              onCancel={() => setEditingId(null)}
            />
          ) : (
            <MessageList
              messages={messages}
              loading={loading}
              onLike={toggleLike}
              onDelete={removeMessage}
              onEdit={(id) => setEditingId(id)}
              currentUserId={user._id}
            />
          )}
        </>
      )}

      <Footer likeCount={likeCount} />
    </>
  );
}
