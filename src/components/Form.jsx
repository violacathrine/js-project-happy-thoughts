import { useState } from "react";
import styled from "styled-components";
import { MessageCard } from "./MessageCard";

const FormWrapper = styled.section`
  max-width: 500px;
  margin: 0 auto;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: rgba(237, 220, 217, 0.65);
  height: auto;
  width: auto;
  border: 2px solid #264143;
  box-shadow: 7px 7px 0px #e99f4c;
  border-radius: 5px;
`;

const StyledLabel = styled.label`
  color: #264143;
  font-weight: 900;
  font-size: 20px;
  margin: 10px 10px 0px;
`;

const StyledTextarea = styled.textarea`
  outline: none;
  width: 100%;
  border: 2px solid #264143;
  margin-top: 10px;
  font-size: 15px;
  resize: none;
`;

const StyledButton = styled.button`
  padding: 8px;
  margin: 10px;
  font-size: 16px;
  background: rgb(244, 150, 197);
  font-weight: 600;
  border: none;
  border-radius: 50px;
`;

export const Form = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newMessage = {
      id: Date.now(),
      text: message,
      createdAt: new Date(),
    };

    setMessages([newMessage, ...messages]);
    setMessage("");
  };

  return (
    <>
      <FormWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <StyledLabel>
            What's making you happy today?
            <StyledTextarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  handleSubmit(event);
                }
              }}
            />
          </StyledLabel>
          <StyledButton type="submit">Send Happy Thought</StyledButton>
        </StyledForm>
      </FormWrapper>

      {messages.map((msg) => (
        <MessageCard key={msg.id} message={msg} />
      ))}
    </>
  );
};
