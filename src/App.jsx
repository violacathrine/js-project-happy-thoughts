// src/App.jsx
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

export const App = () => {
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
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>Happy Thoughts</h1>

      {!user ? (
        <div style={{ maxWidth: 400, margin: "0 auto", padding: "20px" }}>
          <h2>Register</h2>
          <RegisterForm />
          <hr />
          <h2>Login</h2>
          <LoginForm />
        </div>
      ) : (
        <div style={{ width: "100%", maxWidth: 500, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <span>Logged in as {user.email}</span>
            <button onClick={logout}>Logout</button>
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
        </div>
      )}

      <Footer likeCount={likeCount} />
    </>
  );
};
