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
import {
  AppContainer,
  PageTitle,
  WelcomeSection,
  WelcomeTitle,
  WelcomeText,
  LoginButton,
  UserSection,
  UserInfo,
  UserEmail,
  LogoutButton,
  AuthFormSection,
  AuthFormBox,
  AuthFormTitle,
  ToggleText,
  ToggleLink
} from "./App.styles";

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
  const [showAuthForms, setShowAuthForms] = useState(false);
  const [authMode, setAuthMode] = useState("login"); // "login" or "register"

  return (
    <>
      <GlobalStyles />
      <Logo />
      <PageTitle>Happy Thoughts</PageTitle>

      <AppContainer>
        {/* Welcome text - always visible */}
        <WelcomeSection>
          <WelcomeTitle>
            Welcome to Happy Thoughts!
          </WelcomeTitle>
          {!user && (
            <>
              <WelcomeText>
                Share your happy thoughts for the day and enjoy reading what makes others happy. 
                If you want to edit or delete your thoughts, you can login below.
              </WelcomeText>
              <LoginButton onClick={() => setShowAuthForms(!showAuthForms)}>
                {showAuthForms ? "Close" : "Login"}
              </LoginButton>
            </>
          )}
        </WelcomeSection>

        {/* Logout button for logged in users */}
        {user && (
          <UserSection>
            <UserInfo>
              <UserEmail>{user.email}</UserEmail>
              <LogoutButton onClick={logout}>
                Logout
              </LogoutButton>
            </UserInfo>
          </UserSection>
        )}

        {/* Auth forms - only show when toggled */}
        {!user && showAuthForms && (
          <AuthFormSection>
            <AuthFormBox>
            {authMode === "login" ? (
              <>
                <AuthFormTitle>Login</AuthFormTitle>
                <LoginForm onSuccess={() => {
                  setShowAuthForms(false);
                  setAuthMode("login");
                }} />
                <ToggleText>
                  Don't have an account?{" "}
                  <ToggleLink onClick={() => setAuthMode("register")}>
                    Sign up here
                  </ToggleLink>
                </ToggleText>
              </>
            ) : (
              <>
                <AuthFormTitle>Register</AuthFormTitle>
                <RegisterForm onSuccess={() => {
                  setShowAuthForms(false);
                  setAuthMode("login");
                }} />
                <ToggleText>
                  Already have an account?{" "}
                  <ToggleLink onClick={() => setAuthMode("login")}>
                    Login here
                  </ToggleLink>
                </ToggleText>
              </>
            )}
            </AuthFormBox>
          </AuthFormSection>
        )}

        {/* Form is always visible for everyone */}
        <Form onSubmitMessage={addMessage} posting={posting} />
        {!loading && posting && <Loader />}

        {editingId && user ? (
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
            onLike={toggleLike}  // Everyone can like
            onDelete={user ? removeMessage : null}  // Only logged in can delete
            onEdit={user ? (id) => setEditingId(id) : null}  // Only logged in can edit
            currentUserId={user?.id}
          />
        )}
      </AppContainer>

      <Footer likeCount={likeCount} />
    </>
  );
};
